"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function HotelStory() {
  return (
    <section id="hotel" className="relative z-20 bg-pale-pink text-charcoal py-24 md:py-32 px-6 md:px-12 border-t border-burgundy/5">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-display text-5xl md:text-7xl tracking-tight text-burgundy">THE HOTEL</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center relative w-full h-auto md:h-[90vh]">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full md:w-[70%] h-[50vh] md:h-[80vh] relative overflow-hidden group shadow-lg border border-dusty-rose/30"
          >
            <div className="w-full h-full transform transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]">
              <Image
                src="/images/hotel/image_2.jpg"
                alt="Hotel Jinendra Palace Exterior"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, zIndex: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative -mt-20 md:mt-0 md:absolute md:right-12 md:bottom-24 w-[80%] md:w-[35%] lg:w-[25%] h-[40vh] md:h-[50vh] z-10 group"
          >
            <div className="w-full h-full relative overflow-hidden shadow-2xl transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-4 group-hover:shadow-[0_30px_60px_rgba(91,31,42,0.15)] bg-ivory p-2 border border-dusty-rose/50">
              <div className="w-full h-full relative">
                <Image
                  src="/images/hotel/image_3.jpg"
                  alt="Hotel Lobby Detail"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 md:mt-0 md:absolute md:top-12 md:right-12 md:w-[35%] bg-ivory/95 backdrop-blur-md p-8 md:p-12 shadow-xl border border-burgundy/10 z-20"
          >
            <p className="text-xl md:text-2xl font-light mb-8 text-balance text-charcoal">
              A comfortable Jaipur stay, made for discovering the city.
            </p>
            <div className="space-y-6 text-sm md:text-base font-light text-charcoal/80">
              <p>
                Experience the warmth of Rajasthani hospitality. Our property is designed to provide a restful environment after a day of exploring the Pink City.
              </p>
              <div>
                <span className="font-display tracking-widest text-xs uppercase block mb-3 text-jaipur-rose">Facilities</span>
                <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                  <li>Wi-Fi</li>
                  <li>Restaurant</li>
                  <li>Air Conditioning</li>
                  <li>Room Service</li>
                  <li>Laundry</li>
                  <li>24-hour Reception</li>
                </ul>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
