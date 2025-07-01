
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import EditableText from '@/components/EditableText';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Ubicación',
      details: ['Calle Chile, 6', '26005 Logroño', 'La Rioja'],
      action: () => {
        window.open('https://maps.google.com/maps?q=Sushi+Ginza+Calle+Chile+6+Logroño+La+Rioja+Spain', '_blank');
      }
    },
    {
      icon: Phone,
      title: 'Teléfono',
      details: ['941233212', 'Llama para consultas'],
      action: () => {
        window.location.href = 'tel:+34941233212';
      }
    },
    {
      icon: Clock,
      title: 'Horarios',
      details: ['Todos los días:', '12:00 - 16:00', '19:30 - 00:00'],
      action: null
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@sushi-ginza.com', 'eventos@sushi-ginza.com'],
      action: () => {
        window.location.href = 'mailto:info@sushi-ginza.com';
      }
    }
  ];

  const CallConfirmDialog = ({ phoneNumber }: { phoneNumber: string }) => (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
            <Phone className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Llamar a Sushi Ginza</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4 py-4">
          <p className="text-center text-muted-foreground">
            ¿Deseas llamar al número?
          </p>
          <p className="text-xl font-semibold text-primary">
            +34 {phoneNumber}
          </p>
          <Button 
            onClick={() => window.location.href = `tel:+34${phoneNumber}`}
            className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
          >
            Llamar Ahora
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            <EditableText contentKey="contact.title" className="inline" />
            {' '}
            <EditableText contentKey="contact.title.accent" className="text-gradient inline" />
          </h2>
          <EditableText 
            contentKey="contact.subtitle"
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            as="p"
          />
        </div>

        {/* Contact Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <Card key={info.title} className="bg-card/50 border-border hover:border-primary/20 transition-colors duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                {info.title === 'Teléfono' ? (
                  <CallConfirmDialog phoneNumber="941233212" />
                ) : (
                  <div 
                    className={`w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4 ${
                      info.action ? 'cursor-pointer hover:scale-105 transition-transform' : ''
                    }`}
                    onClick={info.action || undefined}
                  >
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                )}
                <EditableText 
                  contentKey={`contact.info.${index}.title`}
                  className="font-semibold mb-3"
                  as="h3"
                >
                  {info.title}
                </EditableText>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <EditableText 
                      key={i}
                      contentKey={`contact.info.${index}.detail.${i}`}
                      className="text-sm text-muted-foreground block"
                      as="p"
                    >
                      {detail}
                    </EditableText>
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

export default Contact;
