import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web One",
  description: "Web One",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full min-w-full">
      <body
        className={`${manrope.variable} antialiased w-full min-w-full min-h-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
