"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fake progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) return 90;
        // Random increment between 1 and 15
        const increment = Math.floor(Math.random() * 15) + 1;
        return Math.min(prev + increment, 90);
      });
    }, 200);

    // Wait for videos to load or fallback timeout
    const videos = document.querySelectorAll('video');
    let loadedCount = 0;

    const checkReady = () => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
      }, 800); // give time for 100% to show
    };

    if (videos.length === 0) {
      setTimeout(checkReady, 1000);
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

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-burgundy text-ivory overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/images/hotel/image_13.jpg')] bg-cover bg-center opacity-[0.05] mix-blend-overlay" />
          
          <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-sm px-6">
            <div className="overflow-hidden mb-6 text-center">
              <motion.h1 
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-4xl md:text-6xl tracking-widest text-pink-city"
              >
                HOTEL JINENDRA PALACE
              </motion.h1>
            </div>
            
            <div className="overflow-hidden flex items-center justify-between w-full mt-4">
              <motion.p 
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-xs md:text-sm tracking-[0.3em] uppercase text-ivory/60"
              >
                {progress < 100 ? "LOADING ASSETS..." : "THE PINK CITY AWAITS"}
              </motion.p>
              
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="font-display text-xs md:text-sm tracking-widest text-jaipur-rose"
              >
                {progress}%
              </motion.span>
            </div>

            <motion.div 
              className="mt-6 w-full h-[1px] bg-dusty-rose/20 relative overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div 
                className="absolute top-0 left-0 h-full bg-pink-city transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
