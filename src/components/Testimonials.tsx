"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";

const reviews = [
  {
    text: "A true heritage experience. The architecture blends perfectly with the Pink City vibe, and the hospitality is incredibly warm.",
    author: "Rahul S.",
    source: "MakeMyTrip"
  },
  {
    text: "Perfect location. We loved the traditional courtyard and the modern amenities. Highly recommended for anyone visiting Jaipur.",
    author: "Priya M.",
    source: "Google Reviews"
  },
  {
    text: "The aesthetic of Jinendra Palace is unmatched. Waking up to the dusty rose interiors felt like a royal retreat.",
    author: "Vikram D.",
    source: "Google Reviews"
  },
  {
    text: "A beautifully maintained heritage property. The staff went above and beyond to make our stay comfortable. Will definitely return!",
    author: "Anjali K.",
    source: "MakeMyTrip"
  },
  {
    text: "Stunning interiors and a very peaceful vibe despite being in the heart of the city. The rooms were spotless.",
    author: "Siddharth R.",
    source: "Google Reviews"
  },
  {
    text: "Incredible value for money. The authentic Rajasthani hospitality made us feel like royalty from the moment we walked in.",
    author: "Elena W.",
    source: "MakeMyTrip"
  },
  {
    text: "Such a picturesque hotel! Every corner is photogenic, and the location makes exploring the city so convenient.",
    author: "Karan B.",
    source: "Google Reviews"
  }
];

export function Testimonials() {
  return (
    <section id="reviews" className="relative z-20 bg-ivory text-charcoal py-24 md:py-32 overflow-hidden border-t border-burgundy/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 flex flex-col items-center text-center"
        >
          <span className="font-display tracking-[0.2em] text-[10px] md:text-sm text-jaipur-rose uppercase mb-4">
            GUEST EXPERIENCES
          </span>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight text-burgundy">
            WORDS FROM OUR GUESTS
          </h2>
        </motion.div>
      </div>

      <div className="relative w-full flex overflow-hidden py-4 -rotate-1 scale-105">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          className="flex whitespace-nowrap gap-6 md:gap-8 w-max px-4"
        >
          {/* Double the array for seamless infinite looping */}
          {[...reviews, ...reviews].map((review, i) => (
            <div
              key={i}
              className="flex flex-col items-start bg-pale-pink p-8 md:p-10 shadow-sm border border-dusty-rose/20 relative w-[85vw] md:w-[400px] lg:w-[450px] whitespace-normal flex-shrink-0"
            >
              <div className="flex gap-1 mb-6 text-jaipur-rose">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="font-light text-charcoal/80 leading-relaxed text-base md:text-lg mb-8 flex-grow line-clamp-4">
                "{review.text}"
              </p>
              <div className="flex flex-col mt-auto">
                <span className="font-display tracking-widest text-sm text-burgundy">
                  {review.author}
                </span>
                <span className="font-light text-xs text-charcoal/50 mt-1 uppercase tracking-widest">
                  Via {review.source}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
