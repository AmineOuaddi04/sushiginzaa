
import { Card, CardContent } from '@/components/ui/card';

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
            Nuestro <span className="text-gradient">Menú</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Platos cuidadosamente seleccionados que muestran los mejores ingredientes y técnicas tradicionales
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {menuCategories.map((category, index) => (
            <Card key={category.title} className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/20 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8">
                <div className="mb-8 text-center">
                  <h3 className="font-playfair text-2xl font-semibold mb-2 text-gradient">{category.title}</h3>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                  <div className="w-12 h-px bg-gradient-to-r from-primary to-accent mx-auto mt-4"></div>
                </div>
                
                <div className="space-y-6">
                  {category.items.map((item) => (
                    <div key={item.name} className="group">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">{item.name}</h4>
                        <span className="text-primary font-semibold text-lg">{item.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      <div className="w-full h-px bg-border/30 mt-4"></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-primary to-accent p-px rounded-lg">
            <div className="bg-background px-8 py-4 rounded-lg">
              <p className="text-muted-foreground mb-4">¿Listo para experimentar la auténtica cocina japonesa?</p>
              <button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity px-6 py-3 rounded-lg text-primary-foreground font-medium">
                Hacer una Reservación
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
