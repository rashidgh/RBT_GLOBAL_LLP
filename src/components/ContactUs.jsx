import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";
import Footer from "./Footer";

const contacts = [
    {
        name: "Sourav S",
        role: "Business Head",
        email: "sourav@achintyaaah.com",
        phone: "+91 9148094352",
        linkedin: "#",
    },
    {
        name: "Karthik S",
        role: "Technical Lead",
        email: "karthik@achintyaaah.com",
        phone: "+91 9886493060",
        linkedin: "#",
    },
];

export default function ContactUs() {
    return (
        <section
            id="contact"
            className="relative min-h-screen  text-white px-6 py-24 overflow-hidden"
        >
            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-20"
            >
                Let’s <span className="text-indigo-400">Connect</span>
            </motion.h2>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                {/* LEFT – CONTACT CARDS */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.2 },
                        },
                    }}
                    className="space-y-8"
                >
                    {contacts.map((person) => (
                        <motion.div
                            key={person.name}
                            variants={{
                                hidden: { opacity: 0, x: -40 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            whileHover={{ scale: 1.03 }}
                            className="group relative flex items-center justify-between gap-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-indigo-400 transition"
                        >
                            {/* Left Info */}
                            <div>
                                <h3 className="text-xl font-semibold">
                                    {person.name}
                                </h3>
                                <p className="text-sm text-indigo-400 mb-3">
                                    {person.role}
                                </p>

                                <div className="flex flex-col gap-2 text-sm text-gray-300">
                                    <span className="flex items-center gap-2">
                                        <Mail size={16} /> {person.email}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Phone size={16} /> {person.phone}
                                    </span>
                                </div>
                            </div>

                            {/* Right Icon */}
                            <a
                                href={person.linkedin}
                                className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-indigo-400 group-hover:text-indigo-400 transition"
                            >
                                <Linkedin size={20} />
                            </a>
                        </motion.div>
                    ))}
                </motion.div>

                {/* RIGHT – DECORATIVE ANIMATION */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative hidden lg:block"
                >
                    <div className="absolute inset-0 bg-indigo-500/20 blur-[120px] rounded-full" />
                    <div className="flex flex-col gap-4">
                        <div className="relative border border-white/10 rounded-2xl p-8 backdrop-blur bg-white/5">
                        <p className="text-2xl font-semibold mb-4">
                            We’d love to hear from you
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            Whether you’re looking to build a product, scale your
                            business, or just want to say hello — our team is ready.
                        </p>
                    </div>
                    <div className="relative border border-white/10 rounded-2xl p-8 backdrop-blur bg-white/5">
                        <p className="text-2xl font-semibold mb-4">
                            Start a Conversation
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            Reach out to discuss your business goals, technical challenges,
                            or partnership opportunities. Our team is here to help you move forward.
                        </p>

                    </div>
                    </div>
                </motion.div>
            </div>

           <div className="mt-36">
            <Footer />
           </div>
        </section>
    );
}
