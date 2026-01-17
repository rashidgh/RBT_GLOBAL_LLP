import React from "react";
import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarosel";
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs";
import ScrollToTop from "../components/ScrollToTop";
import useTheme from "../hooks/useTheme";
import OurProducts from "../components/OurProducts";
import RawMaterials from "../components/RawMaterial";

const Dashboard = () => {
  const [theme, setTheme] = useTheme(); // ✅ SINGLE SOURCE

  return (
    <div
      className={`min-h-screen w-full overflow-x-hidden transition-colors duration-300 ${theme === "night"
          ? "bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white"
          : "bg-white text-black"
        }`}
    >
      <Navbar theme={theme} setTheme={setTheme} />

      <HeroCarousel />
      <OurProducts theme={theme} />
      <RawMaterials theme={theme} />
      <AboutUs theme={theme} />
      <ContactUs theme={theme} />
      <ScrollToTop />
    </div>
  );
};

export default Dashboard;
