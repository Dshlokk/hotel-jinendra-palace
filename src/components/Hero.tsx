"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { gsap } from "gsap";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(true);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // GSAP Magnetic CTA Button
  useEffect(() => {
    if (isMobile || !ctaRef.current) return;
    const el = ctaRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const h = rect.width / 2;
      const w = rect.height / 2;
      const x = e.clientX - rect.left - h;
      const y = e.clientY - rect.top - w;

      gsap.to(el, {
        x: x * 0.3,
        y: y * 0.3,
        rotationX: -y * 0.1,
        rotationY: x * 0.1,
        scale: 1.05,
        ease: "power2.out",
        duration: 0.4,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        ease: "elastic.out(1, 0.3)",
        duration: 1.2,
      });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMobile]);

  // Scroll parallax for when hero leaves
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scrollScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const fgOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Layer 1: Background (6-10px)
  const l1X = useTransform(smoothMouseX, [-1, 1], ["-8px", "8px"]);
  const l1Y = useTransform(smoothMouseY, [-1, 1], ["-8px", "8px"]);

  // Layer 2: Giant JAIPUR (10-15px)
  const l2X = useTransform(smoothMouseX, [-1, 1], ["-15px", "15px"]);
  const l2Y = useTransform(smoothMouseY, [-1, 1], ["-15px", "15px"]);

  // Layer 3: Architecture (5-8px)
  const l3X = useTransform(smoothMouseX, [-1, 1], ["-6px", "6px"]);
  const l3Y = useTransform(smoothMouseY, [-1, 1], ["-6px", "6px"]);

  // Layer 4: Foreground (2-4px opposite)
  const l4X = useTransform(smoothMouseX, [-1, 1], ["4px", "-4px"]);
  const l4Y = useTransform(smoothMouseY, [-1, 1], ["4px", "-4px"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    const x = (clientX / innerWidth) * 2 - 1;
    const y = (clientY / innerHeight) * 2 - 1;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      ref={ref} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-[100dvh] w-full overflow-hidden bg-burgundy flex items-center justify-center perspective-[1200px]"
    >
      {/* LAYER 1: Background Cinematic Video/Image with Rose/Burgundy grade */}
      <motion.div 
        style={{ 
          scale: scrollScale,
          y: bgY,
          x: isMobile ? 0 : l1X,
          translateY: isMobile ? 0 : l1Y
        }} 
        className="absolute inset-0 z-0 h-[110%] -top-[5%] w-[110%] -left-[5%]"
      >
        <video
          src="/videos/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover object-center w-full h-full opacity-70"
        />
        <div className="absolute inset-0 bg-burgundy/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy/95 via-transparent to-burgundy/60" />
      </motion.div>

      {/* LAYER 2: Giant "JAIPUR" Typography */}
      <motion.div
        style={{
          y: textY,
          x: isMobile ? 0 : l2X,
          translateY: isMobile ? 0 : l2Y,
          translateZ: isMobile ? 0 : -100
        }}
        className="hidden md:flex absolute inset-0 z-10 flex-col items-center justify-center pointer-events-none overflow-hidden"
      >
        <h1 
          className="font-display text-[26vw] leading-[0.8] tracking-tighter text-ivory/20 select-none whitespace-nowrap relative"
          style={{
            WebkitTextStroke: "1px rgba(217, 160, 163, 0.4)", // Dusty Rose outline
          }}
        >
          JAIPUR
          {/* Subtle Depth Shadow */}
          <span className="absolute inset-0 text-pink-city/10 blur-sm -translate-y-4 translate-x-4 -z-10">
            JAIPUR
          </span>
        </h1>
      </motion.div>

      {/* LAYER 3: Subtle Architectural Detail */}
      <motion.div
        style={{
          y: scrollYProgress,
          x: isMobile ? 0 : l3X,
          translateY: isMobile ? 0 : l3Y,
          translateZ: isMobile ? 0 : -50
        }}
        className="absolute bottom-0 right-0 w-[60vw] md:w-[40vw] h-[60vh] z-[15] opacity-[0.25] pointer-events-none mix-blend-screen"
      >
        <Image
          src="/images/hotel/image_12.jpg"
          alt="Jaipur Detail"
          fill
          className="object-cover object-left-bottom [mask-image:linear-gradient(to_top,black,transparent)]"
        />
      </motion.div>

      {/* LAYER 4: Foreground Content */}
      <motion.div 
        style={{ 
          opacity: fgOpacity, 
          x: isMobile ? 0 : l4X,
          translateY: isMobile ? 0 : l4Y,
          translateZ: isMobile ? 0 : 50
        }}
        className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 h-full flex flex-col justify-center mt-12 md:mt-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center h-full pt-24 pb-32 md:pt-32 md:pb-24">
          
          <div className="md:col-span-8 flex flex-col">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-display tracking-[0.2em] text-[10px] md:text-sm text-ivory/80 uppercase mb-4 md:mb-8"
            >
              JAIPUR · RAJASTHAN
            </motion.span>

            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[13vw] sm:text-6xl md:text-8xl lg:text-9xl tracking-tighter text-ivory leading-[0.9] flex flex-col mb-8 md:mb-12 drop-shadow-2xl"
            >
              <span className="md:ml-12">STAY</span>
              <span className="text-ivory/90 md:ml-0">IN THE</span>
              <span className="md:ml-24">PINK CITY</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="max-w-md md:ml-12"
            >
              <h3 className="font-display text-lg md:text-xl tracking-widest text-pink-city mb-2 md:mb-4">
                HOTEL JINENDRA PALACE
              </h3>
              <p className="text-ivory/80 font-light leading-relaxed text-sm md:text-base">
                A comfortable stay in the heart of Jaipur, close to the city's heritage, streets and stories.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="md:col-span-4 flex flex-col gap-4 md:gap-6 md:items-end justify-center mt-6 md:mt-0"
          >
            <Link
              ref={ctaRef}
              href="#book"
              className="group font-display tracking-widest bg-pink-city text-charcoal px-6 py-4 md:px-8 md:py-4 w-full md:w-auto text-center flex items-center justify-center gap-3 hover:bg-jaipur-rose hover:text-ivory transition-colors duration-400 shadow-xl border border-transparent text-sm md:text-base"
            >
              <span className="relative z-10 flex items-center gap-2">
                BOOK YOUR STAY
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>
            
            <Link
              href="#hotel"
              className="group font-display tracking-widest bg-transparent border border-ivory/30 text-ivory px-6 py-4 md:px-8 md:py-4 w-full md:w-auto text-center flex items-center justify-center gap-3 hover:border-ivory transition-all duration-300 hover:bg-ivory/5 text-sm md:text-base"
            >
              EXPLORE THE HOTEL
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Info & Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-6 md:bottom-8 left-0 right-0 z-30 px-6 md:px-12 w-full max-w-[1400px] mx-auto flex justify-between items-end pointer-events-none"
      >
        <div className="font-display tracking-widest text-[8px] md:text-[10px] lg:text-xs text-ivory/50 uppercase leading-relaxed text-left pointer-events-auto">
          9 STATION ROAD<br />
          OPP. POLOVICTORY<br />
          SINDHI CAMP · JAIPUR
        </div>
        
        <div className="hidden md:flex flex-col items-center gap-3 absolute left-1/2 -translate-x-1/2 bottom-0 pointer-events-auto opacity-60 hover:opacity-100 transition-opacity">
          <span className="font-display text-[10px] tracking-[0.3em] uppercase text-ivory">SCROLL TO EXPLORE</span>
          <div className="w-px h-12 bg-ivory/20 overflow-hidden relative">
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-full h-full bg-ivory absolute top-0 left-0"
            />
          </div>
        </div>
        
        <div className="w-32 hidden md:block" />
      </motion.div>
    </section>
  );
}
