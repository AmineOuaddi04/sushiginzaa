import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [{
    label: 'Home',
    href: '#home'
  }, {
    label: 'Menu',
    href: '#menu'
  }, {
    label: 'About',
    href: '#about'
  }, {
    label: 'Contact',
    href: '#contact'
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">桜</span>
            </div>
            <span className="font-playfair text-xl font-semibold text-foreground">Sushi Ginza</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <a key={item.label} href={item.href} className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium">
                {item.label}
              </a>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
              Reserve Table
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navItems.map(item => <a key={item.label} href={item.href} className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium" onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>)}
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity mt-4">
                Reserve Table
              </Button>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;