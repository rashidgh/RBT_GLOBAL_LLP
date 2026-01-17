import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Footer({ theme }) {
  const isNight = theme === "night";

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className={`
        relative px-6 pt-20 pb-10 overflow-hidden transition-colors duration-500
        ${isNight ? "bg-[#0B0F1A] text-white" : "bg-gray-50 text-gray-800"}
      `}
    >
      {/* Top Divider */}
      <div
        className={`
          absolute inset-x-0 top-0 h-px transition-colors duration-500
          ${isNight
            ? "bg-gradient-to-r from-transparent via-orange-400/50 to-transparent"
            : "bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"}
        `}
      />

      {/* Glow for Night */}
      {isNight && (
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full blur-[140px] bg-orange-500/20" />
      )}

      <div className="relative max-w-7xl mx-auto grid gap-12 md:grid-cols-4">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className={`text-2xl font-bold mb-4 ${isNight ? "text-white" : "text-gray-900"}`}>
            RBT Global
            <span className={isNight ? "text-orange-400" : "text-orange-500"}>
              {" "}LLP
            </span>
          </h3>
          <p className={`${isNight ? "text-gray-300" : "text-gray-600"} leading-relaxed`}>
            Supplying premium bakery raw materials including flours, improvers,
            chocolate compounds, dairy blends, and baking essentials for
            professionals.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h4 className={`font-semibold mb-4 ${isNight ? "text-white" : "text-gray-900"}`}>
            Quick Links
          </h4>
          <ul className="space-y-3">
            {[
              { label: "Home", id: "home" },
              { label: "Raw Materials", id: "raw-materials" },
              { label: "About Us", id: "about" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`cursor-pointer flex items-center gap-2 transition-colors duration-300 ${
                  isNight
                    ? "text-gray-300 hover:text-orange-400"
                    : "text-gray-600 hover:text-orange-500"
                }`}
              >
                <ArrowUpRight size={14} />
                {item.label}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Products */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className={`font-semibold mb-4 ${isNight ? "text-white" : "text-gray-900"}`}>
            Our Products
          </h4>
          <ul className={isNight ? "space-y-3 text-gray-300" : "space-y-3 text-gray-600"}>
            <li>Bread & Cake Premixes</li>
            <li>Bakery Fats & Improvers</li>
            <li>Chocolate & Fillings</li>
            <li>Dairy & Toppings</li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className={`font-semibold mb-4 ${isNight ? "text-white" : "text-gray-900"}`}>
            Contact
          </h4>
          <div className={isNight ? "space-y-3 text-gray-300" : "space-y-3 text-gray-600"}>
            <p className="flex items-center gap-2">
              <Mail size={16} /> sales@rbtgloballlp.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} /> +91 9XXXXXXXXX
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[Linkedin, Mail, Phone].map((Icon, idx) => (
              <motion.a
                key={idx}
                whileHover={{ scale: 1.15, y: -2 }}
                href="#"
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-300
                  ${isNight
                    ? "border-white/10 text-gray-300 hover:border-orange-400 hover:text-orange-400"
                    : "border-gray-300 text-gray-600 hover:border-orange-500 hover:text-orange-500"}
                `}
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
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className={`relative mt-16 pt-6 text-center text-xs border-t transition-colors duration-300 ${
          isNight ? "border-white/10 text-gray-400" : "border-gray-200 text-gray-500"
        }`}
      >
        © 2025 RBT Global LLP. All rights reserved.
      </motion.div>
    </footer>
  );
}
