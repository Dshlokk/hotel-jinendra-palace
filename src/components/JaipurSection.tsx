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
            src="https://images.openai.com/static-rsc-4/H9VV7e1fcJlMWOyuxThols6wQj1Pwt0ilVRaDNG_hBNdPDsZ8PXiv4xcwJD9KcPFC7lH51HEsHk2ke-3QpMIs8_dtipVeqxTXbuqN2HZVjzU8nIq6B4va5iXspO3tAp1Ma4DtmzuHVScFs-aorzN7tUVqC6SeWPyluBZzcOiSNclClAF1hU_gLINXU-TWh4s?purpose=fullsize"
            alt="Jaipur Landscape"
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
      </div>
    </section>
  );
}
