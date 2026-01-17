import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { rawMaterials } from "../data/service";

export default function RawMaterials({ theme }) {
  return (
    <section
      id="raw-materials"
      className={`pb-24 px-6 ${
        theme === "night" ? "text-white" : "text-black"
      }`}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-20"
      >
        <h2 className="text-4xl font-bold mb-4">
          Our{" "}
          <span className="text-amber-400">
            Raw Materials
          </span>
        </h2>

        <p
          className={`${
            theme === "night" ? "text-gray-400" : "text-slate-600"
          }`}
        >
          Premium quality bakery raw materials sourced for consistency,
          freshness, and professional baking results.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        {rawMaterials.map((item, index) => (
          <ServiceCard
            key={item.title}
            {...item}
            index={index}
            theme={theme}
          />
        ))}
      </div>
    </section>
  );
}
