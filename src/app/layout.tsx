import type { Metadata } from "next";
import { Oswald, Manrope } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["300", "400", "500", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Hotel Jinendra Palace | Jaipur",
  description: "A comfortable stay in the heart of Jaipur. Experience heritage hospitality, warmth, and the architecture of Royal Rajasthan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${manrope.variable}`}>
      <body className="antialiased font-body bg-ivory text-brown selection:bg-jaipur-red selection:text-white">
        {children}
      </body>
    </html>
  );
}
