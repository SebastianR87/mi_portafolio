import type { Metadata } from "next";
import { Geist_Mono, Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const urbanist = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portafolio Sebastian Rondo",
  description: "Este es el portafolio de sebastian Rondo Ingeniero de Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} ${geistMono.variable} antialiased`}>
          <Navbar />
        {children}
      </body>
    </html>
  );
}
