import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mehmet Küçük | Yazılım Geliştirici",
  description:
    "Yazılım Mühendisi – Web, Mobil, AI/ML ve Kurumsal Sistemler alanında deneyimli geliştirici.",
  keywords: [
    "Mehmet Küçük",
    "yazılım mühendisi",
    "web geliştirici",
    "React",
    "Next.js",
    "Python",
    "AI",
    "NLP",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
