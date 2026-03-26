import { GraduationCap, Briefcase, Sparkles } from 'lucide-react';

const timelineEvents = [
  {
    year: '2024',
    title: 'ETNA - Bachelor Systèmes, Réseaux & Sécurité',
    type: 'education',
    keyword: 'Spécialisation',
    description: 'Formation spécialisée en administration systèmes, réseaux et cybersécurité. Apprentissage approfondi de Linux, Windows Server, protocoles réseau, scripting et sécurité informatique.',
  },
  {
    year: '2024',
    title: 'ISEG Paris - Technicien Informatique en Alternance',
    type: 'work',
    keyword: 'Terrain',
    description: 'Support N1/N2, déploiement et maintenance de postes Windows, gestion du parc IT sur le campus Parmentier. Automatisation de tâches et documentation des procédures.',
  },
  {
    year: '2023',
    title: 'Mairie de Boulogne-Billancourt - Technicien Informatique',
    type: 'work',
    keyword: 'Progression',
    description: 'Installation et configuration de postes, support utilisateurs, maintenance réseau interne. Mise en place de solutions de sauvegarde et application des règles de sécurité.',
  },
  {
    year: '2022',
    title: 'BNP Paribas Real Estate - Assistant Systèmes et Réseaux',
    type: 'work',
    keyword: 'Rigueur',
    description: 'Supervision réseau, assistance technique, gestion d\'incidents N1/N2. Participation aux projets de mise à jour et migration des systèmes.',
  },
  {
    year: '2021',
    title: 'Transition vers l\'IT',
    type: 'education',
    keyword: 'Reconversion',
    description: 'Reconversion professionnelle du commerce vers l\'informatique. Formations intensives en systèmes, réseaux et support technique.',
  },
  {
    year: '2020',
    title: 'Bac Pro Commerce (option AGEC)',
    type: 'education',
    keyword: 'Origines',
    description: 'Formation commerciale initiale avant la découverte et la passion pour l\'informatique et les technologies.',
  },
];

export function TimelinePage() {
  return (
    <div className="min-h-screen py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Mon évolution</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text-primary">Parcours</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            De la reconversion à la spécialisation — Une trajectoire construite avec persévérance
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line with gradient */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary md:left-1/2" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Icon */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur border-2 border-primary shadow-lg shadow-primary/20 z-10 group-hover:scale-110 transition-transform">
                  {event.type === 'education' ? (
                    <GraduationCap className="w-7 h-7 text-primary" />
                  ) : (
                    <Briefcase className="w-7 h-7 text-accent" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pl-24 md:pl-0">
                  <div
                    className={`bg-card/50 backdrop-blur border border-primary/20 rounded-lg p-6 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all hover:border-primary/50 group ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary text-sm font-medium">
                        {event.year}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Sparkles className="w-3 h-3" />
                        {event.keyword}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{event.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout on desktop */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Summary Card */}
        <div className="mt-16 bg-gradient-to-br from-primary/10 via-card/50 to-accent/10 border border-primary/20 backdrop-blur rounded-lg p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          <div className="relative">
            <h2 className="text-2xl font-bold mb-4">
              Un parcours orienté <span className="gradient-text-primary">progression</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Mon parcours reflète une évolution claire et cohérente : de la découverte de l'IT 
              à la spécialisation en systèmes, réseaux et cybersécurité. Chaque expérience m'a 
              permis de renforcer mes compétences techniques et mon approche méthodique de 
              l'administration IT.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}