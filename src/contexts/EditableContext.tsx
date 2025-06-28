
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface EditableContextType {
  isEditMode: boolean;
  setIsEditMode: (mode: boolean) => void;
  content: Record<string, string>;
  updateContent: (key: string, value: string) => void;
}

const EditableContext = createContext<EditableContextType | undefined>(undefined);

export const useEditable = () => {
  const context = useContext(EditableContext);
  if (!context) {
    throw new Error('useEditable must be used within an EditableProvider');
  }
  return context;
};

interface EditableProviderProps {
  children: ReactNode;
}

export const EditableProvider: React.FC<EditableProviderProps> = ({ children }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [content, setContent] = useState<Record<string, string>>({
    // Header content
    'header.title': 'Sushi Ginza',
    'header.subtitle': 'Auténtica Cocina Japonesa',
    'header.nav.inicio': 'Inicio',
    'header.nav.galeria': 'Galería',
    'header.nav.menu': 'Menú',
    'header.nav.nosotros': 'Nosotros',
    'header.nav.contacto': 'Contacto',
    'header.cta': 'Reservar Mesa',
    
    // Hero content
    'hero.badge': 'Auténtica Cocina Japonesa',
    'hero.title.line1': 'Sushi',
    'hero.title.line2': 'Ginza',
    'hero.subtitle': 'Donde la tradición se encuentra con la innovación. Experimenta el mejor sushi elaborado por nuestros chefs maestros utilizando los ingredientes más frescos de Japón.',
    'hero.cta1': 'Ver Nuestro Menú',
    'hero.cta2': 'Reservar Mesa',
    
    // Gallery content
    'gallery.title': 'Nuestros',
    'gallery.title.accent': 'Platos Especiales',
    'gallery.subtitle': 'Cada plato es una obra maestra, elaborada con precisión y pasión',
    'gallery.cta': 'Ver Galería Completa',
    
    // Menu content
    'menu.title': 'Nuestro',
    'menu.title.accent': 'Menú',
    'menu.subtitle': 'Platos cuidadosamente seleccionados que muestran los mejores ingredientes y técnicas tradicionales',
    
    // About content
    'about.title': 'Nuestra',
    'about.title.accent': 'Historia',
    'about.text1': 'Fundado en 2008 por el Chef Maestro Hiroshi Tanaka, Sakura representa tres generaciones de tradición culinaria japonesa. Nuestro compromiso con la autenticidad y calidad nos ha convertido en una piedra angular de la escena gastronómica local.',
    'about.text2': 'Obtenemos los mejores ingredientes, desde pescado premium grado sushi hasta condimentos auténticos japoneses, asegurando que cada plato refleje la verdadera esencia de la cocina japonesa mientras abraza técnicas de presentación modernas.',
    'about.quote': 'La verdadera cocina japonesa no se trata solo de comida—se trata de respeto, precisión, y el arte de unir a las personas.',
    'about.quote.author': '— Chef Hiroshi Tanaka',
    
    // Contact content
    'contact.title': 'Visita',
    'contact.title.accent': 'Sakura',
    'contact.subtitle': 'Experimenta la auténtica cocina japonesa en el corazón de la ciudad',
    'contact.cta.title': '¿Listo para Experimentar Sakura?',
    'contact.cta.subtitle': 'Reserva tu mesa hoy y embárcate en un viaje culinario por Japón',
    'contact.cta.button1': 'Hacer Reservación',
    'contact.cta.button2': 'Ver Menú Completo',
  });

  const updateContent = (key: string, value: string) => {
    setContent(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <EditableContext.Provider value={{
      isEditMode,
      setIsEditMode,
      content,
      updateContent
    }}>
      {children}
    </EditableContext.Provider>
  );
};
