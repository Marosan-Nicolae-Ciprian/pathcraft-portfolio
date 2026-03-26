import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: '' });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message:
          "Configuration EmailJS manquante. Vérifie ton fichier .env.",
      });
      return;
    }

    try {
      setIsSending(true);

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
          to_name: 'Nicolae Ciprian Marosan',
        },
        {
          publicKey,
        }
      );

      setStatus({
        type: 'success',
        message: 'Message envoyé avec succès !',
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({
        type: 'error',
        message:
          "Une erreur est survenue lors de l'envoi du message. Réessaie plus tard.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Restons en contact</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text-primary">Contact</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Que ce soit pour une opportunité, un projet ou simplement un échange
            autour de l&apos;IT, je serai ravi de discuter.
          </p>
        </div>

        <Card className="p-6 mb-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 text-center">
          <p className="text-lg font-medium">
            💼 Actuellement en recherche d&apos;opportunités en administration
            systèmes, réseaux et cybersécurité
          </p>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Card className="p-6 bg-card/50 backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:marosa_a@etna-alternance.net"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    marosa_a@etna-alternance.net
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
                  <p className="text-sm text-muted-foreground">
                    Paris, Île-de-France
                  </p>
                  <p className="text-xs text-muted-foreground/80 mt-1">
                    Mobilité régionale
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur">
              <h3 className="font-semibold mb-4">Réseaux sociaux</h3>
              <div className="space-y-3">
                <a
                  href="https://github.com/Marosan-Nicolae-Ciprian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/"
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

          <div className="lg:col-span-2">
            <Card className="p-6 sm:p-8 bg-card/50 backdrop-blur">
              <h2 className="text-2xl font-semibold mb-6">
                Envoyez-moi un message
              </h2>

              {status.type && (
                <div
                  className={`mb-6 rounded-lg border px-4 py-3 text-sm ${
                    status.type === 'success'
                      ? 'border-green-500/30 bg-green-500/10 text-green-300'
                      : 'border-red-500/30 bg-red-500/10 text-red-300'
                  }`}
                >
                  {status.message}
                </div>
              )}

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

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2 group"
                  disabled={isSending}
                >
                  <span>
                    {isSending ? 'Envoi en cours...' : 'Envoyer le message'}
                  </span>
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