import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import AOS from "aos";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // ✅ Import navigation styles
import AnimatedText from "./AnimatedText";
import { useEffect } from "react";
import { slides } from "@/data/heroSlides";




export default function HeroCarousel() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-out",
    });
    AOS.refresh();
  }, []);
  return (
    <div className="pt-16 w-full" id="home" data-aos="zoom-in">
      <div className="relative overflow-hidden h-[50vh] sm:h-[60vh] md:h-[80vh]">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]} // ✅ Add Navigation module
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation // ✅ Enable arrows
          loop
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative h-full w-full bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

                {/* Animated Content */}
                <motion.div
                  key={slide.title}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="relative z-10 mx-auto px-4 sm:px-6 md:px-8 text-center w-full max-w-full sm:max-w-xl md:max-w-3xl break-words"
                >
                  <AnimatedText
                    key={slide.title}
                    text={slide.title}
                    className="block text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-4"
                  />

                  <AnimatedText
                    key={slide.desc}
                    text={slide.desc}
                    className="block text-base sm:text-lg md:text-xl text-gray-200 mb-6"
                  />
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
