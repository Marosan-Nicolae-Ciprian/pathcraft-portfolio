export default function Footer() {
    return (
        <footer className="bg-gray-950 border-t border-gray-800 py-4 mt-10">
            <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
                <p>© {new Date().getFullYear()} PathCraft — Nicolae Ciprian Marosan</p>
                <p className="mt-1">
                    Contact :{" "}
                    <a
                        href="mailto:marosa_a@etna-alternance.net"
                        className="text-emerald-400 hover:underline"
                    >
                        marosa_a@etna-alternance.net
                    </a>
                </p>
            </div>
        </footer>
    );
}
