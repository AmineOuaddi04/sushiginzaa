
import { Card, CardContent } from '@/components/ui/card';

const MenuSection = () => {
  const menuCategories = [
    {
      title: 'Signature Sushi',
      description: 'Chef\'s special creations',
      items: [
        { name: 'Dragon Roll', price: '$18', description: 'Eel, cucumber, avocado topped with sliced avocado' },
        { name: 'Rainbow Roll', price: '$16', description: 'California roll topped with assorted sashimi' },
        { name: 'Sakura Special', price: '$22', description: 'Tuna, salmon, yellowtail with special sauce' }
      ]
    },
    {
      title: 'Fresh Sashimi',
      description: 'Premium grade fish',
      items: [
        { name: 'Tuna Sashimi', price: '$14', description: 'Fresh bluefin tuna, 6 pieces' },
        { name: 'Salmon Sashimi', price: '$12', description: 'Atlantic salmon, 6 pieces' },
        { name: 'Chef\'s Selection', price: '$28', description: 'Assorted premium sashimi, 12 pieces' }
      ]
    },
    {
      title: 'Traditional Dishes',
      description: 'Authentic Japanese flavors',
      items: [
        { name: 'Chirashi Bowl', price: '$24', description: 'Assorted sashimi over sushi rice' },
        { name: 'Teriyaki Salmon', price: '$19', description: 'Grilled salmon with house teriyaki sauce' },
        { name: 'Miso Ramen', price: '$16', description: 'Rich miso broth with chashu pork' }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Menu</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of traditional and contemporary Japanese dishes
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {menuCategories.map((category, index) => (
            <Card key={category.title} className="bg-card/50 border-border hover:border-primary/20 transition-colors duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="font-playfair text-2xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </div>
                
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div key={item.name} className="border-b border-border/30 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-foreground">{item.name}</h4>
                        <span className="text-primary font-semibold">{item.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
