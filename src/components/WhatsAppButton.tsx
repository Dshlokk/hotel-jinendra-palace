"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "910000000000";
  const text = `Hello Hotel Jinendra Palace,
I would like to enquire about booking a room.

Check-in: 
Check-out: 
Guests: 
Room type: 

Please share availability and tariff.`;
  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center justify-center bg-jaipur-red text-white hover:bg-maroon transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(91,2,2,0.4)] hover:-translate-y-1 overflow-hidden rounded-full md:rounded-none md:px-6 md:py-3 w-14 h-14 md:w-auto md:h-auto"
      aria-label="Book via WhatsApp"
    >
      <MessageCircle size={24} className="md:hidden" />
      <span className="hidden md:flex items-center gap-3 font-display tracking-widest text-sm uppercase">
        WhatsApp
        <span className="w-px h-4 bg-white/30" />
        <span className="flex items-center gap-2">
          Book Your Stay 
          <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </span>
    </Link>
  );
}
