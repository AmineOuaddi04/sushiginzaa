
import { Card, CardContent } from '@/components/ui/card';

const MenuSection = () => {
  const menuCategories = [
    {
      title: 'Sushi & Sashimi',
      description: 'Fresh, premium grade fish',
      items: [
        { name: 'Tuna (Maguro)', price: '$3.50', description: 'Bluefin tuna, melt-in-your-mouth texture' },
        { name: 'Salmon (Sake)', price: '$3.00', description: 'Norwegian salmon, rich and buttery' },
        { name: 'Yellowtail (Hamachi)', price: '$4.00', description: 'Japanese yellowtail, delicate flavor' },
        { name: 'Sea Urchin (Uni)', price: '$6.50', description: 'Hokkaido uni, creamy ocean essence' }
      ]
    },
    {
      title: 'Specialty Rolls',
      description: 'Chef\'s creative combinations',
      items: [
        { name: 'Ginza Dragon Roll', price: '$18', description: 'Eel, cucumber, topped with avocado and eel sauce' },
        { name: 'Spicy Tuna Crispy', price: '$16', description: 'Spicy tuna, tempura flakes, spicy mayo' },
        { name: 'Rainbow Paradise', price: '$20', description: 'California base topped with 5 types of sashimi' },
        { name: 'Fire Mountain', price: '$22', description: 'Salmon, jalapeño, topped with torched spicy mayo' }
      ]
    },
    {
      title: 'Traditional Dishes',
      description: 'Authentic Japanese flavors',
      items: [
        { name: 'Chirashi Bowl', price: '$28', description: 'Chef\'s selection of sashimi over sushi rice' },
        { name: 'Miso Black Cod', price: '$32', description: '48-hour marinated Alaskan black cod' },
        { name: 'Wagyu Beef Tataki', price: '$45', description: 'Seared A5 wagyu with ponzu and wasabi' },
        { name: 'Tempura Omakase', price: '$25', description: 'Seasonal vegetables and shrimp tempura' }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Menu</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Carefully curated dishes showcasing the finest ingredients and traditional techniques
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
              <p className="text-muted-foreground mb-4">Ready to experience authentic Japanese cuisine?</p>
              <button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity px-6 py-3 rounded-lg text-primary-foreground font-medium">
                Make a Reservation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
