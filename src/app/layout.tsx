import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/lib/store/provide";

const inter = Lato({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "VorongorWeather",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
