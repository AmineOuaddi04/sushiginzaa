
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';
import EditableText from '@/components/EditableText';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">鮨</span>
              </div>
              <EditableText 
                contentKey="footer.brand.name"
                className="font-playfair text-xl font-semibold text-foreground"
                as="span"
              />
            </div>
            <EditableText 
              contentKey="footer.brand.description"
              className="text-muted-foreground mb-6 max-w-md"
              as="p"
            />
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/sushiginzalogrono/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <EditableText 
              contentKey="footer.links.title"
              className="font-semibold mb-4"
              as="h3"
            />
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-foreground transition-colors"><EditableText contentKey="footer.links.home" /></a></li>
              <li><a href="https://drive.google.com/file/d/1LOjRr_1jNvt1DckffBy1rbutaSqAei-9/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><EditableText contentKey="footer.links.menu" /></a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors"><EditableText contentKey="footer.links.about" /></a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors"><EditableText contentKey="footer.links.contact" /></a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <EditableText 
              contentKey="footer.contact.title"
              className="font-semibold mb-4"
              as="h3"
            />
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  <EditableText contentKey="footer.contact.address.line1" className="block" />
                  <EditableText contentKey="footer.contact.address.line2" className="block" />
                  <EditableText contentKey="footer.contact.address.line3" className="block" />
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <EditableText 
                  contentKey="footer.contact.phone"
                  className="text-muted-foreground text-sm"
                  as="span"
                />
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <EditableText 
                  contentKey="footer.contact.email"
                  className="text-muted-foreground text-sm"
                  as="span"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8 text-center">
          <EditableText 
            contentKey="footer.copyright"
            className="text-muted-foreground text-sm"
            as="p"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
