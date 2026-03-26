import { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (mock)
    console.log('Form submitted:', formData);
    alert('Message envoyé avec succès ! (Démo)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Restons en contact</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text-primary">Contact</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Que ce soit pour une opportunité, un projet ou simplement un échange autour de l'IT, 
            je serai ravi de discuter
          </p>
        </div>

        {/* Availability Banner */}
        <Card className="p-6 mb-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 text-center">
          <p className="text-lg font-medium">
            💼 Actuellement en recherche d'opportunités en administration systèmes, 
            réseaux et cybersécurité
          </p>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-4">
            <Card className="p-6 bg-card/50 backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:nicolae.marosan@example.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    nicolae.marosan@example.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Localisation</h3>
                  <p className="text-sm text-muted-foreground">Paris, Île-de-France</p>
                  <p className="text-xs text-muted-foreground/80 mt-1">Mobilité régionale</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur">
              <h3 className="font-semibold mb-4">Réseaux sociaux</h3>
              <div className="space-y-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur">
              <h3 className="font-semibold mb-3">Disponibilité</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>✓ Alternance</p>
                <p>✓ Stage longue durée</p>
                <p>✓ Projets techniques</p>
                <p>✓ Échanges professionnels</p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-6 sm:p-8 bg-card/50 backdrop-blur">
              <h2 className="text-2xl font-semibold mb-6">Envoyez-moi un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nom complet
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                      className="bg-input-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      required
                      className="bg-input-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Sujet
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Objet de votre message"
                    required
                    className="bg-input-background"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message..."
                    rows={8}
                    required
                    className="bg-input-background resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gap-2 group">
                  <span>Envoyer le message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}