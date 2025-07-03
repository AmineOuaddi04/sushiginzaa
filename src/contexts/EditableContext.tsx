import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

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
    
    // Gallery dish details - updated names for dishes 8, 9, 11 with no descriptions
    'gallery.dish.0.name': 'Takoyaki 3U',
    'gallery.dish.0.description': 'Croqueta japonesa de pulpo, mayonesa, salsa okonomiyaki, copos de bonito',
    'gallery.dish.1.name': 'Pad Thai con Ternera',
    'gallery.dish.1.description': 'Tallarines de Arroz con ternera, huevo y verdura',
    'gallery.dish.2.name': 'Rollito de Primavera Mini 2U',
    'gallery.dish.2.description': 'Con brotes de soja, zanahoria, tofu seco, seta y col',
    'gallery.dish.3.name': 'Arroz Negro con Pollo',
    'gallery.dish.3.description': 'Huevos, zanahoria, guisantes, maíz, pollo',
    'gallery.dish.4.name': 'Sopa Miso',
    'gallery.dish.4.description': 'Tofu y algas',
    'gallery.dish.5.name': 'Yakisoba con Picante',
    'gallery.dish.5.description': 'Huevo, Verdura',
    'gallery.dish.6.name': 'Sushi Moriwase',
    'gallery.dish.6.description': 'Sashimi Salmón x4, nigiri x5, ura x4, gonkan x2',
    'gallery.dish.7.name': 'Uramaki Mango',
    'gallery.dish.7.description': '',
    'gallery.dish.8.name': 'Milhojas',
    'gallery.dish.8.description': '',
    'gallery.dish.9.name': 'Salmón Roja',
    'gallery.dish.10.name': 'Salmon Mango 2U',
    'gallery.dish.10.description': 'Salmón, rúcula, salsa mango, mango',
    'gallery.dish.11.name': 'Uramaki Mango',
    'gallery.dish.11.description': '',
    
    // Menu content - Updated with new dishes from the image
    'menu.title': 'Nuestro',
    'menu.title.accent': 'Menú',
    'menu.subtitle': 'Platos cuidadosamente seleccionados que muestran los mejores ingredientes y técnicas tradicionales',
    'menu.cta.text': '¿Listo para experimentar la auténtica cocina japonesa?',
    'menu.cta.button': 'Hacer una Reservación',
    
    // Entrantes
    'menu.category.0.title': 'Entrantes',
    'menu.category.0.description': 'Para abrir el apetito',
    'menu.category.0.item.0.name': 'Ensalada Especial',
    'menu.category.0.item.0.price': '€4.50',
    'menu.category.0.item.0.description': 'Ensalada de salmón, aguacate, frutos secos, salsa de sésamo',
    'menu.category.0.item.1.name': 'Wakame',
    'menu.category.0.item.1.price': '€3.60',
    'menu.category.0.item.1.description': 'Algas wakame y sésamo',
    'menu.category.0.item.2.name': 'Ensalada Pepino',
    'menu.category.0.item.2.price': '€3.60',
    'menu.category.0.item.2.description': 'Pepino, salsa de sésamo',
    'menu.category.0.item.3.name': 'Kimchi',
    'menu.category.0.item.3.price': '€3.00',
    'menu.category.0.item.3.description': 'Ajo, col china con ajo, picante',
    
    // Platos Especiales
    'menu.category.1.title': 'Platos Especiales',
    'menu.category.1.description': 'Combinaciones creativas del chef',
    'menu.category.1.item.0.name': 'Salmón Mango 2U',
    'menu.category.1.item.0.price': '€5.95',
    'menu.category.1.item.0.description': 'Salmón, mango, salsa mango',
    'menu.category.1.item.1.name': 'Sashimi Mixto',
    'menu.category.1.item.1.price': '€12.95',
    'menu.category.1.item.1.description': 'Sashimi Mixto, cigala, gamba roja, salsa maracuyá',
    'menu.category.1.item.2.name': 'Smoke Salmón 4U',
    'menu.category.1.item.2.price': '€6.95',
    'menu.category.1.item.2.description': 'Salmón flameado y ahumado, trufa tobiko, salsa ponzu',
    'menu.category.1.item.3.name': 'Sushi Moriwase',
    'menu.category.1.item.3.price': '€14.95',
    'menu.category.1.item.3.description': 'Sashimi salmón x4, nigiri x5, ura x4, gonkan x2',
    
    // Arroz y Tallarines
    'menu.category.2.title': 'Arroz y Tallarines',
    'menu.category.2.description': 'Sabores auténticos japoneses',
    'menu.category.2.item.0.name': 'Pollo Frito Don',
    'menu.category.2.item.0.price': '€12.95',
    'menu.category.2.item.0.description': 'Pollo Frito, teriyaki, kimchi, sésamo, arroz',
    'menu.category.2.item.1.name': 'Arroz frito con gambas',
    'menu.category.2.item.1.price': '€5.95',
    'menu.category.2.item.1.description': 'Arroz frito, huevo, guisantes, cebolla, zanahoria',
    'menu.category.2.item.2.name': 'Yakisoba con Gamba',
    'menu.category.2.item.2.price': '€5.95',
    'menu.category.2.item.2.description': 'Huevo, gamba, verdura',
    'menu.category.2.item.3.name': 'Pad Thai con Ternera',
    'menu.category.2.item.3.price': '€5.95',
    'menu.category.2.item.3.description': 'Tallarines de arroz con ternera, verduras, huevo',
    
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
    'contact.info.3.detail.0': 'Sushiginzalogrono@gmail.com',
    'contact.info.3.detail.1': 'Sushiginzalogrono@gmail.com',
    
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
    'footer.contact.email': 'Sushiginzalogrono@gmail.com',
    'footer.copyright': '© 2024 Sushi Ginza. Todos los derechos reservados. | Elaborado con pasión por la auténtica cocina japonesa.',
  });

  // Load saved content from localStorage on component mount
  useEffect(() => {
    const savedContent = localStorage.getItem('editableContent');
    if (savedContent) {
      try {
        const parsedContent = JSON.parse(savedContent);
        setContent(prev => ({ ...prev, ...parsedContent }));
      } catch (error) {
        console.error('Error loading saved content:', error);
      }
    }
  }, []);

  const updateContent = (key: string, value: string) => {
    setContent(prev => {
      const newContent = {
        ...prev,
        [key]: value
      };
      
      // Save to localStorage
      try {
        localStorage.setItem('editableContent', JSON.stringify(newContent));
      } catch (error) {
        console.error('Error saving content:', error);
      }
      
      return newContent;
    });
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
