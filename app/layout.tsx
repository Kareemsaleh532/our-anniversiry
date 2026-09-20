import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "@/styles/globals.css";
import { birthdayData } from "@/data/birthdayData";
import { AudioPlayer } from "@/components/AudioPlayer";
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
export const metadata: Metadata = {
  title: birthdayData.title,
  description: birthdayData.openingMessage,
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={serif.variable + " " + sans.variable}>
        {children}
        <AudioPlayer />
      </body>
    </html>
  );
}
