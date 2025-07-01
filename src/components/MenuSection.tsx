
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import EditableText from '@/components/EditableText';

const MenuSection = () => {
  const menuCategories = [
    {
      title: 'Entrantes',
      description: 'Para abrir el apetito',
      items: [
        { name: 'Ensalada Especial', price: '€4.50', description: 'Ensalada de salmón, aguacate, frutos secos, salsa de sésamo' },
        { name: 'Wakame', price: '€3.60', description: 'Algas wakame y sésamo' },
        { name: 'Ensalada Pepino', price: '€3.60', description: 'Pepino, salsa de sésamo' },
        { name: 'Kimchi', price: '€3.00', description: 'Ajo, col china con ajo, picante' }
      ]
    },
    {
      title: 'Platos Especiales',
      description: 'Combinaciones creativas del chef',
      items: [
        { name: 'Salmón Mango 2U', price: '€5.95', description: 'Salmón, mango, salsa mango' },
        { name: 'Sashimi Mixto', price: '€12.95', description: 'Sashimi Mixto, cigala, gamba roja, salsa maracuyá' },
        { name: 'Smoke Salmón 4U', price: '€6.95', description: 'Salmón flameado y ahumado, trufa tobiko, salsa ponzu' },
        { name: 'Sushi Moriwase', price: '€14.95', description: 'Sashimi salmón x4, nigiri x5, ura x4, gonkan x2' }
      ]
    },
    {
      title: 'Arroz y Tallarines',
      description: 'Sabores auténticos japoneses',
      items: [
        { name: 'Pollo Frito Don', price: '€12.95', description: 'Pollo frito, kimchi, arroz, sésamo' },
        { name: 'Arroz frito con gambas', price: '€5.95', description: 'Arroz frito, huevo, guisantes, cebolla, zanahoria' },
        { name: 'Yakisoba con Gamba', price: '€5.95', description: 'Huevo, gamba, verdura' },
        { name: 'Pad Thai con Ternera', price: '€5.95', description: 'Tallarines de arroz con ternera, verduras, huevo' }
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
