import { motion } from "framer-motion";
import ClientLogo from "./ClientLogo";
import { products } from "../data/client";

export default function OurProducts({ theme }) {
  const isNight = theme === "night";

  return (
    <section className="py-24 overflow-hidden mt-[-24px]" id="products">

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2
          className={`text-4xl font-bold ${isNight ? "text-white" : "text-gray-900"
            }`}
        >
          Our{" "}
          <span className={isNight ? "text-amber-400" : "text-amber-600"}>
            Products
          </span>
        </h2>

        <p
          className={`mt-3 text-sm sm:text-base ${isNight ? "text-gray-300" : "text-gray-600"
            }`}
        >
          Premium quality bakery raw materials for professional baking
        </p>
      </motion.div>

      {/* Infinite Slider */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-16 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...products, ...products].map((product, index) => (
            <ClientLogo
              key={index}
              src="https://bizimages.withfloats.com/actual/8a9475a8d9aa4cb0ad217afe3ee38bee.jpg"
              alt={product.name}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
