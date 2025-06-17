
import { Award, Clock, Users, Utensils } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in Japanese cuisine and service'
    },
    {
      icon: Utensils,
      title: 'Master Chefs',
      description: 'Trained in traditional Japanese culinary techniques'
    },
    {
      icon: Clock,
      title: 'Fresh Daily',
      description: 'Fish flown in daily from Tokyo\'s Tsukiji market'
    },
    {
      icon: Users,
      title: 'Family Owned',
      description: 'Three generations of authentic Japanese cooking'
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Story</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in 2008 by Master Chef Hiroshi Tanaka, Sakura represents three generations 
              of Japanese culinary tradition. Our commitment to authenticity and quality has made 
              us a cornerstone of the local dining scene.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We source the finest ingredients, from premium sushi-grade fish to authentic Japanese 
              seasonings, ensuring every dish reflects the true essence of Japanese cuisine while 
              embracing modern presentation techniques.
            </p>
            
            {/* Quote */}
            <div className="gradient-border">
              <div className="gradient-border-content">
                <blockquote className="text-foreground italic">
                  "True Japanese cuisine is not just about food—it's about respect, precision, 
                  and the art of bringing people together."
                </blockquote>
                <cite className="text-sm text-muted-foreground mt-2 block">— Chef Hiroshi Tanaka</cite>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={feature.title} className="bg-card/50 border-border hover:border-primary/20 transition-colors duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
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
