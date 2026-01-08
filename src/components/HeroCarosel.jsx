import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // ✅ Import navigation styles
import AnimatedText from "./AnimatedText";

const slides = [
  {
    title: "IT Solutions for Modern Businessss",
    desc: "We build scalable, secure and high-performance digital products.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    title: "Web & Mobile App Development",
    desc: "Custom applications tailored to your business needs.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    title: "Cloud & Enterprise Services",
    desc: "Transform your infrastructure with cloud-ready solutions.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
  },
];

export default function HeroCarousel() {
  return (
    <div className="pt-16 w-full" id="home">
      <div className="relative overflow-hidden h-[50vh] sm:h-[60vh] md:h-[70vh]">
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
