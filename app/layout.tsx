import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientStarsCanvas from "@/components/ClientStarsCanvas";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vikshith H G",
  description: "Vikshith Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ overscrollBehavior: 'none' }}>
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden w-screen`}
        style={{ overflowX: 'hidden', overscrollBehavior: 'none' }}
      >
        <ClientStarsCanvas />
        <Navbar/>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
