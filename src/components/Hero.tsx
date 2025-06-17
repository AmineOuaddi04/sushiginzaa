
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-accent/20 rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 border border-primary/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-secondary/50 border border-border rounded-full px-4 py-2 mb-8 animate-fade-in">
          <Star className="w-4 h-4 text-accent fill-accent" />
          <span className="text-sm font-medium text-muted-foreground">Michelin Recommended</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="text-gradient">Authentic</span>
          <br />
          Japanese Cuisine
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Experience the perfect harmony of traditional flavors and modern presentation at Sakura, 
          where every dish tells a story of Japanese culinary excellence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity group">
            Explore Menu
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="border-border hover:bg-secondary/50">
            Make Reservation
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div>
            <div className="text-2xl font-bold text-gradient">15+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gradient">500+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gradient">4.9★</div>
            <div className="text-sm text-muted-foreground">Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
