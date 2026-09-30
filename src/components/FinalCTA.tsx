"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export function FinalCTA() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "910000000000";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Hotel%20Jinendra%20Palace,%20I%20would%20like%20to%20enquire%20about%20booking%20a%20room.`;

  return (
    <section id="book" className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-black text-ivory">
      {/* Background Video with subtle scale */}
      <motion.div 
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.05 }}
        transition={{ duration: 10, ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <video
          src="/videos/footer.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/80" />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center px-6"
      >
        <h2 className="font-display text-7xl md:text-8xl lg:text-9xl tracking-tighter mb-6 drop-shadow-2xl">
          JAIPUR<br />AWAITS.
        </h2>
        <p className="text-xl md:text-2xl font-light mb-12 text-ivory/90 drop-shadow-md">
          Make the city your next stop.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group font-display tracking-widest bg-ivory text-brown px-8 py-4 hover:bg-jaipur-red hover:text-white transition-colors w-full sm:w-auto flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_10px_20px_rgba(182,0,0,0.3)] hover:-translate-y-1 transform duration-300"
          >
            BOOK YOUR STAY
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group font-display tracking-widest text-ivory border-b border-ivory/30 pb-1 hover:border-ivory transition-colors w-full sm:w-auto text-center flex justify-center items-center gap-2"
          >
            WHATSAPP US
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
