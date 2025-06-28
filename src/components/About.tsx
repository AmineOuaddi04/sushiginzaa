import { Award, Clock, Users, Utensils } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
const About = () => {
  const features = [{
    icon: Award,
    title: 'Galardonado',
    description: 'Reconocido por la excelencia en cocina japonesa y servicio'
  }, {
    icon: Utensils,
    title: 'Chefs Maestros',
    description: 'Entrenados en técnicas culinarias tradicionales japonesas'
  }, {
    icon: Clock,
    title: 'Fresco Diario',
    description: 'Pescado traído diariamente del mercado Tsukiji de Tokio'
  }, {
    icon: Users,
    title: 'Empresa Familiar',
    description: 'Tres generaciones de auténtica cocina japonesa'
  }];
  return <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Nuestra <span className="text-gradient">Historia</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Fundado en 2008 por el Chef Maestro Hiroshi Tanaka, Sakura representa tres generaciones 
              de tradición culinaria japonesa. Nuestro compromiso con la autenticidad y calidad nos ha convertido 
              en una piedra angular de la escena gastronómica local.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Obtenemos los mejores ingredientes, desde pescado premium grado sushi hasta condimentos 
              auténticos japoneses, asegurando que cada plato refleje la verdadera esencia de la cocina japonesa 
              mientras abraza técnicas de presentación modernas.
            </p>
            
            {/* Quote */}
            <div className="gradient-border">
              <div className="gradient-border-content">
                <blockquote className="text-foreground italic">"La verdadera cocina japonesa no se trata solo de comida—se trata de respeto, precisión, y el arte de unir a las personas."</blockquote>
                <cite className="text-sm text-muted-foreground mt-2 block">— Chef Hiroshi Tanaka</cite>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => <Card key={feature.title} className="bg-card/50 border-border hover:border-primary/20 transition-colors duration-300 animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;