import { motion } from "framer-motion";
import { features } from "../data/footerData";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative  text-white overflow-hidden"
    >
      {/* BACKGROUND DECOR */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full blur-3xl" />

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative py-10 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          About <span className="text-indigo-400">Achintyaah</span>
        </h1>
        <p className="mt-4 text-gray-300 text-sm tracking-wide">
          Home / About Us
        </p>
      </motion.div>

      {/* WHO WE ARE */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
      >
        {/* IMAGE */}
        <motion.div variants={fadeUp} className="relative group">
          <motion.img
            src="https://community.thriveglobal.com/wp-content/uploads/2018/08/businesswomen.jpg"
            alt="Team"
            className="rounded-2xl shadow-2xl"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
        </motion.div>

        {/* TEXT */}
        <motion.div variants={fadeUp}>
          <h2 className="text-3xl font-bold mb-6">
            Who <span className="text-indigo-400">We Are</span>
          </h2>
          <p className="text-gray-300 leading-relaxed mb-5">
            <span className="font-semibold text-white">
              ACHINTYAAAH GROUP
            </span>{" "}
            delivers innovative, reliable, and scalable IT solutions across
            healthcare, finance, logistics, retail, and government sectors.
          </p>
          <p className="text-gray-400 leading-relaxed">
            With deep technical expertise and a client-first approach, we help
            businesses achieve long-term growth and digital excellence.
          </p>
        </motion.div>
      </motion.div>

      {/* CORE VALUES */}
      <div className="relative py-28">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl font-bold mb-20"
        >
          Our <span className="text-indigo-400">Core Values</span>
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {features.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative rounded-2xl p-8 text-center
                         bg-white/10 backdrop-blur-xl border border-white/10
                         shadow-xl"
            >
              {/* ICON */}
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-16 h-16 mx-auto mb-6 rounded-full
                           bg-indigo-500/20 flex items-center justify-center"
              >
                <item.icon size={30} className="text-indigo-400" />
              </motion.div>

              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
