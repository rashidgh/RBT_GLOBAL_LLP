import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="relative  text-white px-6 pt-20 pb-10 overflow-hidden">
            {/* Gradient Glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] blur-[140px] rounded-full" />

            <div className="relative max-w-7xl mx-auto grid gap-12 md:grid-cols-4">
                {/* Brand */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold mb-4">
                        ACHINTYAAAH<span className="text-indigo-400">.</span>
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                        Crafting scalable digital solutions with precision,
                        creativity, and performance at the core.
                    </p>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <h4 className="font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-3 text-gray-400">
                        {[
                            { label: "Home", id: "home" },
                            { label: "Services", id: "services" },
                            { label: "About", id: "about" },
                            { label: "Contact", id: "contact" },
                        ].map((item) => (
                            <li
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="cursor-pointer flex items-center gap-2 hover:text-indigo-400 transition"
                            >
                                <ArrowUpRight size={14} />
                                {item.label}
                            </li>
                        ))}
                    </ul>

                </motion.div>

                {/* Services */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h4 className="font-semibold mb-4">What We Do</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li>Web & App Development</li>
                        <li>UI / UX Design</li>
                        <li>Cloud & DevOps</li>
                        <li>Digital Consulting</li>
                    </ul>
                </motion.div>

                {/* Contact */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <h4 className="font-semibold mb-4">Contact</h4>
                    <div className="space-y-3 text-gray-400">
                        <p className="flex items-center gap-2">
                            <Mail size={16} /> hello@achintyaaah.com
                        </p>
                        <p className="flex items-center gap-2">
                            <Phone size={16} /> +91 90000 00000
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-6">
                        {[Linkedin, Mail, Phone].map((Icon, idx) => (
                            <motion.a
                                key={idx}
                                whileHover={{ scale: 1.15, y: -2 }}
                                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-indigo-400 hover:text-indigo-400 transition"
                                href="#"
                            >
                                <Icon size={18} />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Bottom */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="relative mt-16 border-t border-white/10 pt-6 text-center text-xs text-gray-500"
            >
                © 2025 ACHINTYAAAH GROUP. All rights reserved.
            </motion.div>
        </footer>
    );
}
