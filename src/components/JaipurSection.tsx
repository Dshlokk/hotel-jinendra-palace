"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export function JaipurSection() {
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/31836726/pexels-photo-31836726.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Historical architecture at sunset in Jaipur"
    },
    {
      src: "https://images.pexels.com/photos/2764364/pexels-photo-2764364.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Amer Fort details"
    },
    {
      src: "https://images.pexels.com/photos/12323903/pexels-photo-12323903.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Hawa Mahal Courtyard"
    },
    {
      src: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Jaipur Streets"
    }
  ];

  return (
    <section id="jaipur" ref={ref} className="relative z-10 bg-pink-city text-ivory py-24 md:py-32 overflow-hidden perspective-[1000px] border-t border-burgundy/10">
      
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-overlay"
        style={{ backgroundImage: "url('/images/hotel/pink_city_bg.jpg')" }}
      />
      <div className="absolute inset-0 z-0 bg-pink-city/70" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-20">
        <motion.h2 
          style={{ y: textY }}
          className="font-display text-6xl md:text-8xl lg:text-[10rem] tracking-tighter mb-16 text-center text-balance drop-shadow-2xl"
        >
          JAIPUR <br className="hidden md:block" /> IS WAITING.
        </motion.h2>
      </div>

      <div className="w-full h-[60vh] md:h-[80vh] relative mb-24 md:mb-32 overflow-hidden shadow-2xl z-20">
        <motion.div style={{ x: bgX }} className="absolute inset-0 w-[115%] h-full -left-[5%]">
          <Image
            src="/images/hotel/jaipur_waiting.png"
            alt="Amer Fort Jaipur"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-burgundy/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-city/80 via-transparent to-pink-city/50" />
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-16">
          <div className="md:col-span-6 lg:col-span-5">
            <h3 className="font-display text-4xl md:text-5xl tracking-wide mb-6 text-burgundy drop-shadow-sm">
              THE PINK CITY
            </h3>
            <p className="text-lg md:text-xl font-light text-ivory/90 text-balance leading-relaxed">
              From the pink facades of the old city to palace courtyards, bustling bazaars and quiet evenings around Jal Mahal, Jaipur rewards curiosity.
            </p>
          </div>
        </div>

        {/* Jaipur Gallery - Coverflow Carousel */}
        <div className="w-full mt-8 md:mt-16 pb-8 overflow-visible">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            mousewheel={{ forceToAxis: true }}
            keyboard={{ enabled: true }}
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay, Mousewheel, Keyboard]}
            className="w-full py-4 md:py-8"
          >
            {galleryImages.map((img, i) => (
              <SwiperSlide key={i} className="w-[45vw] sm:w-[200px] md:w-[220px] lg:w-[260px] aspect-[4/5] mx-auto">
                <div className="w-full h-full relative overflow-hidden shadow-xl border border-ivory/20 rounded-md">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
