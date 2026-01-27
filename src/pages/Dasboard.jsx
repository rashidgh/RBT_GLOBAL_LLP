import { Navbar, HeroCarousel, ContactUs, AboutUs, ScrollToTop, OurProducts, RawMaterials } from "@/components";
import useTheme from "@/hooks/useTheme";


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
