export default function Parcours() {
    const steps = [
        {
            date: "2020 - 2023",
            title: "Bac Professionnel Commerce (option AGEC)",
            desc: "Premiers contacts avec le monde professionnel : relation client, organisation, autonomie, gestion.",
            highlight: false,
        },
        {
            date: "2023 - 2024",
            title: "BTS SIO — 1ère année (Option SISR)",
            desc: "Première immersion dans l’administration systèmes, réseaux et IT.",
            highlight: false,
        },
        {
            date: "2024 - 2025",
            title: "BTS SIO — 2ᵉ année (redoublement)",
            desc: "Année charnière qui confirme mon choix de carrière dans l’informatique.",
            highlight: true,
        },
        {
            date: "2025 - Aujourd'hui",
            title: "ETNA — Bachelor Systèmes, Réseaux & Sécurité",
            desc: "Nouvelle école + nouvelle dynamique. Alternance, projets, scripting, cybersécurité et réseaux.",
            highlight: true,
        },
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white px-6 md:px-16 lg:px-24 py-16">
            <h1 className="text-4xl font-bold text-center mb-10 section-animate">
                🎓 Mon Parcours{" "}
                <span className="text-emerald-400">Professionnel & Scolaire</span>
            </h1>

            <p className="text-gray-300 max-w-3xl mx-auto text-center text-lg mb-14 section-animate">
                Voici l’évolution complète de mon parcours, du Bac Pro Commerce à ma
                formation actuelle en Systèmes, Réseaux et Sécurité à l’ETNA.
            </p>

            {/* TIMELINE */}
            <div className="relative border-l-4 border-emerald-500 ml-6 section-animate">
                {steps.map((step, i) => (
                    <div key={i} className="mb-10 ml-6">
                        <div
                            className={`absolute w-4 h-4 rounded-full -left-2 border-2 ${step.highlight
                                    ? "bg-emerald-400 border-emerald-300"
                                    : "bg-gray-600 border-gray-400"
                                }`}
                        ></div>

                        <h3 className="text-xl font-bold">{step.title}</h3>
                        <span className="text-emerald-400 font-semibold">
                            {step.date}
                        </span>
                        <p className="text-gray-300 mt-2 max-w-xl">{step.desc}</p>
                    </div>
                ))}
            </div>

            {/* EXPERIENCES PRO */}
            <section className="mt-20 section-animate">
                <h2 className="text-3xl font-bold text-blue-400 text-center mb-10">
                    💼 Expériences Professionnelles
                </h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="bg-gray-800 p-6 rounded-xl shadow border border-gray-700 card-animate">
                        <h3 className="text-xl font-semibold text-emerald-400">
                            Assistant Systèmes & Réseaux
                        </h3>
                        <p className="text-gray-400">BNP Paribas Real Estate</p>
                        <p className="text-gray-500 text-sm">Novembre 2024 – Décembre 2024</p>
                        <ul className="list-disc text-gray-300 mt-3 ml-5 space-y-1 text-sm">
                            <li>Supervision du réseau interne.</li>
                            <li>Support utilisateurs niveau 1 & 2.</li>
                            <li>Maintenance & sécurité des postes.</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-xl shadow border border-gray-700 card-animate">
                        <h3 className="text-xl font-semibold text-purple-400">
                            Technicien Informatique
                        </h3>
                        <p className="text-gray-400">Mairie de Boulogne-Billancourt</p>
                        <p className="text-gray-500 text-sm">2023</p>
                        <ul className="list-disc text-gray-300 mt-3 ml-5 space-y-1 text-sm">
                            <li>Installation & préparation de postes Windows.</li>
                            <li>Support utilisateurs et dépannage.</li>
                            <li>Participation à la gestion du réseau interne.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CERTIFICATIONS */}
            <section className="mt-20 section-animate">
                <h2 className="text-3xl font-bold text-purple-400 text-center mb-6">
                    📜 Certifications (obtenues & en cours)
                </h2>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <div className="bg-gray-800 p-6 rounded-xl shadow border border-gray-700">
                        <h3 className="text-xl font-semibold mb-2">
                            💼 Formation ETNA – Bac +3
                        </h3>
                        <p className="text-gray-300">
                            Certification RNCP en cours d’obtention dans les Systèmes, Réseaux
                            et Sécurité.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-xl shadow border border-gray-700">
                        <h3 className="text-xl font-semibold mb-2">
                            🛡️ Cybersécurité — objectifs
                        </h3>
                        <ul className="text-gray-300 list-disc ml-5 space-y-1 text-sm">
                            <li>ANSSI SecNumAcademie</li>
                            <li>TryHackMe — parcours sécurité</li>
                            <li>CompTIA Security+ (objectif moyen terme)</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* OBJECTIFS & MOTIVATION */}
            <section className="mt-24 text-center max-w-3xl mx-auto section-animate">
                <h2 className="text-3xl font-bold text-emerald-400 mb-4">
                    🎯 Objectifs & Motivation
                </h2>

                <p className="text-gray-300 text-lg leading-relaxed">
                    Je souhaite devenir <strong>Administrateur Systèmes & Réseaux</strong>,
                    avec une forte orientation cybersécurité. Mon ambition est de construire
                    une expertise solide sur :
                </p>

                <ul className="text-gray-300 text-lg list-disc text-left mt-4 space-y-2 mx-auto max-w-xl">
                    <li>l’administration Linux & Windows Server</li>
                    <li>les réseaux (Cisco / GNS3 / VLAN / Firewall)</li>
                    <li>le durcissement et la sécurisation des systèmes</li>
                    <li>l’automatisation via Bash & Python</li>
                    <li>le monitoring et les bonnes pratiques DevOps</li>
                </ul>

                <p className="text-gray-300 text-lg leading-relaxed mt-6">
                    Mon parcours, du commerce à l’informatique, montre ma capacité
                    d’adaptation, ma persévérance et ma volonté de trouver ma vraie voie
                    dans l’IT.
                </p>
            </section>
        </div>
    );
}
