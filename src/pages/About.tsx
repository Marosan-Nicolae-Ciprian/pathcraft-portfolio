import profilePic from "../assets/profile.jpg";
import cvFile from "../assets/cv.pdf";

export default function About() {
    return (
        <section className="py-16 px-6 md:px-10 max-w-5xl mx-auto text-center section-animate">
            <img
                src={profilePic}
                alt="Profil"
                className="w-40 h-40 rounded-full mx-auto border-4 border-emerald-400 shadow-lg object-cover"
            />

            <h1 className="text-4xl font-bold mt-6 text-blue-400">À propos de moi</h1>

            <p className="mt-4 text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Je m'appelle <strong>Nicolae Ciprian Marosan</strong>, étudiant en{" "}
                <strong>Systèmes, Réseaux & Sécurité</strong> à l’ETNA depuis 2025.
                Passionné par l’infrastructure, l’automatisation, Linux et la
                cybersécurité.
            </p>

            <div className="mt-6">
                <a
                    href={cvFile}
                    download="CV_Nicolae_Ciprian_Marosan.pdf"
                    className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-lg font-semibold text-white shadow-lg"
                >
                    📄 Télécharger mon CV
                </a>
            </div>

            <h2 className="text-3xl font-semibold mt-12 text-white">Compétences</h2>

            <div className="flex flex-wrap justify-center gap-4 mt-6">
                <span className="badge-skill bg-emerald-600">Linux</span>
                <span className="badge-skill bg-blue-600">Windows Server</span>
                <span className="badge-skill bg-purple-600">Shell / Bash</span>
                <span className="badge-skill bg-yellow-500 text-gray-900">Réseaux</span>
                <span className="badge-skill bg-red-600">Sécurité</span>
                <span className="badge-skill bg-gray-700">Virtualisation</span>
            </div>
        </section>
    );
}
