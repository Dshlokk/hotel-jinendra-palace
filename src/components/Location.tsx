"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function Location() {
  return (
    <section className="relative z-20 bg-pale-pink text-charcoal py-24 md:py-32 px-6 md:px-12 border-t border-burgundy/10">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-center relative perspective-[1200px]">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full md:w-[70%] h-[50vh] md:h-[70vh] relative overflow-hidden group shadow-md border border-dusty-rose/30"
        >
          <div className="w-full h-full transform transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]">
            <Image
              src="/images/hotel/image_6.jpg"
              alt="Jaipur Architecture"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-pink-city/10 mix-blend-multiply pointer-events-none" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, zIndex: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-[90%] md:w-[40%] bg-ivory p-8 md:p-12 shadow-[0_20px_50px_rgba(91,31,42,0.1)] relative z-10 -mt-16 md:mt-0 md:absolute md:left-12 md:bottom-24 transform transition-transform duration-700 hover:-translate-y-2 border border-dusty-rose/50"
        >
          <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-8 text-burgundy">
            YOUR JAIPUR BASE.
          </h2>
          
          <div className="text-base font-light mb-8 leading-relaxed text-charcoal/90">
            <p>9 STATION ROAD</p>
            <p>OPP. POLOVICTORY</p>
            <p>SINDHI CAMP</p>
            <p>JAIPUR, RAJASTHAN 302006</p>
          </div>

          <div className="flex flex-col gap-4 border-t border-burgundy/10 pt-6">
            <div className="flex justify-between text-sm">
              <span className="font-display uppercase tracking-widest text-xs text-jaipur-rose">Railway</span>
              <span className="font-light">1.5 km to Station</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="font-display uppercase tracking-widest text-xs text-jaipur-rose">Metro</span>
              <span className="font-light">Sindhi Camp (Walkable)</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
