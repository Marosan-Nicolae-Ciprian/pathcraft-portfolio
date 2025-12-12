import { useState } from "react";

type CategoryId = "all" | "python" | "linux";

interface Project {
    id: string;
    title: string;
    category: CategoryId;
    level: string;
    description: string;
    tech: string;
    meta: string;
    githubUrl: string;
    readme: string;
}

const categories = [
    { id: "all", label: "Tous" },
    { id: "python", label: "Python" },
    { id: "linux", label: "Linux / UNIX" },
];

const projects: Project[] = [
    {
        id: "python-etna",
        category: "python",
        title: "FDI-ELM1 – Bases de Python",
        level: "Piscine Python ETNA",
        meta: "Python — ETNA",
        description:
            "Piscine Python intensive couvrant les bases de la programmation moderne.",
        tech:
            "Python, algorithmique, conditions, boucles, fonctions, fichiers",
        githubUrl:
            "https://github.com/Marosan-Nicolae-Ciprian/FDI-ELM1-Base-de-Python",
        readme: `
🐍 Piscine Python – ETNA

Cette piscine a pour objectif de maîtriser les bases du langage Python.

📦 Contenu :
- Syntaxe Python
- Variables et types
- Conditions et logique
- Boucles
- Fonctions
- Listes, tuples, dictionnaires
- Lecture et écriture de fichiers

📁 Organisation :
Chaque dossier "group-XXXXX" correspond à une journée d’exercices.

🎯 Objectifs :
- Comprendre la logique algorithmique
- Écrire du code clair et structuré
- Devenir autonome en Python
`,
    },

    {
        id: "linux-etna",
        category: "linux",
        title: "FDI-UNIX – Fondamentaux Linux",
        level: "Piscine UNIX ETNA",
        meta: "Linux / Bash — ETNA",
        description:
            "Apprentissage intensif des systèmes Linux et du scripting Bash.",
        tech:
            "Linux, Bash, permissions, utilisateurs, processus, administration",
        githubUrl:
            "https://github.com/Marosan-Nicolae-Ciprian/FDI-UNIX-Fondamentaux-Systemes-Linux",
        readme: `
🐧 Piscine UNIX / Linux – ETNA

Piscine de 6 jours dédiée aux systèmes Linux.

📦 Contenu :
- Commandes UNIX
- Scripts Bash
- Conditions & boucles
- Permissions
- Utilisateurs & groupes
- Processus système
- Mini-projets d’administration

📁 Organisation :
Un dossier par jour (group-XXXXX)

🎯 Objectifs :
- Être autonome sous Linux
- Automatiser avec Bash
- Comprendre l’administration système
`,
    },
];

export default function Projects() {
    const [activeCategory, setActiveCategory] =
        useState<CategoryId>("all");
    const [selectedProject, setSelectedProject] =
        useState<Project | null>(null);

    const filteredProjects =
        activeCategory === "all"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <div className="text-white">
            <h1 className="text-5xl font-bold text-center my-12">
                Mes Projets
            </h1>

            <div className="flex justify-center gap-4 mb-10">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id as CategoryId)}
                        className={`px-5 py-2 rounded-full ${activeCategory === cat.id
                                ? "bg-emerald-500"
                                : "bg-gray-700"
                            }`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-gray-800 p-6 rounded-xl border border-gray-700"
                    >
                        <h2 className="text-2xl text-emerald-400 mb-2">
                            {project.title}
                        </h2>
                        <p className="text-sm text-gray-400">{project.meta}</p>
                        <p className="my-3">{project.description}</p>

                        <div className="flex gap-3 mt-4">
                            <button
                                onClick={() => setSelectedProject(project)}
                                className="px-4 py-2 bg-purple-500 rounded"
                            >
                                Voir le projet
                            </button>

                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="px-4 py-2 border border-gray-500 rounded"
                            >
                                Voir le code
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
                    <div className="bg-gray-900 p-6 rounded-xl max-w-2xl">
                        <h3 className="text-xl text-emerald-400 mb-4">
                            {selectedProject.title}
                        </h3>
                        <pre className="whitespace-pre-wrap text-sm text-gray-200">
                            {selectedProject.readme}
                        </pre>
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="mt-4 px-4 py-2 bg-gray-700 rounded"
                        >
                            Fermer
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
