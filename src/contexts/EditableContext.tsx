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
    'hero.cta1': 'Ver Menú Completo',
    'hero.cta2': 'Reservar Mesa',
    
    // Gallery content
    'gallery.title': 'Nuestros',
    'gallery.title.accent': 'Platos Especiales',
    'gallery.subtitle': 'Cada plato es una obra maestra, elaborada con precisión y pasión',
    'gallery.cta': 'Ver Galería Completa',
    
    // Gallery dish details with ingredients
    'gallery.dish.0.name': 'Selección Premium de Sashimi',
    'gallery.dish.0.description': 'Atún rojo, salmón noruego, pez limón japonés, erizo de mar de Hokkaido, servido con wasabi fresco, jengibre encurtido y salsa de soja artesanal',
    'gallery.dish.1.name': 'Rollo Dragón',
    'gallery.dish.1.description': 'Anguila glaseada, pepino japonés, aguacate maduro, cubierto con salsa kabayaki, semillas de sésamo tostado y hojuelas de nori',
    'gallery.dish.2.name': 'Bowl Chirashi',
    'gallery.dish.2.description': 'Arroz de sushi sazonado con vinagre de arroz, selección diaria de sashimi fresco, tamagoyaki, pepino, rábano daikon y algas wakame',
    'gallery.dish.3.name': 'Plato Omakase',
    'gallery.dish.3.description': 'Selección del chef con nigiri de temporada, sashimi premium, rollo especial de la casa y acompañamientos tradicionales japoneses',
    'gallery.dish.4.name': 'Tataki de Wagyu',
    'gallery.dish.4.description': 'Wagyu A5 sellado ligeramente, marinado en salsa ponzu, cebollín japonés, microgreens, escamas de sal marina y aceite de sésamo',
    'gallery.dish.5.name': 'Bacalao Negro al Miso',
    'gallery.dish.5.description': 'Bacalao de Alaska marinado 48 horas en miso blanco, mirin, sake, servido con brotes de soja y cebollín',

    // Menu content
    'menu.title': 'Nuestro',
    'menu.title.accent': 'Menú',
    'menu.subtitle': 'Platos cuidadosamente seleccionados que muestran los mejores ingredientes y técnicas tradicionales',
    'menu.cta.text': '¿Listo para experimentar la auténtica cocina japonesa?',
    'menu.cta.button': 'Hacer una Reservación',
    
    // About content
    'about.title': 'Nuestra',
    'about.title.accent': 'Historia',
    'about.text1': 'Sushi Ginza nace en Logroño como el resultado de años de evolución, pasión y respeto por la tradición japonesa. Tras varios rebrands y etapas de transformación, el restaurante encuentra su forma definitiva en 2025.',
    'about.text2': 'Bajo la dirección de un equipo apasionado por el arte del sushi, trabajamos con ingredientes de la más alta calidad. Cada plato es una expresión de equilibrio, técnica y detalle, fusionando la autenticidad del Japón clásico con una visión contemporánea.',
    'about.quote': 'La verdadera cocina japonesa no se trata solo de comida—se trata de respeto, precisión, y el arte de unir a las personas.',
    'about.quote.author': '— Chef de Sushi Ginza',
    
    // About features
    'about.feature.0.title': 'Galardonado',
    'about.feature.0.description': 'Reconocido por la excelencia en cocina japonesa y servicio',
    'about.feature.1.title': 'Chefs Maestros',
    'about.feature.1.description': 'Entrenados en técnicas culinarias tradicionales japonesas',
    'about.feature.2.title': 'Fresco Diario',
    'about.feature.2.description': 'Pescado traído diariamente del mercado Tsukiji de Tokio',
    'about.feature.3.title': 'Empresa Familiar',
    'about.feature.3.description': 'Tres generaciones de auténtica cocina japonesa',
    
    // Contact content
    'contact.title': 'Visita',
    'contact.title.accent': 'Ginza',
    'contact.subtitle': 'Experimenta la auténtica cocina japonesa en el corazón de Logroño',
    'contact.cta.title': '¿Listo para Experimentar Sushi Ginza?',
    'contact.cta.subtitle': 'Reserva tu mesa hoy y embárcate en un viaje culinario por Japón',
    'contact.cta.button1': 'Hacer Reservación',
    'contact.cta.button2': 'Ver Menú Completo',
    
    // Contact info
    'contact.info.0.title': 'Ubicación',
    'contact.info.0.detail.0': 'Calle Chile, 6',
    'contact.info.0.detail.1': '26005 Logroño',
    'contact.info.0.detail.2': 'La Rioja',
    'contact.info.1.title': 'Teléfono',
    'contact.info.1.detail.0': '941233212',
    'contact.info.1.detail.1': 'Llama para reservaciones',
    'contact.info.2.title': 'Horarios',
    'contact.info.2.detail.0': 'Todos los días:',
    'contact.info.2.detail.1': '12:00 - 16:00',
    'contact.info.2.detail.2': '19:30 - 00:00',
    'contact.info.3.title': 'Email',
    'contact.info.3.detail.0': 'info@sushi-ginza.com',
    'contact.info.3.detail.1': 'eventos@sushi-ginza.com',
    
    // Footer content
    'footer.brand.name': 'Sushi Ginza',
    'footer.brand.description': 'Experimenta la auténtica cocina japonesa donde los sabores tradicionales se encuentran con la presentación moderna. Tres generaciones de excelencia culinaria.',
    'footer.links.title': 'Enlaces Rápidos',
    'footer.links.home': 'Inicio',
    'footer.links.menu': 'Menú',
    'footer.links.about': 'Nosotros',
    'footer.links.contact': 'Contacto',
    'footer.links.reservations': 'Reservaciones',
    'footer.contact.title': 'Contacto',
    'footer.contact.address.line1': 'Calle Chile, 6',
    'footer.contact.address.line2': '26005 Logroño',
    'footer.contact.address.line3': 'La Rioja',
    'footer.contact.phone': '941233212',
    'footer.contact.email': 'info@sushi-ginza.com',
    'footer.copyright': '© 2024 Sushi Ginza. Todos los derechos reservados. | Elaborado con pasión por la auténtica cocina japonesa.',
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
