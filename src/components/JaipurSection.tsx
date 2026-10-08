"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

export function JaipurSection() {
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="jaipur" ref={ref} className="relative z-10 bg-pink-city text-ivory py-24 md:py-32 overflow-hidden perspective-[1000px] border-t border-burgundy/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-20">
        <motion.h2 
          style={{ y: textY }}
          className="font-display text-6xl md:text-8xl lg:text-[10rem] tracking-tighter mb-16 text-center text-balance drop-shadow-2xl"
        >
          JAIPUR <br className="hidden md:block" /> IS WAITING.
        </motion.h2>
      </div>

      <div className="w-full h-[60vh] md:h-[80vh] relative mb-24 md:mb-32 overflow-hidden shadow-2xl">
        <motion.div style={{ x: bgX }} className="absolute inset-0 w-[115%] h-full -left-[5%]">
          <Image
            src="/images/hotel/jaipur_waiting.png"
            alt="Amer Fort Jaipur"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-burgundy/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-city via-transparent to-pink-city/50" />
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

        {/* Jaipur Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full mt-12 md:mt-24">
          {[
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
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[3/4] w-full overflow-hidden shadow-lg border border-burgundy/10 group rounded-sm"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-burgundy/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
