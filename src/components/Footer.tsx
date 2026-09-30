import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brown text-ivory py-16 px-6 md:px-12 border-t border-ivory/10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand */}
        <div className="md:col-span-1">
          <Link href="/" className="font-display text-2xl tracking-widest block mb-2">
            JINENDRA <span className="text-jaipur-red">PALACE</span>
          </Link>
          <p className="font-display tracking-[0.2em] text-xs text-ivory/60 uppercase">
            Jaipur · Rajasthan
          </p>
        </div>

        {/* Navigation */}
        <div className="md:col-span-1">
          <ul className="flex flex-col gap-4 font-light text-sm text-ivory/80">
            <li><Link href="#rooms" className="hover:text-jaipur-red transition-colors">Stay</Link></li>
            <li><Link href="#hotel" className="hover:text-jaipur-red transition-colors">The Hotel</Link></li>
            <li><Link href="#rooms" className="hover:text-jaipur-red transition-colors">Rooms</Link></li>
            <li><Link href="#jaipur" className="hover:text-jaipur-red transition-colors">Jaipur</Link></li>
            <li><Link href="#gallery" className="hover:text-jaipur-red transition-colors">Gallery</Link></li>
            <li><Link href="#contact" className="hover:text-jaipur-red transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Address */}
        <div className="md:col-span-1 font-light text-sm text-ivory/80 space-y-2">
          <p>9, Station Rd, Opp. Polovictory</p>
          <p>Hathi Babu ka Bagh, Kanti Nagar</p>
          <p>Sindhi Camp, Jaipur</p>
          <p>Rajasthan 302006</p>
        </div>

        {/* Contact */}
        <div className="md:col-span-1 font-light text-sm text-ivory/80 space-y-4">
          <p>
            <span className="block text-xs uppercase tracking-widest mb-1 text-ivory/50">Phone</span>
            {process.env.NEXT_PUBLIC_HOTEL_PHONE || "+91 00000 00000"}
          </p>
          <p>
            <span className="block text-xs uppercase tracking-widest mb-1 text-ivory/50">WhatsApp</span>
            {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+91 00000 00000"}
          </p>
          <p className="pt-2">
            <Link href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-jaipur-red transition-colors underline underline-offset-4">
              Google Maps
            </Link>
          </p>
        </div>

      </div>

      <div className="max-w-[1400px] mx-auto border-t border-ivory/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-ivory/40 font-light">
          © {currentYear} Hotel Jinendra Palace. All rights reserved.
        </p>
        <p className="text-xs text-ivory/40 font-light">
          Design System: Tilesuite Inspiration
        </p>
      </div>
    </footer>
  );
}
