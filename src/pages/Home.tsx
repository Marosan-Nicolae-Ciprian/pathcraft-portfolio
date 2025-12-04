import profilePic from "../assets/profile.jpg";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="px-6 md:px-16 lg:px-24 py-16 max-w-6xl mx-auto space-y-20">

            {/* HERO */}
            <section className="text-center section-animate">
                <img
                    src={profilePic}
                    alt="Nicolae Ciprian"
                    className="w-40 h-40 mx-auto rounded-full border-4 border-emerald-500 shadow-xl object-cover"
                />

                <h1 className="text-4xl md:text-5xl font-extrabold mt-6">
                    Bonjour, je suis{" "}
                    <span className="text-emerald-400">Nicolae Ciprian Marosan</span>
                </h1>

                <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
                    Alternant en Systèmes, Réseaux & Sécurité, passionné par Linux,
                    réseaux, cybersécurité et automatisation.
                </p>

                <div className="flex justify-center gap-4 mt-8 flex-wrap">
                    <Link
                        to="/projects"
                        className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-lg font-semibold"
                    >
                        Voir mes projets
                    </Link>
                    <Link
                        to="/contact"
                        className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold"
                    >
                        Me contacter
                    </Link>
                </div>
            </section>

            {/* CE QUE JE FAIS */}
            <section className="section-animate">
                <h2 className="text-3xl font-bold mb-6 text-center">Ce que je fais</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gray-800 p-6 rounded-xl shadow card-animate">
                        <h3 className="text-xl font-bold text-emerald-400 mb-3">
                            Administration Systèmes
                        </h3>
                        <p className="text-gray-300">
                            Environnements Linux & Windows, gestion serveurs, services, SSH,
                            permissions, maintenance.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-xl shadow card-animate">
                        <h3 className="text-xl font-bold text-blue-400 mb-3">
                            Réseaux & Sécurité
                        </h3>
                        <p className="text-gray-300">
                            VLAN, routage, firewall, DNS, durcissement Linux, surveillance et
                            analyse de logs.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-xl shadow card-animate">
                        <h3 className="text-xl font-bold text-purple-400 mb-3">
                            Scripts & Automatisation
                        </h3>
                        <p className="text-gray-300">
                            Bash & Python pour automatiser des tâches, gérer des utilisateurs,
                            analyser des logs, déployer des configs.
                        </p>
                    </div>
                </div>
            </section>

            {/* COMPÉTENCES */}
            <section className="section-animate">
                <h2 className="text-3xl font-bold mb-6 text-center">
                    Compétences techniques principales
                </h2>

                <div className="flex flex-wrap justify-center gap-3">
                    <span className="badge-skill bg-emerald-600">Linux</span>
                    <span className="badge-skill bg-blue-600">Windows Server</span>
                    <span className="badge-skill bg-purple-600">Bash / Shell</span>
                    <span className="badge-skill bg-yellow-500 text-gray-900">
                        Réseaux
                    </span>
                    <span className="badge-skill bg-red-600">Sécurité</span>
                    <span className="badge-skill bg-cyan-600">Python</span>
                    <span className="badge-skill bg-gray-700">Git / GitHub</span>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="text-center section-animate">
                <h2 className="text-3xl font-bold mb-4">
                    Prêt à travailler ensemble ?
                </h2>
                <p className="text-gray-300 mb-6">
                    Je suis à la recherche d’opportunités en alternance ou en poste
                    orienté systèmes, réseaux et sécurité.
                </p>
                <Link
                    to="/contact"
                    className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-lg text-lg font-bold"
                >
                    Me contacter
                </Link>
            </section>
        </div>
    );
}
