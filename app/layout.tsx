import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Meghalaya Holidays - Discover the Land of Clouds",
  description: "Your trusted gateway to Meghalaya, Assam & Arunachal Pradesh. Premium travel experiences with verified local drivers, curated tour packages, and handpicked homestays.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
