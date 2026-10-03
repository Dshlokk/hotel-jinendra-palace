"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "910000000000";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Hotel%20Jinendra%20Palace,%20I%20would%20like%20to%20enquire%20about%20booking%20a%20room.`;

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          isScrolled 
            ? "bg-ivory/95 backdrop-blur-md border-b border-charcoal/5 py-4 shadow-sm" 
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          <Link href="/" className={`font-display text-xl md:text-2xl tracking-widest z-50 relative group transition-colors duration-500 ${isScrolled ? "text-burgundy" : "text-ivory"}`}>
            JINENDRA <span className={`transition-colors duration-500 ${isScrolled ? "text-pink-city" : "text-jaipur-rose group-hover:text-ivory"}`}>PALACE</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {["THE HOTEL", "ROOMS", "JAIPUR", "GALLERY"].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className={`font-display tracking-[0.15em] text-xs transition-colors relative group ${
                  isScrolled ? "text-charcoal/80 hover:text-burgundy" : "text-ivory/80 hover:text-ivory"
                }`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                  isScrolled ? "bg-burgundy" : "bg-ivory"
                }`}></span>
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-display tracking-widest text-xs px-6 py-3 border transition-all duration-300 ${
                isScrolled 
                  ? "border-burgundy text-ivory bg-burgundy hover:bg-charcoal hover:border-charcoal" 
                  : "border-pink-city text-charcoal bg-pink-city hover:bg-jaipur-rose hover:text-ivory hover:border-jaipur-rose"
              }`}
            >
              BOOK YOUR STAY
            </Link>
          </div>

          <button 
            className={`md:hidden z-50 relative p-2 transition-colors duration-500 ${isScrolled ? "text-charcoal" : "text-ivory"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} className="text-ivory" /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-burgundy flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-8">
              {["THE HOTEL", "ROOMS", "JAIPUR", "GALLERY", "LOCATION", "CONTACT"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                >
                  <Link 
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-display text-4xl tracking-widest text-ivory hover:text-pink-city transition-colors"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-8 pt-8 border-t border-ivory/20"
              >
                <Link 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display tracking-widest text-sm text-charcoal bg-pink-city px-8 py-4 inline-block text-center w-full"
                >
                  BOOK YOUR STAY
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
