import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header";

import Footer from "@/component/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "OraDent Dental Clinic",
  description: "Ora Dent dental clinic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  data-arp="">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
