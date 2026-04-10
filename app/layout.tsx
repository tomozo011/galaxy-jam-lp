import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import ShootingStars from "@/components/ShootingStars";
import ChatBot from "@/components/ChatBot";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "銀河果実 いちごジャム | 銀河の煌めきを、一口に",
  description:
    "銀河果実のいちごジャムは、まるで宇宙のような輝きをあなたの毎日に届けます。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={nunito.variable}>
        <ShootingStars />
        {children}
        <ChatBot />
      </body>
    </html>
  );
}
