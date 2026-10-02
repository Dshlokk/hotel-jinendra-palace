"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for videos to load or fallback timeout
    const videos = document.querySelectorAll('video');
    let loadedCount = 0;

    const checkReady = () => {
      // Minimum duration for the aesthetic preloader (e.g., 2.5s)
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    };

    if (videos.length === 0) {
      checkReady();
    } else {
      let fired = false;
      
      const onVideoLoad = () => {
        loadedCount++;
        if (loadedCount === videos.length && !fired) {
          fired = true;
          checkReady();
        }
      };

      videos.forEach(video => {
        if (video.readyState >= 3) {
          onVideoLoad();
        } else {
          video.addEventListener('canplay', onVideoLoad);
          video.addEventListener('loadeddata', onVideoLoad);
        }
      });

      // Safety fallback in case videos take forever
      setTimeout(() => {
        if (!fired) {
          fired = true;
          checkReady();
        }
      }, 5000);
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }} // smooth cinematic easing
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-burgundy text-ivory overflow-hidden"
        >
          {/* Subtle background layers */}
          <div className="absolute inset-0 bg-[url('/images/hotel/image_13.jpg')] bg-cover bg-center opacity-[0.05] mix-blend-overlay" />
          
          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Animated Text Reveal */}
            <div className="overflow-hidden mb-6">
              <motion.h1 
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-4xl md:text-6xl tracking-widest text-pink-city"
              >
                HOTEL JINENDRA PALACE
              </motion.h1>
            </div>
            
            <div className="overflow-hidden">
              <motion.p 
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-sm tracking-[0.3em] uppercase text-ivory/60"
              >
                THE PINK CITY AWAITS
              </motion.p>
            </div>

            {/* Loading Line */}
            <motion.div 
              className="mt-12 w-48 h-[1px] bg-dusty-rose/20 relative overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div 
                className="absolute top-0 left-0 h-full bg-pink-city"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
