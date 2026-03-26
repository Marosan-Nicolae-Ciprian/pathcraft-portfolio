import { useState } from 'react';
import { Building2, MapPin, Calendar } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

const experiences = [
  {
    company: 'ISEG Paris',
    role: 'Technicien Informatique en Alternance',
    location: 'Campus Parmentier, Paris',
    period: '2024 - Présent',
    category: ['Alternance', 'Support', 'Systèmes'],
    missions: [
      'Support utilisateurs N1/N2 : diagnostic et résolution d\'incidents',
      'Déploiement et maintenance de postes Windows',
      'Gestion du parc informatique et des équipements',
      'Application des règles de sécurité et documentation des procédures',
      'Accompagnement des utilisateurs sur les outils bureautiques',
    ],
    technologies: ['Windows', 'Active Directory', 'Support N1/N2', 'Documentation'],
    impact: 'Amélioration de la satisfaction utilisateur et réduction du temps de résolution des incidents.',
  },
  {
    company: 'Mairie de Boulogne-Billancourt',
    role: 'Technicien Informatique',
    location: 'Boulogne-Billancourt',
    period: '2023',
    category: ['Support', 'Systèmes', 'Réseaux'],
    missions: [
      'Installation et configuration de postes Windows et logiciels bureautiques',
      'Support technique aux utilisateurs de la mairie',
      'Mise en place de solutions de sauvegarde automatique',
      'Maintenance du réseau interne et équipements',
      'Application des règles de sécurité informatique',
    ],
    technologies: ['Windows', 'Réseaux', 'Sécurité', 'Bureautique'],
    impact: 'Déploiement réussi de 50+ postes de travail avec configuration standardisée.',
  },
  {
    company: 'BNP Paribas Real Estate',
    role: 'Assistant Systèmes et Réseaux',
    location: 'Paris',
    period: '2022',
    category: ['Systèmes', 'Réseaux', 'Support'],
    missions: [
      'Supervision et monitoring de l\'infrastructure réseau',
      'Assistance technique aux équipes métier',
      'Gestion d\'incidents N1/N2 et ticketing',
      'Maintenance préventive et corrective des systèmes',
      'Participation aux projets de mise à jour et migration',
    ],
    technologies: ['Supervision', 'Réseaux', 'Ticketing', 'Infrastructure'],
    impact: 'Contribution à la stabilité du réseau et réduction des incidents critiques.',
  },
];

const filterOptions = ['Tous', 'Alternance', 'Support', 'Systèmes', 'Réseaux'];

export function ExperiencePage() {
  const [selectedFilter, setSelectedFilter] = useState('Tous');

  const filteredExperiences = selectedFilter === 'Tous'
    ? experiences
    : experiences.filter(exp => exp.category.includes(selectedFilter));

  return (
    <div className="min-h-screen py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Mon parcours professionnel</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text-primary">Expériences</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Support, administration systèmes et infrastructure — Du terrain à la production
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterOptions.map((filter) => (
            <Button
              key={filter}
              variant={selectedFilter === filter ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Experiences */}
        <div className="space-y-8">
          {filteredExperiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 bg-card/50 backdrop-blur hover:bg-card transition-all hover:shadow-xl"
            >
              <div className="grid md:grid-cols-3 gap-6">
                {/* Left column: Company info */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-semibold text-lg">{exp.company}</h2>
                      <p className="text-primary font-medium">{exp.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Right column: Missions & Impact */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h3 className="font-medium mb-3 text-foreground">Missions principales</h3>
                    <ul className="space-y-2">
                      {exp.missions.map((mission, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-muted-foreground leading-relaxed"
                        >
                          <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                          <span>{mission}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-secondary/30 rounded-lg p-4 border border-primary/10">
                    <h3 className="font-medium mb-2 text-primary">Valeur apportée</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.impact}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}