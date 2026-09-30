"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STYLES = `
.cinematic-footer-wrapper {
  --pill-bg: rgba(201, 124, 131, 0.2); /* Pink City tint */
  --pill-border: rgba(217, 160, 163, 0.3); /* Dusty Rose */
  --pill-shadow: rgba(33, 26, 25, 0.4); /* Charcoal */
  
  --pill-bg-hover: rgba(201, 124, 131, 0.5);
  --pill-border-hover: rgba(244, 235, 221, 0.5); /* Ivory */
}

@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
  100% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.6; }
}

@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.animate-footer-breathe {
  animation: footer-breathe 8s ease-in-out infinite alternate;
}

.animate-footer-scroll-marquee {
  animation: footer-scroll-marquee 40s linear infinite;
}

.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%, 
    rgba(142, 70, 85, 0.6) 0%, 
    rgba(142, 70, 85, 0.2) 40%, 
    transparent 70%
  );
}

.footer-glass-pill {
  background: var(--pill-bg);
  box-shadow: 0 10px 30px -10px var(--pill-shadow);
  border: 1px solid var(--pill-border);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.footer-glass-pill:hover {
  background: var(--pill-bg-hover);
  border-color: var(--pill-border-hover);
  box-shadow: 0 20px 40px -10px var(--pill-shadow);
}

.footer-giant-bg-text {
  font-size: 26vw;
  line-height: 0.8;
  color: transparent;
  -webkit-text-stroke: 1px rgba(217, 160, 163, 0.15); /* Dusty Rose outline */
  background: linear-gradient(180deg, rgba(217, 160, 163, 0.18) 0%, transparent 80%);
  -webkit-background-clip: text;
  background-clip: text;
}
`;

export type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & 
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: React.ElementType;
  };

const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
    const localRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (typeof window === "undefined" || window.matchMedia("(hover: none)").matches) return;
      const element = localRef.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const h = rect.width / 2;
          const w = rect.height / 2;
          const x = e.clientX - rect.left - h;
          const y = e.clientY - rect.top - w;

          gsap.to(element, {
            x: x * 0.4,
            y: y * 0.4,
            rotationX: -y * 0.15,
            rotationY: x * 0.15,
            scale: 1.03,
            ease: "power2.out",
            duration: 0.4,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1.2,
          });
        };

        element.addEventListener("mousemove", handleMouseMove as any);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          element.removeEventListener("mousemove", handleMouseMove as any);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, element);

      return () => ctx.revert();
    },[]);

    return (
      <Component
        ref={(node: HTMLElement) => {
          (localRef as any).current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) (forwardedRef as any).current = node;
        }}
        className={cn("cursor-pointer", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

const MarqueeItem = () => (
  <div className="flex items-center space-x-8 px-4">
    <span>JAIPUR</span> <span className="text-dusty-rose/40">•</span>
    <span>JINENDRA PALACE</span> <span className="text-dusty-rose/40">•</span>
    <span>RAJASTHAN</span> <span className="text-dusty-rose/40">•</span>
    <span>STAY IN THE PINK CITY</span> <span className="text-dusty-rose/40">•</span>
    <span>DISCOVER JAIPUR</span> <span className="text-dusty-rose/40">•</span>
    <span>BOOK YOUR STAY</span> <span className="text-dusty-rose/40">•</span>
  </div>
);

export function CinematicFooter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "910000000000";
  const whatsappText = `Hello Hotel Jinendra Palace,
I would like to enquire about booking a room.

Check-in: 
Check-out: 
Guests: 
Room type: 

Please share availability and tariff.`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        giantTextRef.current,
        { y: "15vh", scale: 0.9, opacity: 0 },
        {
          y: "0vh",
          scale: 1,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        [headingRef.current, linksRef.current, bottomBarRef.current],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 50%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  },[]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      
      <div
        ref={wrapperRef}
        className="relative h-[100dvh] w-full mt-24"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <footer className="fixed bottom-0 left-0 flex h-[100dvh] w-full flex-col justify-between overflow-hidden bg-burgundy text-ivory cinematic-footer-wrapper perspective-[1200px]">
          
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <video
              src="/videos/footer.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full grayscale-[50%] mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-burgundy/60 mix-blend-multiply" />
          </div>

          <div className="footer-aurora absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[100px] pointer-events-none z-0" />

          <div
            ref={giantTextRef}
            className="footer-giant-bg-text font-display absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap z-0 pointer-events-none select-none tracking-tight"
          >
            JAIPUR
          </div>

          <div className="absolute top-16 left-0 w-full overflow-hidden border-y border-dusty-rose/10 bg-burgundy/40 backdrop-blur-md py-3 z-10 -rotate-[1deg] scale-[1.02] shadow-2xl">
            <div className="flex w-max animate-footer-scroll-marquee text-[10px] md:text-xs font-display tracking-[0.4em] text-dusty-rose uppercase">
              <MarqueeItem />
              <MarqueeItem />
            </div>
          </div>

          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-20 w-full max-w-5xl mx-auto">
            <div ref={headingRef} className="text-center mb-12">
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight text-ivory drop-shadow-2xl mb-6">
                YOUR JAIPUR<br />STAY STARTS HERE.
              </h2>
              <p className="text-lg md:text-xl font-light text-ivory/80 max-w-md mx-auto">
                Stay at Hotel Jinendra Palace and discover Jaipur from the heart of the city.
              </p>
            </div>

            <div ref={linksRef} className="flex flex-col items-center gap-12 w-full">
              <div className="flex flex-col sm:flex-row justify-center gap-6 w-full">
                <MagneticButton as={Link} href="#book" className="footer-glass-pill px-10 py-5 rounded-none font-display tracking-widest text-sm md:text-base flex items-center justify-center gap-3 text-ivory group">
                  BOOK YOUR STAY
                </MagneticButton>
                
                <MagneticButton as="a" href={whatsappLink} target="_blank" rel="noopener noreferrer" className="footer-glass-pill px-10 py-5 rounded-none font-display tracking-widest text-sm md:text-base flex items-center justify-center gap-3 text-ivory group">
                  WHATSAPP US
                </MagneticButton>
              </div>

              <div className="flex flex-wrap justify-center gap-6 md:gap-8 w-full max-w-2xl">
                {['THE HOTEL', 'ROOMS', 'JAIPUR', 'GALLERY', 'LOCATION', 'CONTACT'].map((link) => (
                  <Link key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="font-display tracking-widest text-xs md:text-sm text-ivory/60 hover:text-ivory transition-colors relative group">
                    {link}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-ivory transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div ref={bottomBarRef} className="relative z-20 w-full pb-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-ivory/60 font-display text-[10px] md:text-xs tracking-widest uppercase order-2 md:order-1">
              © 2026 HOTEL JINENDRA PALACE
            </div>

            <div className="text-ivory/60 font-display text-[10px] md:text-xs tracking-widest uppercase order-1 md:order-2">
              JAIPUR · RAJASTHAN
            </div>

            <MagneticButton
              as="button"
              onClick={scrollToTop}
              className="flex items-center gap-2 text-ivory/60 hover:text-ivory font-display tracking-widest text-[10px] md:text-xs uppercase group order-3 transition-colors"
            >
              <span className="transform group-hover:-translate-y-1 transition-transform duration-300">↑</span>
              BACK TO TOP
            </MagneticButton>

          </div>
        </footer>
      </div>
    </>
  );
}
