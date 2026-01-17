import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { features } from "../data/footerData";

export default function AboutUs({ theme }) {
  const isDay = theme !== "night";

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-out",
    });
    AOS.refresh();
  }, []);

  return (
    <section
      id="about"
      className={`relative ${
        isDay
          ? "bg-white text-slate-900"
          : "bg-gradient-to-b from-[#1a1208] via-slate-900 to-black text-white"
      }`}
    >
      {/* BACKGROUND DECOR */}
      {!isDay && (
        <>
          <div className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] bg-amber-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 -left-32 w-[24rem] h-[24rem] bg-orange-500/10 rounded-full blur-[120px]" />
        </>
      )}

      {/* HERO */}
      <div className="relative text-center pt-20">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          About{" "}
          <span className={isDay ? "text-amber-600" : "text-amber-400"}>
            RBT Global LLP
          </span>
        </h1>
        <p
          className={`mt-4 text-sm tracking-wide ${
            isDay ? "text-slate-500" : "text-slate-400"
          }`}
        >
          Home / About Us
        </p>
      </div>

      {/* WHO WE ARE */}
      <div className="relative max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* IMAGE */}
        <div
          data-aos={window.innerWidth >= 768 ? "zoom-in" : "fade-left"}
          className={`relative group rounded-2xl overflow-hidden transition-all duration-300 ${
            isDay
              ? "border border-slate-200 shadow-lg hover:shadow-xl"
              : "border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]"
          }`}
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/007/902/542/non_2x/portrait-of-african-american-female-chef-in-white-cooking-uniform-looking-at-camera-with-cheerful-smile-and-proud-with-tray-of-bread-in-kitchen-pastry-foods-professional-and-fresh-bakery-occupation-photo.jpg"
            alt="Bakery Raw Materials"
            className="rounded-2xl w-full"
          />
          {!isDay && (
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/30 via-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 transition duration-500" />
          )}
        </div>

        {/* TEXT */}
        <div
          data-aos={window.innerWidth >= 768 ? "zoom-in" : "fade-left"}
        >
          <h2 className="text-3xl font-bold mb-6">
            Who{" "}
            <span className={isDay ? "text-amber-600" : "text-amber-400"}>
              We Are
            </span>
          </h2>

          <p
            className={`leading-relaxed mb-5 ${
              isDay ? "text-slate-700" : "text-slate-300"
            }`}
          >
            <span className="font-semibold">RBT GLOBAL LLP</span> is a trusted
            supplier of premium bakery raw materials, serving bakeries,
            manufacturers, and food businesses with consistent quality
            ingredients.
          </p>

          <p
            className={`leading-relaxed ${
              isDay ? "text-slate-600" : "text-slate-400"
            }`}
          >
            From flour and yeast to cocoa and baking improvers, we help our
            partners deliver better taste, texture, and freshness in every bake.
          </p>
        </div>
      </div>

      {/* CORE VALUES */}
      <div className="relative pb-28">
        <h2 className="text-center text-3xl font-bold mb-20">
          Our{" "}
          <span className={isDay ? "text-amber-600" : "text-amber-400"}>
            Core Values
          </span>
        </h2>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((item, index) => (
            <div
              key={item.title}
              data-aos={window.innerWidth >= 768 ? "zoom-in" : "fade-right"}
              data-aos-delay={index * 150}
              className={`rounded-2xl p-8 text-center transition-all cursor-pointer ${
                isDay
                  ? "bg-white border border-slate-200 shadow-md hover:shadow-xl"
                  : "bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl hover:border-amber-400/40"
              }`}
            >
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                  isDay
                    ? "bg-amber-100 text-amber-600"
                    : "bg-amber-500/20"
                }`}
              >
                <item.icon size={30} />
              </div>

              <h3
                className={`text-xl font-semibold mb-4 ${
                  isDay ? "text-slate-800" : "text-white"
                }`}
              >
                {item.title}
              </h3>

              <p
                className={`text-sm leading-relaxed ${
                  isDay ? "text-slate-600" : "text-slate-300"
                }`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
