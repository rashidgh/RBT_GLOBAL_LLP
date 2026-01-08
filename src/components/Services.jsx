import { motion } from "framer-motion";
import {
  Code,
  Layout,
  Server,
  Monitor,
  Smartphone,
  Settings,
} from "lucide-react";

import ServiceCard from "./ServiceCard";
import { services } from "../data/service";



export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-6 text-white"
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
          Our <span className="text-indigo-400">Services</span>
        </h2>
        <p className="text-gray-400">
          We work small but think big, delivering scalable, secure and innovative
          digital solutions.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            {...service}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
