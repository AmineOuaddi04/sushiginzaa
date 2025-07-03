
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import EditableText from '@/components/EditableText';

const Gallery = () => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const dishes = [
    {
      id: 1,
      name: 'Selección Premium de Sashimi',
      image: '/lovable-uploads/e1cdef30-bf46-4d1d-ac86-92e81807a7d5.png',
      description: 'Cortes frescos de atún, salmón y pescado de temporada'
    },
    {
      id: 2,
      name: 'Rollo Dragón',
      image: '/lovable-uploads/4882d411-3284-4956-88e5-da3da97cd569.png',
      description: 'Anguila y pepino cubiertos con aguacate'
    },
    {
      id: 3,
      name: 'Bowl Chirashi',
      image: '/lovable-uploads/18cd7e5d-68ec-4b6e-a5cf-6e5c247cf772.png',
      description: 'Sashimi variado sobre arroz de sushi sazonado'
    },
    {
      id: 4,
      name: 'Plato Omakase',
      image: '/lovable-uploads/7ff5e928-f160-4e47-855f-115573be669d.png',
      description: 'Selección del chef de especialidades de temporada'
    },
    {
      id: 5,
      name: 'Tataki de Wagyu',
      image: '/lovable-uploads/6c2d3ea0-56b4-441e-a307-1811c67f47de.png',
      description: 'Wagyu sellado con ponzu y microgreens'
    },
    {
      id: 6,
      name: 'Bacalao Negro al Miso',
      image: '/lovable-uploads/ecb5149b-d6ab-46a7-8dc0-296a02663243.png',
      description: 'Bacalao marinado con glaseado dulce de miso'
    },
    {
      id: 10,
      name: 'Sashimi Premium Artístico',
      image: '/lovable-uploads/2e4ccbfa-d857-41b7-9050-4ba731e55e81.png',
      description: 'Presentación artística de sashimi premium con decoración tradicional'
    },
    {
      id: 11,
      name: 'Bowl Kaisen Don',
      image: '/lovable-uploads/ef76f428-1bbd-420f-8a7f-44fb4d53cb87.png',
      description: 'Bowl de mariscos frescos sobre arroz con salsa especial'
    },
    {
      id: 12,
      name: 'Fideos Con Ternera',
      image: '/lovable-uploads/a27c6bff-abe3-40a5-bb08-e4831ee654ff.png',
      description: 'Fideos salteados con ternera y verduras'
    },
    {
      id: 13,
      name: 'Tataki de Atún Premium',
      image: '/lovable-uploads/25437ee9-0f42-4541-8c56-846c9f432617.png',
      description: 'Atún rojo sellado con microgreens y salsa ponzu'
    },
    {
      id: 14,
      name: 'Salmón Glaseado Especial',
      image: '/lovable-uploads/e5f96cb9-3691-4906-870e-8fe92724aef4.png',
      description: 'Salmón con glaseado especial y presentación artística'
    },
    {
      id: 15,
      name: 'Ramen Shoyu Clásico',
      image: '/lovable-uploads/51e79f99-bafd-489f-b294-bcd970c4e368.png',
      description: 'Ramen tradicional con caldo de shoyu, chashu y huevo ajitsuke'
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
