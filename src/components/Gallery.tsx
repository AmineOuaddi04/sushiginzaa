
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Gallery = () => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const dishes = [
    {
      id: 1,
      name: 'Selección Premium de Sashimi',
      image: '/lovable-uploads/2f8b2836-1194-49e9-859c-3d0509070e51.png',
      description: 'Cortes frescos de atún, salmón y pescado de temporada'
    },
    {
      id: 2,
      name: 'Rollo Dragón',
      image: '/lovable-uploads/3fded1ab-84b3-4889-8f28-b7d37ff8d6ac.png',
      description: 'Anguila y pepino cubiertos con aguacate'
    },
    {
      id: 3,
      name: 'Bowl Chirashi',
      image: '/lovable-uploads/2ba4865c-1f73-4dd5-ac12-8b00e7b3a218.png',
      description: 'Sashimi variado sobre arroz de sushi sazonado'
    },
    {
      id: 4,
      name: 'Plato Omakase',
      image: '/lovable-uploads/b97f374d-cd46-4a2b-8292-f65d4656d801.png',
      description: 'Selección del chef de especialidades de temporada'
    },
    {
      id: 5,
      name: 'Tataki de Wagyu',
      image: '/lovable-uploads/8d5c42d9-0c97-4ffd-bf00-10b14b4ba370.png',
      description: 'Wagyu sellado con ponzu y microgreens'
    },
    {
      id: 6,
      name: 'Bacalao Negro al Miso',
      image: '/lovable-uploads/167bc9ad-4de4-4eb0-8111-46fe24f1e085.png',
      description: 'Bacalao marinado con glaseado dulce de miso'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Nuestros <span className="text-gradient">Platos Especiales</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada plato es una obra maestra, elaborada con precisión y pasión
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish, index) => (
            <Card
              key={dish.id}
              className="group bg-card/50 border-border hover:border-primary/30 transition-all duration-300 cursor-pointer animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredImage(dish.image)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-playfair text-xl font-semibold text-white mb-2">
                      {dish.name}
                    </h3>
                    <p className="text-white/80 text-sm">{dish.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity rounded-lg text-primary-foreground font-medium">
            Ver Galería Completa
          </button>
        </div>
      </div>

      {/* Hover Preview Modal */}
      {hoveredImage && (
        <div className="fixed inset-0 pointer-events-none z-40 flex items-center justify-center p-4">
          <div className="relative max-w-lg max-h-96 animate-scale-in">
            <img
              src={hoveredImage}
              alt="Vista previa del plato"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-primary/20"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
