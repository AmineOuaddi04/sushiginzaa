
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useEditable } from '@/contexts/EditableContext';
import EditableText from '@/components/EditableText';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'header.nav.inicio', href: '#home' },
    { label: 'header.nav.galeria', href: '#gallery' },
    { label: 'header.nav.menu', href: 'https://drive.google.com/file/d/1LOjRr_1jNvt1DckffBy1rbutaSqAei-9/view?usp=sharing' },
    { label: 'header.nav.nosotros', href: '#about' },
    { label: 'header.nav.contacto', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">鮨</span>
            </div>
            <div>
              <EditableText 
                contentKey="header.title"
                className="font-playfair text-2xl font-bold text-foreground"
                as="span"
              />
              <EditableText 
                contentKey="header.subtitle"
                className="text-xs text-muted-foreground -mt-1 block"
                as="p"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <a 
                key={item.label} 
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
              >
                <EditableText contentKey={item.label} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border/30 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navItems.map(item => (
                <a 
                  key={item.label} 
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <EditableText contentKey={item.label} />
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
