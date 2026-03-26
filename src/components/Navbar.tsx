import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { Logo } from './Logo';
import { Button } from './ui/button';

const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Parcours', href: '/parcours' },
  { label: 'Expériences', href: '/experiences' },
  { label: 'Compétences', href: '/competences' },
  { label: 'Projets', href: '/projets' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname === href;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-lg'
          : 'bg-background/95 backdrop-blur-sm border-b border-border/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm transition-colors ${
                  isActive(item.href)
                    ? 'text-primary font-medium'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              <span>CV</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block py-2 transition-colors ${
                  isActive(item.href)
                    ? 'text-primary font-medium'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button size="sm" className="w-full gap-2">
              <Download className="w-4 h-4" />
              <span>Télécharger mon CV</span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}