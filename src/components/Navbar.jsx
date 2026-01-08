import React,{  useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { GlobalProvider } from "../api/ContextApi";

const navItems = [
  { label: "Home", hash: "#home" },
  { label: "Services", hash: "#services" },
  { label: "About", hash: "#about" },
  { label: "Contact", hash: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const {isNightMode,setIsNightMode} = React.useContext(GlobalProvider);
  console.log(isNightMode)
  const handleClick = (hash) => {
    setActive(hash);
    setOpen(false);

    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/90 backdrop-blur text-white">
      <div className="max-w-7xl mx-auto px-2 h-16 flex items-center justify-between">

        {/* Logo */}
        <div
          onClick={() => {
            setActive("#home");
            document.querySelector("#home")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="flex items-center gap-2 text-lg font-bold cursor-pointer"
        >
          <img className="rounded-full" src="/logo.jpeg" alt="Logo" width={36} height={36} />
          ACHINTYAAAH <span className="text-indigo-400">GROUP</span>
        </div>




        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.hash}
              onClick={() => handleClick(item.hash)}
              className={`relative cursor-pointer text-sm font-medium transition
                ${active === item.hash ? "text-indigo-400" : "text-white"}
              `}
            >
              {item.label}

              {active === item.hash && (
                <motion.span
                  layoutId="activeLink"
                  className="absolute left-0 -bottom-1 w-full h-[2px] bg-indigo-400"
                />
              )}
            </button>
          ))}
          {/* <div className="cursor-pointer" onClick={() => setIsNightMode(!isNightMode)}>
            <span>{isNightMode ? <Sun /> : <Moon/>}</span>
          </div> */}
        </div>

        {/* Mobile Icon */}
        <button className="md:hidden" onClick={() => setOpen(true)}>
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed top-0 right-0 h-screen w-4/5 bg-slate-950 p-6"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex justify-end mb-8">
              <X size={28} onClick={() => setOpen(false)} />
            </div>

            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.hash}
                  onClick={() => handleClick(item.hash)}
                  className={`text-lg text-left font-medium
                    ${active === item.hash ? "text-indigo-400" : "text-white"}
                  `}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
