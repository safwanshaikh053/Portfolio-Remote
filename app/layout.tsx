import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { AmbientBackground } from "@/components/ambient-background";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Mohammed Safwan — Full Stack Developer",
  description:
    "Full Stack Developer skilled in Java, Spring Boot, React.js, and MySQL. CDAC PG-DAC graduate seeking entry-level Full Stack / Java Developer roles.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${display.variable} ${body.variable} font-body`}>
        <AmbientBackground />
        {children}
      </body>
    </html>
  );
}
