"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function Intro() {
  return (
    <section className="relative z-20 bg-ivory text-charcoal py-24 md:py-32 px-6 md:px-12 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] rounded-t-3xl md:rounded-t-[3rem] -mt-12 md:-mt-20 border-t border-charcoal/5">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Large Statement */}
        <div className="md:col-span-7">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-balance"
          >
            A PLACE TO PAUSE <br className="hidden lg:block" />
            BETWEEN THE <br className="hidden lg:block" />
            JOURNEY AND <br className="hidden lg:block" />
            THE CITY.
          </motion.h2>
        </div>

        {/* Small Paragraph & Image */}
        <div className="md:col-span-4 md:col-start-9 flex flex-col gap-12">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl font-light leading-relaxed"
          >
            Hotel Jinendra Palace offers a comfortable base for discovering Jaipur, with the city's streets, heritage and landmarks within easy reach.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-64 md:h-96 w-full overflow-hidden shadow-lg group perspective-[1000px]"
          >
            <div className="w-full h-full transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-x-[2deg] group-hover:rotate-y-[-2deg] group-hover:scale-105">
              <Image
                src="/images/hotel/image_11.jpg"
                alt="Jaipur architectural detail"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
