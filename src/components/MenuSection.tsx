import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import EditableText from '@/components/EditableText';

const MenuSection = () => {
  const menuCategories = [
    {
      title: 'Sushi y Sashimi',
      description: 'Pescado fresco de grado premium',
      items: [
        { name: 'Atún (Maguro)', price: '$3.50', description: 'Atún aleta azul, textura que se derrite en la boca' },
        { name: 'Salmón (Sake)', price: '$3.00', description: 'Salmón noruego, rico y mantecoso' },
        { name: 'Pez Limón (Hamachi)', price: '$4.00', description: 'Pez limón japonés, sabor delicado' },
        { name: 'Erizo de Mar (Uni)', price: '$6.50', description: 'Uni de Hokkaido, esencia cremosa del océano' }
      ]
    },
    {
      title: 'Rollos Especiales',
      description: 'Combinaciones creativas del chef',
      items: [
        { name: 'Rollo Dragón Ginza', price: '$18', description: 'Anguila, pepino, cubierto con aguacate y salsa de anguila' },
        { name: 'Atún Picante Crujiente', price: '$16', description: 'Atún picante, hojuelas de tempura, mayonesa picante' },
        { name: 'Paraíso Arcoíris', price: '$20', description: 'Base California cubierta con 5 tipos de sashimi' },
        { name: 'Montaña de Fuego', price: '$22', description: 'Salmón, jalapeño, cubierto con mayonesa picante flameada' }
      ]
    },
    {
      title: 'Platos Tradicionales',
      description: 'Sabores auténticos japoneses',
      items: [
        { name: 'Bowl Chirashi', price: '$28', description: 'Selección del chef de sashimi sobre arroz de sushi' },
        { name: 'Bacalao Negro al Miso', price: '$32', description: 'Bacalao de Alaska marinado por 48 horas' },
        { name: 'Tataki de Wagyu', price: '$45', description: 'Wagyu A5 sellado con ponzu y wasabi' },
        { name: 'Tempura Omakase', price: '$25', description: 'Verduras de temporada y tempura de camarones' }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            <EditableText contentKey="menu.title" className="inline" />
            {' '}
            <EditableText contentKey="menu.title.accent" className="text-gradient inline" />
          </h2>
          <EditableText 
            contentKey="menu.subtitle"
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            as="p"
          />
        </div>

        {/* Menu Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {menuCategories.map((category, index) => (
            <Card key={category.title} className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/20 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8">
                <div className="mb-8 text-center">
                  <EditableText 
                    contentKey={`menu.category.${index}.title`} 
                    className="font-playfair text-2xl font-semibold mb-2 text-gradient"
                    as="h3"
                  >
                    {category.title}
                  </EditableText>
                  <EditableText 
                    contentKey={`menu.category.${index}.description`}
                    className="text-muted-foreground text-sm"
                    as="p"
                  >
                    {category.description}
                  </EditableText>
                  <div className="w-12 h-px bg-gradient-to-r from-primary to-accent mx-auto mt-4"></div>
                </div>
                
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={item.name} className="group">
                      <div className="flex justify-between items-start mb-2">
                        <EditableText 
                          contentKey={`menu.category.${index}.item.${itemIndex}.name`}
                          className="font-medium text-foreground group-hover:text-primary transition-colors"
                          as="h4"
                        >
                          {item.name}
                        </EditableText>
                        <EditableText 
                          contentKey={`menu.category.${index}.item.${itemIndex}.price`}
                          className="text-primary font-semibold text-lg"
                          as="span"
                        >
                          {item.price}
                        </EditableText>
                      </div>
                      <EditableText 
                        contentKey={`menu.category.${index}.item.${itemIndex}.description`}
                        className="text-sm text-muted-foreground leading-relaxed"
                        as="p"
                      >
                        {item.description}
                      </EditableText>
                      <div className="w-full h-px bg-border/30 mt-4"></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="text-center mt-16 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Button 
            onClick={() => window.open('https://drive.google.com/file/d/1LOjRr_1jNvt1DckffBy1rbutaSqAei-9/view?usp=sharing', '_blank')}
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity px-8 py-3 rounded-lg text-primary-foreground font-medium text-lg w-full sm:w-auto"
          >
            Ver Menú Completo
          </Button>
          <Button 
            onClick={() => window.open('https://www.google.com/maps/place/Sushi+Ginza/@42.4650282,-2.4445982,17z/data=!4m8!3m7!1s0xd4fc31d4e8b51b5:0x123456789abcdef!8m2!3d42.4650282!4d-2.4424095!9m1!1b1!16s%2Fg%2F11c5b7x8y9?entry=ttu', '_blank')}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors px-8 py-3 rounded-lg font-medium text-lg w-full sm:w-auto"
          >
            Ver Reseñas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
