import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StoreProvider from "../StoreProvider";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TJ.Fits",
  description: "Shop and Dress to Slay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-[100vw] overflow-x-hidden`}>
        <StoreProvider>
          <Navbar/>
          <div className="bg-[#F5F4F4]">
          {children}
          </div>
          <Footer/>
        </StoreProvider>
        <Analytics/>
        </body>
    </html>
  );
}
