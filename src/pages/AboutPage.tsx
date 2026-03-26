import { Award, Briefcase, Code, Users, Heart, Target } from 'lucide-react';
import { Card } from '../components/ui/card';

const stats = [
  {
    icon: Briefcase,
    value: '3',
    label: 'Expériences',
  },
  {
    icon: Award,
    value: 'Bachelor',
    label: 'En cours',
  },
  {
    icon: Code,
    value: 'Bash/Python',
    label: 'Scripting',
  },
  {
    icon: Users,
    value: 'N1/N2',
    label: 'Support',
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Qui suis-je ?</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            À <span className="gradient-text-primary">propos</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entre passion pour l'IT, rigueur technique et authenticité
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Mon histoire */}
            <Card className="p-8 bg-card/50 backdrop-blur border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-semibold text-primary">Mon histoire</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <span className="text-foreground font-medium">Passionné par l'informatique depuis toujours</span>, 
                    j'ai construit mon parcours autour des systèmes, des réseaux et de la cybersécurité. 
                    Après une <span className="text-primary">reconversion réussie du commerce vers l'IT</span>, 
                    je me suis spécialisé dans l'administration systèmes et le support technique.
                  </p>
                  <p>
                    Actuellement en alternance chez <span className="text-foreground font-medium">ISEG Paris</span> et 
                    étudiant en Bachelor Informatique à l'<span className="text-foreground font-medium">ETNA</span>, 
                    je développe quotidiennement mes compétences en support utilisateurs, gestion d'infrastructure, 
                    sécurité informatique et automatisation.
                  </p>
                </div>
              </div>
            </Card>

            {/* Ma philosophie */}
            <Card className="p-8 bg-card/50 backdrop-blur border-accent/20 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-accent" />
                  <h2 className="text-2xl font-semibold text-accent">Ma philosophie</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Ma philosophie : <span className="text-foreground font-medium">la rigueur technique, 
                    la curiosité permanente, l'amélioration continue</span> et un vrai sens du service utilisateur.
                  </p>
                  <p>
                    Je crois en l'importance de <span className="text-accent">la documentation</span>, 
                    des <span className="text-accent">bonnes pratiques de sécurité</span> et de 
                    l'<span className="text-accent">automatisation</span> pour optimiser les processus IT.
                  </p>
                </div>
              </div>
            </Card>

            {/* Ce qui me définit */}
            <Card className="p-8 bg-gradient-to-br from-primary/10 via-card/50 to-accent/10 border-primary/30 backdrop-blur">
              <h2 className="text-2xl font-semibold mb-6">Ce qui me définit</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Je suis aussi passionné par <span className="text-foreground font-medium">les jeux vidéo, 
                  notamment les shooters</span>, car j'aime les environnements dynamiques, exigeants et stratégiques.
                </p>
                <p>
                  Je suis quelqu'un de <span className="text-primary font-medium">très honnête et direct</span> : 
                  quand quelque chose ne va pas, je le dis clairement. Je m'investis sincèrement dans ce que je fais, 
                  avec <span className="text-accent">sérieux, implication et envie de progresser</span>.
                </p>
              </div>
            </Card>

            {/* Valeurs */}
            <Card className="p-8 bg-card/50 backdrop-blur border-primary/20">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Mes valeurs</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Rigueur technique', desc: 'Application stricte des bonnes pratiques et standards IT' },
                  { title: 'Autonomie', desc: 'Capacité à prendre des initiatives et résoudre les problèmes' },
                  { title: 'Curiosité', desc: 'Veille technologique constante et envie d\'apprendre' },
                  { title: 'Service utilisateur', desc: 'Accompagnement et support de qualité' },
                  { title: 'Honnêteté', desc: 'Communication directe et transparente' },
                  { title: 'Engagement', desc: 'Implication totale dans mes missions' },
                ].map((value, i) => (
                  <div key={i} className="space-y-2 p-4 rounded-lg bg-secondary/30 border border-primary/10">
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <span className="text-primary">•</span>
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Ce que je recherche */}
            <Card className="p-8 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30">
              <h2 className="text-2xl font-semibold mb-4">Ce que je recherche</h2>
              <p className="text-muted-foreground leading-relaxed">
                Je suis à la recherche d'opportunités d'alternance ou de postes juniors dans les 
                domaines de l'<span className="text-foreground font-medium">administration systèmes</span>, 
                des <span className="text-foreground font-medium">réseaux</span>, du support informatique N2/N3 
                et de la <span className="text-foreground font-medium">cybersécurité</span>. Mon objectif est de continuer à monter en compétences sur 
                les infrastructures IT, la sécurité opérationnelle et l'automatisation.
              </p>
            </Card>
          </div>

          {/* Stats sidebar */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Chiffres clés</h2>
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur hover:bg-card transition-all border-primary/20 hover:border-primary/40 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </Card>
            ))}

            {/* Technologies */}
            <Card className="p-6 bg-card/50 backdrop-blur border-primary/20">
              <h3 className="font-semibold mb-3">Technologies principales</h3>
              <div className="flex flex-wrap gap-2">
                {['Windows', 'Linux', 'Active Directory', 'VMware', 'Bash', 'Python', 'Wireshark', 'GPO'].map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-secondary border border-primary/20 rounded-full text-xs text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            {/* Domaines d'expertise */}
            <Card className="p-6 bg-card/50 backdrop-blur border-accent/20">
              <h3 className="font-semibold mb-3">Domaines d'expertise</h3>
              <div className="space-y-2">
                {['Administration systèmes', 'Support N1/N2', 'Sécurité réseau', 'Automatisation'].map((domain, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-accent">•</span>
                    <span className="text-sm text-muted-foreground">{domain}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
