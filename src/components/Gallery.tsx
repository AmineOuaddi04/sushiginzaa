
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const dishes = [
    {
      id: 1,
      name: 'Premium Sashimi Selection',
      image: '/placeholder.svg',
      description: 'Fresh cuts of tuna, salmon, and seasonal fish'
    },
    {
      id: 2,
      name: 'Dragon Roll',
      image: '/placeholder.svg',
      description: 'Eel and cucumber topped with avocado'
    },
    {
      id: 3,
      name: 'Chirashi Bowl',
      image: '/placeholder.svg',
      description: 'Assorted sashimi over seasoned sushi rice'
    },
    {
      id: 4,
      name: 'Omakase Platter',
      image: '/placeholder.svg',
      description: 'Chef\'s selection of seasonal specialties'
    },
    {
      id: 5,
      name: 'Wagyu Beef Tataki',
      image: '/placeholder.svg',
      description: 'Seared wagyu with ponzu and micro greens'
    },
    {
      id: 6,
      name: 'Miso Black Cod',
      image: '/placeholder.svg',
      description: 'Marinated cod with sweet miso glaze'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Signature Dishes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each dish is a masterpiece, crafted with precision and passion
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish, index) => (
            <Card 
              key={dish.id} 
              className="group bg-card/50 border-border hover:border-primary/30 transition-all duration-300 cursor-pointer animate-fade-in overflow-hidden" 
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(dish.image)}
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
                    <h3 className="font-playfair text-xl font-semibold text-white mb-2">{dish.name}</h3>
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
            View Full Gallery
          </button>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full">
            <img src={selectedImage} alt="Enlarged dish" className="max-w-full max-h-full object-contain" />
            <button 
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
