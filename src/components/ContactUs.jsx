import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import Footer from "./Footer";
import { FaWhatsapp } from "react-icons/fa";

/* Bakery / Raw Materials Contacts */
const contacts = [
  {
    name: "MD Danish",
    role: "Cheif Executive Officer",
    email: "danishpatna8084@gmail.com",
    phone: "+91 8084532942",
    whatsapp: "918084532942",
  },
  {
    name: "Ejazul Haque",
    role: "Cheif Operating Officer",
    email: "ejeaz@gmail.com",
    phone: "+91 8825397779",
    whatsapp: "8825397779",
  },
];


export default function ContactUs({ theme }) {
  const isNight = theme === "night";

  return (
    <section
      id="contact"
      className={`
        relative min-h-screen px-6 
        ${isNight
          ? "bg-gradient-to-b from-[#1a1208] via-slate-900 to-black text-white"
          : "bg-white"
        }
      `}
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-20 text-center"
      >
        Get in{" "}
        <span className={isNight ? "text-amber-400" : "text-amber-600"}>
          Touch
        </span>
      </motion.h2>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT – CONTACT PERSONS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
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
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`
                group relative flex items-center justify-between gap-6 rounded-xl p-6 transition-all
                ${isNight
                  ? "bg-white/5 backdrop-blur-md border border-white/10 hover:border-amber-400/50 shadow-lg"
                  : "bg-white border border-slate-200 hover:border-amber-500 shadow-md hover:shadow-xl"
                }
              `}
            >
              {/* LEFT INFO */}
              <div>
                <h3 className="text-xl font-semibold">
                  {person.name}
                </h3>

                <p
                  className={`text-sm mb-3 ${isNight ? "text-amber-400" : "text-amber-600"
                    }`}
                >
                  {person.role}
                </p>

                <div
                  className={`flex flex-col gap-2 text-sm ${isNight ? "text-slate-300" : "text-slate-600"
                    }`}
                >
                  <a
                    href={`mailto:${person.email}`}
                    className="flex items-center gap-2 hover:underline"
                  >
                    <Mail size={16} /> {person.email}
                  </a>

                  <span className="flex items-center gap-2">
                    <Phone size={16} /> {person.phone}
                  </span>
                </div>
              </div>

              {/* RIGHT ICON */}
              <a
                href={`https://wa.me/${person.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`
    w-12 h-12 rounded-full flex items-center justify-center transition
    ${isNight
                    ? "border border-slate-700 text-green-400 hover:border-green-400 hover:bg-green-400/10"
                    : "border border-slate-300 text-green-600 hover:border-green-500 hover:bg-green-100"}
  `}
              >
                <FaWhatsapp size={22} />
              </a>


            </motion.div>
          ))}
        </motion.div>

        {/* RIGHT – BUSINESS INFO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative hidden lg:block"
        >
          {isNight && (
            <div className="absolute inset-0 bg-amber-500/20 blur-[120px] rounded-full" />
          )}

          <div className="relative flex flex-col gap-6">
            {[
              {
                title: "Bulk Orders & Supply",
                text:
                  "Looking for reliable bakery raw material suppliers? We support bulk orders with consistent quality and timely delivery.",
              },
              {
                title: "Partner With Us",
                text:
                  "Whether you are a bakery, distributor, or food manufacturer, we’d love to explore long-term partnerships.",
              }
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                className={`
                  rounded-2xl p-8 transition-all
                  ${isNight
                    ? "bg-white/5 backdrop-blur border border-white/10 shadow-xl"
                    : "bg-white border border-slate-200 shadow-md hover:shadow-lg"
                  }
                `}
              >
                <p className="text-2xl font-semibold mb-4">
                  {item.title}
                </p>
                <p
                  className={`leading-relaxed ${isNight ? "text-slate-300" : "text-slate-600"
                    }`}
                >
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* FOOTER */}
      <div className="mt-36">
        <Footer theme={theme} />
      </div>
    </section>
  );
}
