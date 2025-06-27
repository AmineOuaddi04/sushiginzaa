
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">桜</span>
              </div>
              <span className="font-playfair text-xl font-semibold text-foreground">Sakura</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Experimenta la auténtica cocina japonesa donde los sabores tradicionales se encuentran con la presentación moderna. 
              Tres generaciones de excelencia culinaria.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Inicio</a></li>
              <li><a href="#menu" className="text-muted-foreground hover:text-foreground transition-colors">Menú</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">Nosotros</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contacto</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Reservaciones</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">Calle Sakura 123<br />Distrito Centro<br />Ciudad, Estado 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">info@sakura-restaurant.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Restaurante Sakura. Todos los derechos reservados. | Elaborado con pasión por la auténtica cocina japonesa.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
