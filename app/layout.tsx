import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HD77 Game Download 2026 | HD77 Pakistan Guide",
  description:
    "Detailed HD77 game guide for Pakistan: download steps, gameplay, deposits, withdrawals, JazzCash and Easypaisa support, FAQs, and responsible play tips.",
  keywords: [
    "hd77",
    "hd77 game",
    "hd777 game",
    "hd 77 game",
    "hd77 apk",
    "hd77 login",
    "hd77 pakistan",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HD77 Game Download 2026 | Complete HD77 Guide",
    description:
      "Learn how HD77 works in Pakistan with installation, gameplay, payment methods, and withdrawal guidance.",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "HD77 Game Download 2026",
    description:
      "Complete HD77 guide with APK install, strategies, withdrawals, and FAQs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
