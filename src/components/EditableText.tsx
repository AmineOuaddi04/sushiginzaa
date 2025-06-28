
import React, { useState, useRef, useEffect } from 'react';
import { useEditable } from '@/contexts/EditableContext';
import { cn } from '@/lib/utils';

interface EditableTextProps {
  contentKey: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

const EditableText: React.FC<EditableTextProps> = ({ 
  contentKey, 
  className, 
  as: Component = 'span',
  children 
}) => {
  const { isEditMode, content, updateContent } = useEditable();
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

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

  const handleSave = () => {
    updateContent(contentKey, editValue);
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
      <input
        ref={inputRef}
        type="text"
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        onBlur={handleSave}
        onKeyDown={handleKeyDown}
        className={cn(
          "bg-transparent border-b-2 border-primary outline-none",
          className
        )}
      />
    );
  }

  return (
    <Component
      className={cn(
        className,
        isEditMode && "cursor-pointer hover:bg-primary/10 hover:outline hover:outline-1 hover:outline-primary/30 rounded px-1 transition-all"
      )}
      onClick={handleClick}
    >
      {currentContent}
    </Component>
  );
};

export default EditableText;
