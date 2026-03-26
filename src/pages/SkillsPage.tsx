import { 
  Server, 
  Network, 
  Shield, 
  Terminal, 
  Box, 
  Headphones 
} from 'lucide-react';
import { Card } from '../components/ui/card';

const skillCategories = [
  {
    icon: Server,
    title: 'Systèmes',
    color: 'text-primary',
    skills: [
      { name: 'Windows Server & Desktop', level: 90 },
      { name: 'Active Directory / GPO', level: 85 },
      { name: 'Linux / Ubuntu', level: 80 },
      { name: 'SSH / Apache / Samba', level: 75 },
    ],
  },
  {
    icon: Network,
    title: 'Réseaux',
    color: 'text-accent',
    skills: [
      { name: 'VLAN & Adressage IP', level: 85 },
      { name: 'Configuration Pare-feu', level: 80 },
      { name: 'Wireshark & Diagnostic', level: 75 },
      { name: 'Protocoles TCP/IP', level: 85 },
    ],
  },
  {
    icon: Shield,
    title: 'Sécurité',
    color: 'text-accent-blue',
    skills: [
      { name: 'Durcissement Linux', level: 75 },
      { name: 'Gestion des permissions', level: 85 },
      { name: 'Audits de sécurité', level: 70 },
      { name: 'Bonnes pratiques ANSSI', level: 80 },
    ],
  },
  {
    icon: Terminal,
    title: 'Automatisation',
    color: 'text-primary',
    skills: [
      { name: 'Bash Scripting', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Analyse de logs', level: 80 },
      { name: 'Automatisation tâches', level: 85 },
    ],
  },
  {
    icon: Box,
    title: 'Virtualisation',
    color: 'text-accent',
    skills: [
      { name: 'VMware', level: 80 },
      { name: 'Hyper-V', level: 75 },
      { name: 'Gestion de VMs', level: 85 },
      { name: 'Réseaux virtuels', level: 75 },
    ],
  },
  {
    icon: Headphones,
    title: 'Support',
    color: 'text-accent-blue',
    skills: [
      { name: 'Support N1/N2', level: 90 },
      { name: 'Diagnostic d\'incidents', level: 90 },
      { name: 'Accompagnement utilisateurs', level: 95 },
      { name: 'Documentation technique', level: 85 },
    ],
  },
];

export function SkillsPage() {
  return (
    <div className="min-h-screen py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Mes expertises</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text-primary">Compétences</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies, outils et savoir-faire — Entre pratique et maîtrise
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur hover:bg-card transition-all hover:shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-secondary">
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h2 className="text-lg font-semibold">{category.title}</h2>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-primary to-accent transition-all duration-500`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Soft Skills & Languages */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Soft Skills */}
          <Card className="p-8 bg-card/50 backdrop-blur">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-primary">•</span>
              Qualités professionnelles
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Autonomie et réactivité',
                'Résolution rapide d\'incidents',
                'Curiosité technologique',
                'Veille cybersécurité',
                'Esprit d\'équipe',
                'Sens du service',
                'Rigueur et précision',
                'Documentation',
              ].map((skill, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-primary text-sm">✓</span>
                  <span className="text-sm text-muted-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Languages */}
          <Card className="p-8 bg-card/50 backdrop-blur">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-accent">•</span>
              Langues
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Roumain</span>
                  <span className="text-sm text-muted-foreground">Langue maternelle</span>
                </div>
                <div className="h-2 bg-secondary rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{ width: '100%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Français</span>
                  <span className="text-sm text-muted-foreground">Courant</span>
                </div>
                <div className="h-2 bg-secondary rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{ width: '95%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Anglais</span>
                  <span className="text-sm text-muted-foreground">Courant</span>
                </div>
                <div className="h-2 bg-secondary rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Outils & Environnements */}
        <Card className="p-8 mt-6 bg-gradient-to-br from-primary/5 to-accent/5">
          <h2 className="text-2xl font-semibold mb-6 text-center">Outils & Environnements</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Windows Server',
              'Ubuntu',
              'Active Directory',
              'VMware',
              'Hyper-V',
              'Bash',
              'Python',
              'PowerShell',
              'Wireshark',
              'SSH',
              'Apache',
              'Samba',
              'Git',
              'Ticketing',
            ].map((tool, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-card border border-border rounded-lg text-sm text-foreground hover:border-primary/50 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}