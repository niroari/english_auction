import type { Metadata } from "next";
import { Geist, Geist_Mono, Alef } from "next/font/google";
import "./globals.css";
import { GameStateProvider } from "@/app/context/GameStateContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const alef = Alef({
  variable: "--font-alef",
  subsets: ["hebrew", "latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "English Sentence Auction",
  description: "An exciting classroom sentence bidding game for learning grammar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${alef.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-white selection:bg-cyan-500/30 selection:text-cyan-200">
        <GameStateProvider>{children}</GameStateProvider>
      </body>
    </html>
  );
}

