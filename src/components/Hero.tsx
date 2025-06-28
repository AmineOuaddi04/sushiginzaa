
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EditableText from '@/components/EditableText';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 left-16 w-20 h-20 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-16 h-16 border border-accent/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Restaurant Badge */}
        <div className="inline-flex items-center space-x-2 bg-background/20 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-8 animate-fade-in">
          <span className="text-2xl">🍣</span>
          <EditableText 
            contentKey="hero.badge"
            className="text-sm font-medium text-foreground"
            as="span"
          />
        </div>

        {/* Main Heading */}
        <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
          <EditableText 
            contentKey="hero.title.line1"
            className="text-foreground block"
            as="span"
          />
          <br />
          <EditableText 
            contentKey="hero.title.line2"
            className="text-gradient"
            as="span"
          />
        </h1>

        {/* Subtitle */}
        <EditableText 
          contentKey="hero.subtitle"
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in block"
          as="p"
          style={{ animationDelay: '0.2s' }}
        />

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
            <EditableText contentKey="hero.cta1" />
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 text-foreground">
            <EditableText contentKey="hero.cta2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
