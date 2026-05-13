import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hd77.net.pk"),
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
    "hd77 download",
    "hd77 game download",
    "hd77 withdrawal",
    "hd77 jazzcash",
    "hd77 easypaisa",
    "hd77 game 2026",
    "hd77 earning app",
    "hd77 color prediction",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_KEY_HERE",
    // yandex: "YANDEX_KEY_IF_NEEDED",
    // other: { "msvalidate.01": "BING_KEY_IF_NEEDED" },
  },
  openGraph: {
    title: "HD77 Game Download 2026 | Complete HD77 Guide",
    description:
      "Learn how HD77 works in Pakistan with installation, gameplay, payment methods, and withdrawal guidance.",
    url: "https://www.hd77.net.pk",
    siteName: "HD77 Game Guide",
    type: "website",
    locale: "en_PK",
    images: [
      {
        url: "/images/hd22-game.png",
        width: 1200,
        height: 700,
        alt: "HD77 Game Download Guide 2026 - Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HD77 Game Download 2026",
    description:
      "Complete HD77 guide with APK install, strategies, withdrawals, and FAQs.",
    images: ["/images/hd22-game.png"],
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
