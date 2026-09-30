import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { HotelStory } from "@/components/HotelStory";
import { Rooms } from "@/components/Rooms";
import { JaipurSection } from "@/components/JaipurSection";
import { Gallery } from "@/components/Gallery";
import { Location } from "@/components/Location";
import { CinematicFooter } from "@/components/CinematicFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory text-brown">
      <Navigation />
      
      {/* 
        MAIN CONTENT AREA 
        We use a high z-index and minimum height to allow the user 
        to scroll down and reveal the footer securely underneath.
      */}
      <div className="relative z-10 w-full bg-ivory shadow-[0_30px_60px_rgba(91,31,42,0.2)]">
        <Hero />
        <Intro />
        <HotelStory />
        <Rooms />
        <JaipurSection />
        <Gallery />
        <Location />
      </div>

      {/* The Cinematic Footer is injected here and sits behind the main content */}
      <CinematicFooter />
      
      <WhatsAppButton />
    </main>
  );
}
