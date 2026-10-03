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
  }
];

export function Testimonials() {
  return (
    <section id="reviews" className="relative z-20 bg-ivory text-charcoal py-24 md:py-32 px-6 md:px-12 border-t border-burgundy/10">
      <div className="max-w-[1400px] mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-start bg-pale-pink p-8 md:p-10 shadow-sm border border-dusty-rose/20 relative group hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="flex gap-1 mb-6 text-jaipur-rose">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="font-light text-charcoal/80 leading-relaxed text-lg mb-8 flex-grow">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
