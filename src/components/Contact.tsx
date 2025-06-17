
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['123 Sakura Street', 'Downtown District', 'City, State 12345']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['(555) 123-4567', 'Call for reservations']
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Thu: 5:00 PM - 10:00 PM', 'Fri-Sat: 5:00 PM - 11:00 PM', 'Sun: 4:00 PM - 9:00 PM']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@sakura-restaurant.com', 'events@sakura-restaurant.com']
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Visit <span className="text-gradient">Sakura</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience authentic Japanese cuisine in the heart of the city
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={info.title} className="bg-card/50 border-border hover:border-primary/20 transition-colors duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="gradient-border inline-block">
            <div className="gradient-border-content text-center">
              <h3 className="font-playfair text-2xl font-semibold mb-4">Ready to Experience Sakura?</h3>
              <p className="text-muted-foreground mb-6">
                Reserve your table today and embark on a culinary journey through Japan
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                  Make Reservation
                </Button>
                <Button size="lg" variant="outline" className="border-border hover:bg-secondary/50">
                  View Full Menu
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
