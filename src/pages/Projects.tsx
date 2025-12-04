import { useState } from "react";

type CategoryId =
    | "all"
    | "python"
    | "linux"
    | "bash"
    | "dns"
    | "apache"
    | "gns3"
    | "uiux";

interface Project {
    id: string;
    title: string;
    category: CategoryId;
    level: string;
    description: string;
    tech: string;
    meta: string;
    code: string;
    figmaLink?: string;
}

const categories: { id: CategoryId; label: string }[] = [
    { id: "all", label: "Tous" },
    { id: "python", label: "Python" },
    { id: "linux", label: "Linux / Debian" },
    { id: "dns", label: "DNS & BIND9" },
    { id: "apache", label: "Apache / Web" },
    { id: "bash", label: "Bash Scripts" },
    { id: "gns3", label: "GNS3 Réseau" },
    { id: "uiux", label: "UI / UX" },
];

// ⚙️ Données de projets construites à partir de ton PDF / exercices
const projects: Project[] = [
    {
        id: "py-hello-world",
        category: "python",
        title: "Piscine Python – Hello World",
        level: "FDI-ELEM 01",
        description:
            "Exercice d'introduction Python demandant de retourner la chaîne 'Hello, World!' conformément aux règles PEP8.",
        tech: "Python, fonctions, tests unitaires simples",
        meta: "Python — FDI-ELEM 01",
        code: `# hello_world.py

def hello() -> str:
    \"\"\"Retourne un message de bienvenue.\"\"\"
    return "Hello, World!"

if __name__ == "__main__":
    print(hello())`,
    },
    {
        id: "py-concat",
        category: "python",
        title: "Concaténation de chaînes",
        level: "FDI-ELEM 02",
        description:
            "Implémentation d’une fonction qui concatène plusieurs chaînes avec gestion d'espaces et de cas limites.",
        tech: "Python, strings, gestion des paramètres",
        meta: "Python — FDI-ELEM 02",
        code: `# concat_strings.py

from typing import Iterable

def concat_strings(values: Iterable[str], sep: str = " ") -> str:
    cleaned = [v.strip() for v in values if v is not None]
    return sep.join(cleaned)

if __name__ == "__main__":
    print(concat_strings(["ETNA", " PathCraft ", "Portfolio"]))`,
    },
    {
        id: "py-maths",
        category: "python",
        title: "Opérations mathématiques",
        level: "FDI-ELEM 03",
        description:
            "Création d'une fonction retournant un tuple contenant addition, soustraction, multiplication et division.",
        tech: "Python, opérations arithmétiques, gestion d’erreurs",
        meta: "Python — FDI-ELEM 03",
        code: `# math_ops.py

from typing import Tuple

def compute(a: float, b: float) -> Tuple[float, float, float, float | None]:
    add = a + b
    sub = a - b
    mul = a * b
    div = a / b if b != 0 else None
    return add, sub, mul, div

if __name__ == "__main__":
    print(compute(10, 3))`,
    },
    {
        id: "linux-j1",
        category: "linux",
        title: "Manipulation fichiers & permissions (Jour 1)",
        level: "Unix — Jour 1",
        description:
            "Création de répertoires, fichiers et gestion fine des permissions pour préparer un environnement de travail structuré.",
        tech: "mkdir, touch, chmod, dmesg, rsync, ls -l",
        meta: "Linux / Debian — Journée 1",
        code: `#!/bin/bash
# Initialisation d'un environnement de travail

WORKDIR="$HOME/etna_jour1"
mkdir -p "$WORKDIR/logs" "$WORKDIR/scripts"

touch "$WORKDIR/README.md"
touch "$WORKDIR/logs/kernel.log"

dmesg | tail -100 > "$WORKDIR/logs/kernel.log"

# Permissions
chmod 700 "$WORKDIR/scripts"
chmod 640 "$WORKDIR/logs/kernel.log"

# Sauvegarde de la structure
rsync -a "$WORKDIR" "$HOME/backup_jour1/"`,
    },
    {
        id: "linux-j2",
        category: "linux",
        title: "Outils système & gestion de paquets (Jour 2)",
        level: "Unix — Jour 2",
        description:
            "Découverte des commandes systèmes essentielles : date, hostname, gestion des paquets, disques et montages.",
        tech: "date, hostname, uname, uptime, dpkg -l, fdisk -l, mount",
        meta: "Linux / Debian — Journée 2",
        code: `#!/bin/bash
# Audit rapide de la machine

echo "=== Informations système ==="
date
hostname
uname -a
uptime

echo
echo "=== Paquets installés (extrait) ==="
dpkg -l | head -20

echo
echo "=== Disques & partitions ==="
sudo fdisk -l | sed -n '1,40p'

echo
echo "=== Points de montage ==="
mount | grep "^/"`,
    },
    {
        id: "linux-j3-users",
        category: "bash",
        title: "Gestion utilisateurs & groupes (Jour 3)",
        level: "Unix — Jour 3",
        description:
            "Scripts automatisant la création d'utilisateurs ETNA, l'ajout à des groupes et la vérification des droits.",
        tech: "adduser, usermod, groupadd, id, groups, if/else, case",
        meta: "Bash — Administration système",
        code: `#!/bin/bash
# Création d'un utilisateur ETNA avec groupe dédié

read -rp "Nom d'utilisateur : " USERNAME
GROUP="etna"

if ! getent group "$GROUP" > /dev/null; then
  sudo groupadd "$GROUP"
fi

if id "$USERNAME" >/dev/null 2>&1; then
  echo "Utilisateur déjà existant."
else
  sudo adduser --disabled-password --gecos "" "$USERNAME"
  sudo usermod -aG "$GROUP" "$USERNAME"
  echo "Utilisateur $USERNAME créé et ajouté au groupe $GROUP."
fi

echo
id "$USERNAME"
groups "$USERNAME"`,
    },
    {
        id: "linux-j4-pkg",
        category: "linux",
        title: "Audit & installation de paquets (Jour 4)",
        level: "Unix — Jour 4",
        description:
            "Vérifier si des paquets sont installés, les installer si besoin et produire un rapport lisible.",
        tech: "dpkg-query, apt, for, if, echo",
        meta: "Linux / Debian — Automatisation paquets",
        code: `#!/bin/bash
# Vérifie et installe une liste de paquets

PACKAGES=("curl" "git" "htop")

for pkg in "\${PACKAGES[@]}"; do
  dpkg-query -W -f='\${Status}' "$pkg" 2>/dev/null | grep -q "install ok installed"

    echo "✅ $pkg déjà installé"
  else
    echo "📦 Installation de $pkg..."
    sudo apt update -y
    sudo apt install -y "$pkg"
  fi
done`,
    },
    {
        id: "bash-logs-11-18",
        category: "bash",
        title: "Scripts de supervision & logs (Exercices 11–18)",
        level: "Unix — Exercices 11 à 18",
        description:
            "Collection de scripts : analyse des logs, vérification de l'espace disque, nettoyage, gestion des droits et sauvegardes.",
        tech: "free -h, df -h, journalctl, find, chmod, cp, rm, conditions, boucles",
        meta: "Bash — Supervision système",
        code: `#!/bin/bash
# Exemple d'exercice : vérification espace disque & log

LOG="/var/log/etna_disk_check.log"
THRESHOLD=80

used=$(df -h / | awk 'NR==2 {gsub("%", "", $5); print $5}')

echo "$(date "+%F %T") - Utilisation: $used%" | tee -a "$LOG"

if [ "$used" -gt "$THRESHOLD" ]; then
  echo "⚠️  Espace disque critique" | tee -a "$LOG"
fi`,
    },
    {
        id: "apache-vhost",
        category: "apache",
        title: "Serveur Web Apache – VirtualHosts",
        level: "Projet perso",
        description:
            "Mise en place d’un serveur Apache avec virtualhosts, pages de test et journalisation des accès.",
        tech: "Apache2, sites-available, a2ensite, logs, HTML",
        meta: "Apache / Web",
        code: `# /etc/apache2/sites-available/pathcraft.local.conf
<VirtualHost *:80>
    ServerName pathcraft.local
    DocumentRoot /var/www/pathcraft

    ErrorLog \${APACHE_LOG_DIR}/pathcraft_error.log
    CustomLog \${APACHE_LOG_DIR}/pathcraft_access.log combined
</VirtualHost>

# Activation :
# sudo a2ensite pathcraft.local.conf
# sudo systemctl reload apache2`,
    },
    {
        id: "dns-bind",
        category: "dns",
        title: "DNS BIND9 – Zone locale & reverse",
        level: "TP réseau",
        description:
            "Configuration d’un serveur DNS BIND9 pour une zone locale et la résolution inverse (PTR).",
        tech: "BIND9, zone file, named.conf.local, dig, nslookup",
        meta: "DNS & BIND9",
        code: `; /etc/bind/db.pathcraft.local
$TTL 604800
@   IN  SOA ns1.pathcraft.local. admin.pathcraft.local. (
        2     ; Serial
        604800 ; Refresh
        86400  ; Retry
        2419200; Expire
        604800 ); Negative Cache TTL
;
@       IN  NS      ns1.pathcraft.local.
ns1     IN  A       10.0.0.10
www     IN  A       10.0.0.20

; Test :
; dig @10.0.0.10 www.pathcraft.local`,
    },
    {
        id: "gns3-topology",
        category: "gns3",
        title: "Topologie réseau GNS3 – Routage & VLANs",
        level: "Projet GNS3",
        description:
            "Création d’une topologie virtuelle avec plusieurs routeurs, VLANs et tests de connectivité.",
        tech: "GNS3, Cisco-like CLI, VLAN, routage statique / OSPF",
        meta: "Réseau — GNS3",
        code: `! Exemple de configuration simplifiée

vlan 10
 name USERS
vlan 20
 name SERVERS

interface GigabitEthernet0/1
 switchport mode access
 switchport access vlan 10

interface GigabitEthernet0/2
 switchport mode access
 switchport access vlan 20

! Routage inter-VLAN via un routeur ou L3 switch`,
    },
    {
        id: "uiux-intranet",
        category: "uiux",
        title: "Moderniser l’interface intranet",
        level: "UI / UX — Figma",
        description:
            "Refonte complète d'une interface intranet : hiérarchie visuelle, palette de couleurs modernisée, typographie et composants réutilisables.",
        tech: "Figma, auto-layout, composants, responsive design",
        meta: "UI / UX — Prototype Figma",
        figmaLink:
            "https://www.figma.com/make/PtE69Bdc3aPuL6yqmww8cJ/Moderniser-l-interface-intranet?node-id=0-1&p=f&t=ydXAYDjeAHGWdHtR-0&fullscreen=1",
        code: `# Notes de conception (UI/UX)

- Objectif : moderniser l'interface intranet pour la rendre plus claire et agréable.
- Contraintes : rester cohérent avec l'identité visuelle de l'entreprise.

Principes :
1. Grille et alignement pour structurer l'information.
2. Palette sombre avec couleur d'accent (vert / violet) pour les éléments interactifs.
3. Mise en avant des actions principales (CTA) via contraste et taille.
4. Utilisation de composants Figma (boutons, cartes, navigation) pour garder la cohérence.
5. Préparation à une future intégration React + Tailwind.`,
    },
];

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects =
        activeCategory === "all"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <div className="text-white">
            {/* 🧭 En-tête */}
            <section className="pt-16 pb-10 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                    Mes Projets
                </h1>
                <p className="max-w-3xl mx-auto text-gray-300">
                    Voici un aperçu structuré de mes projets, exercices techniques et
                    travaux réalisés à l&apos;ETNA dans les domaines du Python, Linux,
                    DNS, réseau, Bash, Web &amp; UI/UX.
                </p>
            </section>

            {/* 🔘 Filtres */}
            <section className="mb-10 flex flex-wrap justify-center gap-3 px-4">
                {categories.map((cat) => {
                    const isActive = activeCategory === cat.id;
                    return (
                        <button
                            key={cat.id}
                            type="button"
                            onClick={() => setActiveCategory(cat.id)}
                            className={[
                                "px-4 md:px-6 py-2 rounded-full border text-sm md:text-base transition",
                                isActive
                                    ? "bg-emerald-500 text-white border-emerald-400 shadow-lg shadow-emerald-500/30"
                                    : "bg-gray-800/60 border-gray-700 text-gray-300 hover:bg-gray-700",
                            ].join(" ")}
                        >
                            {cat.label}
                        </button>
                    );
                })}
            </section>

            {/* 🧱 Cartes de projets */}
            <section className="px-4 pb-20 max-w-6xl mx-auto grid gap-6 md:gap-8 md:grid-cols-2">
                {filteredProjects.map((project) => (
                    <article
                        key={project.id}
                        className="bg-gray-800/80 border border-gray-700 rounded-2xl p-6 md:p-7 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
                    >
                        <h2 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-2">
                            {project.title}
                        </h2>

                        <p className="text-sm text-gray-400 mb-1">{project.meta}</p>
                        <p className="text-sm text-emerald-300 mb-3">{project.level}</p>

                        <p className="text-gray-200 mb-3">{project.description}</p>

                        <p className="text-sm text-gray-400">
                            <span className="font-semibold text-gray-300">Tech / outils :</span>{" "}
                            {project.tech}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-3">
                            <button
                                type="button"
                                onClick={() => setSelectedProject(project)}
                                className="px-4 py-2 text-sm font-medium rounded-full bg-purple-500 hover:bg-purple-400 text-white shadow-md shadow-purple-500/30 transition"
                            >
                                Voir le code
                            </button>

                            {project.figmaLink && (
                                <a
                                    href={project.figmaLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-4 py-2 text-sm font-medium rounded-full border border-emerald-400 text-emerald-300 hover:bg-emerald-500/10 transition"
                                >
                                    Voir le design Figma
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </section>

            {/* 💼 EXPÉRIENCES PROFESSIONNELLES */}
            <section className="mt-10 px-4 pb-20 bg-transparent">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-400 text-center mb-10">
                    💼 Expériences Professionnelles
                </h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <div className="bg-gray-800/80 p-8 rounded-2xl shadow-lg border border-gray-700 backdrop-blur-sm hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-3xl">🖧</span>
                            <h3 className="text-2xl font-semibold text-emerald-400">
                                Assistant Systèmes &amp; Réseaux
                            </h3>
                        </div>

                        <p className="text-gray-400 italic mb-4">
                            BNP Paribas Real Estate —{" "}
                            <span className="text-gray-300">(Nov. 2024 – Déc. 2024)</span>
                        </p>

                        <ul className="list-disc text-gray-300 ml-6 space-y-2">
                            <li>Supervision du réseau &amp; maintenance quotidienne</li>
                            <li>Support technique niveaux 1 &amp; 2</li>
                            <li>Renforcement de la sécurité des postes</li>
                            <li>Gestion des tickets &amp; documentation interne</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800/80 p-8 rounded-2xl shadow-lg border border-gray-700 backdrop-blur-sm hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-3xl">🖥️</span>
                            <h3 className="text-2xl font-semibold text-purple-400">
                                Technicien Informatique
                            </h3>
                        </div>

                        <p className="text-gray-400 italic mb-4">
                            Mairie de Boulogne-Billancourt —{" "}
                            <span className="text-gray-300">(2023)</span>
                        </p>

                        <ul className="list-disc text-gray-300 ml-6 space-y-2">
                            <li>Installation &amp; configuration de postes Windows</li>
                            <li>Support et assistance aux utilisateurs</li>
                            <li>Gestion réseau interne &amp; sauvegardes</li>
                            <li>Diagnostic matériel / logiciel</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 🪟 MODAL “VOIR LE CODE” */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
                    <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-3xl w-full max-h-[80vh] flex flex-col shadow-2xl">
                        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-800">
                            <div>
                                <h3 className="text-lg font-semibold text-emerald-400">
                                    {selectedProject.title}
                                </h3>
                                <p className="text-xs text-gray-400">{selectedProject.meta}</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setSelectedProject(null)}
                                className="text-gray-400 hover:text-white text-xl px-2"
                                aria-label="Fermer"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="p-4 overflow-auto">
                            <pre className="bg-black/60 border border-gray-800 rounded-xl p-4 text-xs md:text-sm font-mono text-gray-100 whitespace-pre-wrap">
                                {selectedProject.code}
                            </pre>
                        </div>

                        <div className="px-5 py-3 border-t border-gray-800 flex justify-end">
                            <button
                                type="button"
                                onClick={() => setSelectedProject(null)}
                                className="px-4 py-2 rounded-full bg-gray-700 hover:bg-gray-600 text-sm text-white transition"
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
