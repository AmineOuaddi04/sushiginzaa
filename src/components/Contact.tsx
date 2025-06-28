
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import EditableText from '@/components/EditableText';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Ubicación',
      details: ['Calle Chile, 6', '26005 Logroño', 'La Rioja']
    },
    {
      icon: Phone,
      title: 'Teléfono',
      details: ['941233212', 'Llama para consultas']
    },
    {
      icon: Clock,
      title: 'Horarios',
      details: ['Lun-Jue: 5:00 PM - 10:00 PM', 'Vie-Sáb: 5:00 PM - 11:00 PM', 'Dom: 4:00 PM - 9:00 PM']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@sushi-ginza.com', 'eventos@sushi-ginza.com']
    }
  ];

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
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-primary-foreground" />
                </div>
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
