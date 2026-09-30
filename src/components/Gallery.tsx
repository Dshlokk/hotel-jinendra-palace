"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

const galleryItems = [
  { name: "HAWA MAHAL", src: "https://images.openai.com/static-rsc-4/1lfMuVNtaR8AAhuqa4P4UV07HkQxP8v145ztdLU1YBrL73ZkD06h3V4OURIgEmtXb2ImXMY94_g7R2J66EeYQgnJpljLAqN4OZqRKPTv3gggs7Ud23Fs3b-FFNGuE1uCjwcRuZpxloutZesMyb66aNkF90kqmD7OOXWt65E__AveIazfxo6cW7EOEBY9Iiur?purpose=fullsize", z: 0, scale: 1 },
  { name: "CITY PALACE", src: "https://images.openai.com/static-rsc-4/GFx7Xjm8SJ3EBPsHVzuzsOA6Rl0cgsdWDtPHVH6mUKnuFzjx8nMmF8dRpZlpu4Th3PcHt1DrHRqz7wtp6P_E3thIfFZiYd7Sl5HIGodOyJ4HBM-cp57BRqXPvKOTUiOEqMv4-HO0RG-cGM9v8MZLpleYrObptBusEdzXBafaAZdmdmwQLCAplkiHQ7wXjxcB?purpose=fullsize", z: 50, scale: 1.05 },
  { name: "JAL MAHAL", src: "https://images.openai.com/static-rsc-4/H9VV7e1fcJlMWOyuxThols6wQj1Pwt0ilVRaDNG_hBNdPDsZ8PXiv4xcwJD9KcPFC7lH51HEsHk2ke-3QpMIs8_dtipVeqxTXbuqN2HZVjzU8nIq6B4va5iXspO3tAp1Ma4DtmzuHVScFs-aorzN7tUVqC6SeWPyluBZzcOiSNclClAF1hU_gLINXU-TWh4s?purpose=fullsize", z: -50, scale: 0.95 },
  { name: "AMER FORT", src: "https://images.openai.com/static-rsc-4/H9VV7e1fcJlMWOyuxThols6wQj1Pwt0ilVRaDNG_hBNdPDsZ8PXiv4xcwJD9KcPFC7lH51HEsHk2ke-3QpMIs8_dtipVeqxTXbuqN2HZVjzU8nIq6B4va5iXspO3tAp1Ma4DtmzuHVScFs-aorzN7tUVqC6SeWPyluBZzcOiSNclClAF1hU_gLINXU-TWh4s?purpose=fullsize", z: 20, scale: 1.02 }
];

export function Gallery() {
  const containerRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section 
      id="gallery" 
      ref={containerRef} 
      className="bg-ivory text-charcoal relative z-20 md:h-[200vh] perspective-[1200px]"
    >
      <div className="md:sticky md:top-0 md:h-screen md:overflow-hidden flex flex-col md:flex-row items-center pt-24 md:pt-0">
        
        <div className="px-6 md:px-12 md:w-[30vw] md:flex-shrink-0 mb-16 md:mb-0 z-30">
          <h2 className="font-display text-4xl md:text-6xl tracking-tight text-burgundy drop-shadow-sm">
            VISUAL <br className="hidden md:block" />
            ARCHIVE
          </h2>
        </div>

        <motion.div 
          style={{ x: isMobile ? 0 : x }}
          className="flex flex-col md:flex-row gap-12 md:gap-24 px-6 md:px-0 pb-24 md:pb-0 md:w-[150vw] items-center"
        >
          {galleryItems.map((item, index) => (
            <div 
              key={item.name} 
              className={`relative w-full md:w-[40vw] lg:w-[30vw] flex-shrink-0 group ${index % 2 === 0 ? 'md:mt-32' : 'md:-mt-32'}`}
              style={{
                transform: isMobile ? 'none' : `translateZ(${item.z}px) scale(${item.scale})`,
              }}
            >
              <div className="relative h-[50vh] md:h-[60vh] overflow-hidden shadow-xl transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:rotate-y-[2deg] border border-dusty-rose/20">
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-6 flex justify-between items-center border-b border-burgundy/10 pb-2">
                <span className="font-display tracking-widest text-sm uppercase text-charcoal/80">{item.name}</span>
                <span className="font-light text-xs text-jaipur-rose block">0{index + 1}</span>
              </div>
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
