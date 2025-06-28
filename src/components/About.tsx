
import { Award, Clock, Users, Utensils } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import EditableText from '@/components/EditableText';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Galardonado',
      description: 'Reconocido por la excelencia en cocina japonesa y servicio'
    },
    {
      icon: Utensils,
      title: 'Chefs Maestros',
      description: 'Entrenados en técnicas culinarias tradicionales japonesas'
    },
    {
      icon: Clock,
      title: 'Fresco Diario',
      description: 'Pescado traído diariamente del mercado Tsukiji de Tokio'
    },
    {
      icon: Users,
      title: 'Empresa Familiar',
      description: 'Tres generaciones de auténtica cocina japonesa'
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              <EditableText contentKey="about.title" className="inline" />
              {' '}
              <EditableText contentKey="about.title.accent" className="text-gradient inline" />
            </h2>
            <EditableText 
              contentKey="about.text1"
              className="text-lg text-muted-foreground mb-6 leading-relaxed"
              as="p"
            />
            <EditableText 
              contentKey="about.text2"
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
              as="p"
            />
            
            {/* Quote */}
            <div className="gradient-border">
              <div className="gradient-border-content">
                <blockquote className="text-foreground italic">
                  <EditableText 
                    contentKey="about.quote"
                    className="text-foreground italic"
                    as="span"
                  />
                </blockquote>
                <cite className="text-sm text-muted-foreground mt-2 block">
                  <EditableText 
                    contentKey="about.quote.author"
                    className="text-sm text-muted-foreground"
                    as="span"
                  />
                </cite>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="bg-card/50 border-border hover:border-primary/20 transition-colors duration-300 animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <EditableText 
                    contentKey={`about.feature.${index}.title`}
                    className="font-semibold mb-2"
                    as="h3"
                  >
                    {feature.title}
                  </EditableText>
                  <EditableText 
                    contentKey={`about.feature.${index}.description`}
                    className="text-sm text-muted-foreground"
                    as="p"
                  >
                    {feature.description}
                  </EditableText>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
