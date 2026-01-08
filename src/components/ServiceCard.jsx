import { motion } from "framer-motion";

export default function ServiceCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -10 }}
      className="group relative cursor-pointer"
    >
      {/* OUTER GLOW */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-500/30 to-indigo-500/30 opacity-0 group-hover:opacity-100 blur-xl transition duration-300"></div>

      {/* CARD */}
      <div className="relative z-10 h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md overflow-hidden transition-all duration-300 group-hover:border-indigo-400/40 group-hover:shadow-xl group-hover:shadow-indigo-500/20">

        {/* HOVER GRADIENT OVERLAY */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition duration-300" />

        {/* CONTENT */}
        <div className="relative z-10">
          {/* ICON */}
          <motion.div
            whileHover={{ rotate: 6, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-14 h-14 mb-4 rounded-full bg-gradient-to-br from-indigo-400 to-sky-400 flex items-center justify-center"
          >
            <Icon size={26} className="text-black" />
          </motion.div>

          {/* TITLE */}
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-300 transition">
            {title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-200 transition">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
