"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const rooms = [
  {
    name: "DELUXE DOUBLE ROOM",
    description: "A spacious and elegantly appointed room offering comfort and quiet relaxation after a day in the city.",
    guests: "2 Guests",
    amenities: ["Air Conditioning", "Wi-Fi", "Room Service"],
    image: "/images/hotel/image_4.jpg",
  },
  {
    name: "SUPER DELUXE ROOM",
    description: "Upgraded comfort with additional space and premium furnishings for an enhanced heritage stay.",
    guests: "2 Guests + 1 Child",
    amenities: ["Air Conditioning", "Wi-Fi", "Room Service", "Laundry"],
    image: "/images/hotel/image_5.jpg",
  }
];

export function Rooms() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "910000000000";
  
  const getWhatsAppLink = (roomName: string) => {
    const text = `Hello Hotel Jinendra Palace,
I would like to enquire about booking a room.

Check-in: 
Check-out: 
Guests: 
Room type: ${roomName}

Please share availability and tariff.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="rooms" className="relative z-20 bg-pale-pink text-charcoal py-24 md:py-32 px-6 md:px-12 border-t border-burgundy/5">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 flex items-center justify-between"
        >
          <h2 className="font-display text-5xl md:text-7xl tracking-tight text-burgundy">STAY A WHILE.</h2>
        </motion.div>

        <div className="flex flex-col gap-32">
          {rooms.map((room, index) => (
            <div key={room.name} className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center group perspective-[1200px]`}>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className={`w-full lg:w-[75%] relative h-[50vh] md:h-[70vh] overflow-hidden shadow-lg border border-dusty-rose/30 ${index % 2 === 0 ? 'lg:mr-[-10%]' : 'lg:ml-[-10%]'}`}
              >
                <div className="w-full h-full transform transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40, zIndex: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="w-[90%] lg:w-[35%] bg-ivory p-8 md:p-12 shadow-2xl relative z-10 -mt-16 lg:mt-0 transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(91,31,42,0.15)] border border-burgundy/10"
              >
                <h3 className="font-display text-3xl md:text-4xl tracking-wide mb-6 text-burgundy">
                  {room.name}
                </h3>
                <p className="text-base font-light mb-8 text-balance leading-relaxed text-charcoal">
                  {room.description}
                </p>
                
                <div className="space-y-4 mb-12 font-light text-sm text-charcoal/80">
                  <div className="flex items-center justify-between border-b border-burgundy/10 pb-4">
                    <span className="font-display uppercase tracking-widest text-xs text-jaipur-rose">Occupancy</span>
                    <span>{room.guests}</span>
                  </div>
                  <div className="flex items-start justify-between border-b border-burgundy/10 pb-4">
                    <span className="font-display uppercase tracking-widest text-xs mt-1 text-jaipur-rose">Amenities</span>
                    <ul className="text-right">
                      {room.amenities.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  href={getWhatsAppLink(room.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display tracking-widest bg-jaipur-rose text-ivory px-8 py-4 hover:bg-burgundy transition-colors w-full flex items-center justify-center gap-2 group/btn"
                >
                  CHECK AVAILABILITY
                  <span className="transform transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
