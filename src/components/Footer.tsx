import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center">
                <span className="text-primary font-bold text-sm">NCM</span>
              </div>
              <span className="font-semibold">Nicolae Marosan</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              Technicien informatique en alternance — Systèmes, réseaux et cybersécurité. 
              Passionné par l'infrastructure IT et l'automatisation.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:nicolae.marosan@example.com"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Accueil
              </Link>
              <Link to="/a-propos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                À propos
              </Link>
              <Link to="/parcours" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Parcours
              </Link>
              <Link to="/experiences" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Expériences
              </Link>
            </nav>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-semibold mb-4">Plus</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/competences" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Compétences
              </Link>
              <Link to="/projets" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Projets
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nicolae Ciprian Marosan. Tous droits réservés.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Conçu avec passion pour l'IT et la cybersécurité
          </p>
        </div>
      </div>
    </footer>
  );
}