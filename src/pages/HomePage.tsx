import { Github, Linkedin, Mail, Download, ArrowRight, Briefcase, Code, Rocket } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';

const skills = [
  'Linux',
  'Windows',
  'Réseaux',
  'Sécurité',
  'Bash',
  'Python',
  'Support N1-N2',
];

const teasers = [
  {
    icon: Code,
    title: 'Parcours',
    description: 'Du commerce à l\'IT : une reconversion réussie vers l\'administration systèmes et la cybersécurité.',
    link: '/parcours',
    color: 'text-primary',
  },
  {
    icon: Briefcase,
    title: 'Expériences',
    description: 'ISEG Paris, Mairie de Boulogne-Billancourt, BNP Paribas Real Estate. Support technique, infrastructure et sécurité.',
    link: '/experiences',
    color: 'text-accent',
  },
  {
    icon: Rocket,
    title: 'Projets',
    description: 'Automatisation, sécurisation, infrastructure réseau. Des projets concrets et orientés production.',
    link: '/projets',
    color: 'text-accent-blue',
  },
];

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(167, 139, 250) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-block">
                  <Badge variant="outline" className="border-primary/50 text-primary px-4 py-1">
                    Technicien Informatique en Alternance
                  </Badge>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-foreground">Nicolae Ciprian</span>
                  <br />
                  <span className="gradient-text-primary">Marosan</span>
                </h1>
                
                <p className="text-xl text-primary font-medium">
                  Systèmes, Réseaux & Sécurité
                </p>
              </div>

              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Je construis mon parcours entre rigueur technique, curiosité permanente et passion sincère 
                pour l'infrastructure, la sécurité et les environnements systèmes.
              </p>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="outline" 
                    className="border-primary/30 text-foreground bg-primary/5 hover:bg-primary/10 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/projets">
                  <Button size="lg" className="gap-2 group bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                    <span>Voir mes projets</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="gap-2 border-primary/30 hover:bg-primary/10">
                  <Download className="w-4 h-4" />
                  <span>Télécharger mon CV</span>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:nicolae.marosan@example.com"
                  className="p-3 rounded-lg bg-secondary border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Decorative elements with new colors */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-lg" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-accent/30 rounded-lg" />
                
                {/* Glowing effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl rounded-2xl" />
                
                {/* Image container */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1620124337967-b918fd79de99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjB0ZWNobmljaWFuJTIwSVQlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzQyOTEwMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Nicolae Ciprian Marosan"
                    className="w-full h-auto aspect-square object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teasers Section */}
      <section className="py-20 relative">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Découvrez mon <span className="gradient-text-primary">profil</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Entre reconversion, terrain et spécialisation technique
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {teasers.map((teaser, index) => (
              <Link key={index} to={teaser.link}>
                <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 hover:bg-card transition-all hover:shadow-xl hover:shadow-primary/10 h-full group relative overflow-hidden">
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative space-y-4">
                    <div className={`p-3 rounded-lg bg-secondary border border-primary/20 w-fit group-hover:scale-110 transition-transform`}>
                      <teaser.icon className={`w-6 h-6 ${teaser.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold">{teaser.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {teaser.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-medium pt-2">
                      <span>Découvrir</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
