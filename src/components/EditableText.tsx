
import React, { useState, useRef, useEffect } from 'react';
import { useEditable } from '@/contexts/EditableContext';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface EditableTextProps {
  contentKey: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const EditableText: React.FC<EditableTextProps> = ({ 
  contentKey, 
  className, 
  as: Component = 'span',
  children,
  style
}) => {
  const { isEditMode, content, updateContent } = useEditable();
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const currentContent = content[contentKey] || children || '';

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleClick = () => {
    if (isEditMode) {
      setEditValue(currentContent.toString());
      setIsEditing(true);
    }
  };

  const handleSave = async () => {
    if (editValue.trim() !== currentContent.toString()) {
      setIsSaving(true);
      try {
        await updateContent(contentKey, editValue.trim());
        toast({
          title: "Guardado",
          description: "El contenido se ha guardado correctamente",
          duration: 2000,
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "No se pudo guardar el contenido",
          variant: "destructive",
          duration: 3000,
        });
      } finally {
        setIsSaving(false);
      }
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue('');
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  if (isEditing) {
    return (
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          disabled={isSaving}
          className={cn(
            "bg-transparent border-b-2 border-primary outline-none",
            isSaving && "opacity-50 cursor-not-allowed",
            className
          )}
          style={style}
        />
        {isSaving && (
          <div className="absolute -right-6 top-1/2 -translate-y-1/2">
            <div className="w-3 h-3 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    );
  }

  return (
    <Component
      className={cn(
        className,
        isEditMode && "cursor-pointer hover:bg-primary/10 hover:outline hover:outline-1 hover:outline-primary/30 rounded px-1 transition-all"
      )}
      onClick={handleClick}
      style={style}
    >
      {currentContent}
    </Component>
  );
};

export default EditableText;
