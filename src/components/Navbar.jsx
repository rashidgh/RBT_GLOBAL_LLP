import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";

const navItems = [
  { label: "Home", hash: "#home" },
  { label: "Products", hash: "#products" },
  { label: "Raw Materials", hash: "#raw-materials" },
  // { label: "Bulk Supply", hash: "#bulk-supply" },
  { label: "About Us", hash: "#about" },
  { label: "Contact", hash: "#contact" },
];

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const isNight = theme === "night";

  const handleClick = (hash) => {
    setActive(hash);
    setOpen(false);
    document.querySelector(hash)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const toggleTheme = () => {
    setTheme(isNight ? "day" : "night");
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <nav
      className={`
        fixed top-0 left-0 z-50 w-full transition-colors duration-300
        ${isNight
          ? "bg-[#1a1208]/90 text-white backdrop-blur-lg"
          : "bg-white/90 text-gray-800 backdrop-blur-md shadow-md"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <div
          onClick={() => handleClick("#home")}
          className="flex items-center gap-3 cursor-pointer min-w-0"
        >
          <img
            src="/public/logo.png"
            alt="RBT Global LLP"
            className="w-14 h-14 rounded-full flex-shrink-0"
          />

          <span
            className={`
      font-bold tracking-wide leading-tight
      text-sm sm:text-base md:text-lg
      truncate whitespace-nowrap
      ${isNight ? "text-white" : "text-gray-900"}
    `}
          >
            RBT
            <span className={isNight ? "text-amber-400" : "text-amber-600"}>
              -GLOBAL-LLP
            </span>
          </span>
        </div>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.hash}
              onClick={() => handleClick(item.hash)}
              className={`
                relative text-sm font-medium transition cursor-pointer
                ${active === item.hash
                  ? isNight
                    ? "text-amber-400"
                    : "text-amber-600"
                  : isNight
                    ? "text-white hover:text-amber-300"
                    : "text-gray-800 hover:text-amber-500"}
              `}
            >
              {item.label}
              {active === item.hash && (
                <motion.span
                  layoutId="activeLink"
                  className={`
                    absolute left-0 -bottom-1 w-full h-[2px]
                    ${isNight ? "bg-amber-400" : "bg-amber-500"}
                  `}
                />
              )}
            </button>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`
              ml-4 p-2 rounded-full transition
              ${isNight
                ? "bg-white/10 hover:bg-white/20"
                : "bg-gray-100 hover:bg-gray-200"}
            `}
          >
            {isNight ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`
            md:hidden p-2 rounded-full transition
            ${isNight
              ? "bg-white/10 hover:bg-white/20"
              : "bg-gray-100 hover:bg-gray-200"}
          `}
          onClick={() => setOpen(true)}
        >
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "110%" }}
              animate={{ x: 0 }}
              exit={{ x: "110%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className={`
                fixed top-0 right-0 h-screen w-screen z-50
                ${isNight ? "bg-[#1a1208] text-white" : "bg-white text-gray-800"}
              `}
            >
              <div className="h-full flex flex-col p-6 overflow-y-auto">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <button
                    onClick={toggleTheme}
                    className={`p-2 rounded-full ${isNight
                        ? "bg-white/10 hover:bg-white/20"
                        : "bg-gray-100 hover:bg-gray-200"
                      }`}
                  >
                    {isNight ? <Sun size={18} /> : <Moon size={18} />}
                  </button>

                  <button
                    onClick={() => setOpen(false)}
                    className={`p-2 rounded-full ${isNight
                        ? "bg-white/10 hover:bg-white/20"
                        : "bg-gray-100 hover:bg-gray-200"
                      }`}
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Menu Items */}
                <div className="flex flex-col divide-y">
                  {navItems.map((item) => (
                    <button
                      key={item.hash}
                      onClick={() => handleClick(item.hash)}
                      className={`
                        py-4 px-3 text-left text-lg rounded-xl transition
                        ${active === item.hash
                          ? isNight
                            ? "text-amber-400 bg-white/5"
                            : "text-amber-600 bg-gray-100"
                          : isNight
                            ? "hover:bg-white/10"
                            : "hover:bg-gray-200"}
                      `}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
