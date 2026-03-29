import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Visual Dine — 3D & AR Menu Experience",
  description: "Transform your restaurant menu into an immersive 3D & AR experience. Let diners see dishes before they order.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} antialiased bg-[#f5f5f5] text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
