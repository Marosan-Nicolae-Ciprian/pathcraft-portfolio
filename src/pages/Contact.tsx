import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"success" | "error" | "">("");

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();

        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
        };

        try {
            await emailjs.send(
                "service_lwjis0g",
                "template_5ci09ez",
                templateParams,
                "PytpetVwVL-KbrBRz"
            );

            setStatus("success");
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus("error");
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white py-16 px-6 flex justify-center section-animate">
            <div className="max-w-3xl w-full">
                <h1 className="text-4xl font-bold text-emerald-400 text-center mb-4">
                    Contactez-moi 📩
                </h1>

                <p className="text-center text-gray-300 mb-10">
                    Une opportunité, une question, un projet ? Envoyez-moi un message.
                </p>

                <form onSubmit={sendEmail} className="space-y-6 bg-gray-800 p-8 rounded-xl shadow">
                    <div>
                        <label className="block mb-2 text-lg">Nom</label>
                        <input
                            type="text"
                            className="w-full p-3 rounded-md bg-gray-900 border border-gray-700"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-lg">Email</label>
                        <input
                            type="email"
                            className="w-full p-3 rounded-md bg-gray-900 border border-gray-700"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-lg">Sujet</label>
                        <input
                            type="text"
                            className="w-full p-3 rounded-md bg-gray-900 border border-gray-700"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-lg">Message</label>
                        <textarea
                            className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 h-40 resize-none"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 transition text-white py-3 rounded-md text-lg font-semibold"
                    >
                        Envoyer ✉️
                    </button>
                </form>

                {status === "success" && (
                    <p className="text-green-400 text-center mt-6">
                        ✔️ Votre message a été envoyé !
                    </p>
                )}

                {status === "error" && (
                    <p className="text-red-400 text-center mt-6">
                        ❌ Une erreur est survenue, réessayez plus tard.
                    </p>
                )}
            </div>
        </div>
    );
}
