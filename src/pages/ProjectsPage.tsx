import { useState } from 'react';
import { ExternalLink, Github, FileText } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

const projects = [
  {
    title: 'Infrastructure Réseau Multi-VLAN',
    category: 'Réseaux',
    image: 'https://images.unsplash.com/photo-1599949104055-2d04026aee1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwaW5mcmFzdHJ1Y3R1cmUlMjBkYXRhY2VudGVyfGVufDF8fHx8MTc3NDI5MTAwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Conception et déploiement d\'une infrastructure réseau segmentée avec VLAN pour séparer les flux métier, administration et invités.',
    context: 'Projet réalisé dans le cadre d\'une mission en entreprise pour améliorer la sécurité réseau.',
    technologies: ['VLAN', 'Cisco', 'Pare-feu', 'Wireshark'],
    status: 'Terminé',
    link: '#',
  },
  {
    title: 'Script d\'Analyse de Logs Sécurité',
    category: 'Sécurité',
    image: 'https://images.unsplash.com/photo-1768839720936-87ce3adf2d08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwZGlnaXRhbCUyMHByb3RlY3Rpb258ZW58MXx8fHwxNzc0MjU4MzYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Développement d\'un script Python pour analyser les logs système, détecter les tentatives d\'intrusion et générer des rapports automatiques.',
    context: 'Automatisation de la surveillance sécurité pour réduire le temps d\'analyse manuelle des logs.',
    technologies: ['Python', 'Bash', 'RegEx', 'Linux'],
    status: 'Terminé',
    link: '#',
  },
  {
    title: 'Automatisation de Déploiement Windows',
    category: 'Systèmes',
    image: 'https://images.unsplash.com/photo-1658232212757-9ddbb370f675?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW51eCUyMHRlcm1pbmFsJTIwY29kaW5nfGVufDF8fHx8MTc3NDI1NTkxNXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Création de scripts PowerShell pour automatiser le déploiement de postes Windows avec configuration AD, GPO et installation de logiciels standards.',
    context: 'Optimisation du processus de déploiement pour réduire le temps d\'installation de 4h à 30min.',
    technologies: ['PowerShell', 'Active Directory', 'GPO', 'Windows'],
    status: 'En cours',
    link: '#',
  },
];

const categories = ['Tous', 'Systèmes', 'Réseaux', 'Sécurité', 'Python', 'Linux / Bash'];

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const filteredProjects = selectedCategory === 'Tous' 
    ? projects 
    : projects.filter(p => {
        if (selectedCategory === 'Python') return p.technologies.includes('Python');
        if (selectedCategory === 'Linux / Bash') return p.technologies.includes('Bash') || p.technologies.includes('Linux');
        return p.category === selectedCategory;
      });

  return (
    <div className="min-h-screen py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Mon travail</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text-primary">Projets</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Infrastructures, automatisation et sécurité — Des réalisations concrètes orientées production
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card/50 backdrop-blur hover:bg-card transition-all hover:shadow-xl group"
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                
                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={project.status === 'Terminé' ? 'default' : 'outline'}
                    className="bg-card/80 backdrop-blur"
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6 space-y-4">
                <div>
                  <Badge variant="outline" className="mb-2 text-xs">
                    {project.category}
                  </Badge>
                  <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                    {project.description}
                  </p>
                  <p className="text-xs text-muted-foreground/80 italic">
                    {project.context}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 gap-2">
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 gap-2">
                    <FileText className="w-4 h-4" />
                    <span>Détails</span>
                  </Button>
                  <Button size="sm" variant="ghost" className="px-3">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Professional Goal */}
        <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold">Mon Objectif Professionnel</h2>
            <p className="text-muted-foreground leading-relaxed">
              Évoluer vers un rôle d'administrateur systèmes et réseaux avec une forte sensibilité 
              cybersécurité. Mon ambition est de devenir un expert en infrastructure IT, capable de 
              concevoir, déployer et sécuriser des environnements techniques complexes, tout en 
              appliquant les meilleures pratiques d'automatisation et de fiabilité opérationnelle.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}