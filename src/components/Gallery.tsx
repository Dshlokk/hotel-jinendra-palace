"use client";

import { motion } from "motion/react";
import Image from "next/image";

const galleryItems = [
  { 
    name: "EXTERIOR", 
    src: "/images/hotel/image_7.jpg", 
    aspect: "aspect-[3/4]",
    col: "md:col-span-5 md:mt-24"
  },
  { 
    name: "LOBBY LOUNGE", 
    src: "/images/hotel/image_8.jpg", 
    aspect: "aspect-[4/5]",
    col: "md:col-span-7"
  },
  { 
    name: "COURTYARD", 
    src: "/images/hotel/image_9.jpg", 
    aspect: "aspect-[16/9]",
    col: "md:col-span-12"
  },
  { 
    name: "DINING", 
    src: "/images/hotel/image_10.jpg", 
    aspect: "aspect-[3/4]",
    col: "md:col-span-6 md:col-start-4"
  }
];

export function Gallery() {
  return (
    <section 
      id="gallery" 
      className="bg-ivory text-charcoal relative z-20 py-24 md:py-40 border-t border-burgundy/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-20 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight text-burgundy drop-shadow-sm"
          >
            VISUAL ARCHIVE.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-16 items-start">
          {galleryItems.map((item, index) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`w-full group ${item.col}`}
            >
              <div className={`relative w-full ${item.aspect} overflow-hidden shadow-lg border border-dusty-rose/20 bg-dusty-rose/5`}>
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  className="object-cover transform transition-transform duration-[2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
              </div>
              <div className="mt-6 flex justify-between items-center border-b border-burgundy/10 pb-3">
                <span className="font-display tracking-widest text-sm uppercase text-charcoal/80">{item.name}</span>
                <span className="font-light text-xs text-jaipur-rose block">0{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
