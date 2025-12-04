import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();

    const linkClass = (path: string) =>
        `hover:text-emerald-400 transition ${location.pathname === path ? "text-emerald-400 font-semibold" : "text-white"
        }`;

    return (
        <nav className="bg-gray-950/90 border-b border-gray-800 sticky top-0 z-50 backdrop-blur">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link
                    to="/"
                    className="text-2xl font-extrabold tracking-wide text-emerald-400"
                >
                    PathCraft
                </Link>

                <div className="flex gap-6 text-lg">
                    <Link to="/" className={linkClass("/")}>
                        Accueil
                    </Link>
                    <Link to="/about" className={linkClass("/about")}>
                        À propos
                    </Link>
                    <Link to="/parcours" className={linkClass("/parcours")}>
                        Parcours
                    </Link>
                    <Link to="/projects" className={linkClass("/projects")}>
                        Projets
                    </Link>
                    <Link to="/contact" className={linkClass("/contact")}>
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
