
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import EditableText from '@/components/EditableText';

const Gallery = () => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const dishes = [
    {
      id: 1,
      name: 'Salmón Rojo',
      image: '/lovable-uploads/ef52a8b9-e6b1-4b79-8406-a66c62b4a045.png',
      description: 'Salmón rojo fresco con presentación artística'
    },
    {
      id: 2,
      name: 'Salmón Mango 2U',
      image: '/lovable-uploads/bf3747ad-2b25-45c7-a080-364e1dafda26.png',
      description: 'Salmón, mango, rúcula, salsa mango'
    },
    {
      id: 3,
      name: 'Pad Thai con Ternera',
      image: '/lovable-uploads/18cd7e5d-68ec-4b6e-a5cf-6e5c247cf772.png',
      description: 'Tallarines de Arroz con ternera, huevo y verdura'
    },
    {
      id: 4,
      name: 'Rollito de Primavera Mini',
      image: '/lovable-uploads/7ff5e928-f160-4e47-855f-115573be669d.png',
      description: 'Con brotes de soja, zanahoria, tofu seco, seta y col'
    },
    {
      id: 5,
      name: 'Arroz Negro con Pollo',
      image: '/lovable-uploads/6c2d3ea0-56b4-441e-a307-1811c67f47de.png',
      description: 'Huevos, zanahoria, guisantes, maíz, pollo'
    },
    {
      id: 6,
      name: 'Ramen de Chasu',
      image: '/lovable-uploads/d99b4e71-5373-44d2-9cda-be5d72079a1e.png',
      description: 'Con chasu, huevo marinado, brotes de soja, morillas, cebolleta'
    },
    {
      id: 7,
      name: 'Yakisoba con Picante',
      image: '/lovable-uploads/2d3212f7-747d-42c8-9a60-7fcfb70fda59.png',
      description: 'Huevo, verduras'
    },
    {
      id: 8,
      name: 'Pollo Frito Don',
      image: '/lovable-uploads/2e4ccbfa-d857-41b7-9050-4ba731e55e81.png',
      description: 'Pollo Frito, teriyaki, kimchi, sésamo, arroz'
    },
    {
      id: 9,
      name: 'Rollo Dragón',
      image: '/lovable-uploads/4882d411-3284-4956-88e5-da3da97cd569.png',
      description: 'Anguila glaseada, pepino japonés, aguacate maduro, cubierto con salsa kabayaki, semillas de sésamo tostado y hojuelas de nori'
    },
    {
      id: 10,
      name: 'Bowl Chirashi',
      image: '/lovable-uploads/26d06a1b-1a4d-4ed1-8aaa-32c86554e978.png',
      description: 'Arroz de sushi sazonado con vinagre de arroz, selección diaria de sashimi fresco, tamagoyaki, pepino, rábano daikon y algas wakame'
    },
    {
      id: 11,
      name: 'Plato Omakase',
      image: '/lovable-uploads/86a5fa91-8b69-41df-8538-74b58bbaa0fb.png',
      description: 'Selección del chef con nigiri de temporada, sashimi premium, rollo especial de la casa y acompañamientos tradicionales japoneses'
    },
    {
      id: 12,
      name: 'Tataki de Wagyu',
      image: '/lovable-uploads/25437ee9-0f42-4541-8c56-846c9f432617.png',
      description: 'Wagyu A5 sellado ligeramente, marinado en salsa ponzu, cebollín japonés, microgreens, escamas de sal marina y aceite de sésamo'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            <EditableText contentKey="gallery.title" className="inline" />
            {' '}
            <EditableText contentKey="gallery.title.accent" className="text-gradient inline" />
          </h2>
          <EditableText 
            contentKey="gallery.subtitle"
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            as="p"
          />
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
                    <EditableText
                      contentKey={`gallery.dish.${index}.name`}
                      className="font-playfair text-xl font-semibold text-white mb-2"
                      as="h3"
                    >
                      {dish.name}
                    </EditableText>
                    <EditableText
                      contentKey={`gallery.dish.${index}.description`}
                      className="text-white/80 text-sm"
                      as="p"
                    >
                      {dish.description}
                    </EditableText>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity rounded-lg text-primary-foreground font-medium">
            <EditableText contentKey="gallery.cta" />
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
