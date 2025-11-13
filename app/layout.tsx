import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Headers from "./Header";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";
import LiveChat from "./components/LiveChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iMush Data Center | CCTV, Networking, IT Solutions",
  description:
    "Welcome to iMush Data Center. Your trusted partner for CCTV installations, networking, telephone systems, and IT solutions. Innovation, reliability, and security for your business and home.",
  keywords: [
    "CCTV",
    "Networking",
    "IT Solutions",
    "Telephone Systems",
    "Security",
    "Business",
    "Home",
    "iMush Data Center",
  ],
  openGraph: {
    title: "iMush Data Center | CCTV, Networking, IT Solutions",
    description:
      "Your trusted partner for CCTV installations, networking, telephone systems, and IT solutions.",
    url: "https://imushdatacenter.com",
    siteName: "iMush Data Center & Engineering Services",
    images: [
      {
        url: "/public/globe.svg",
        width: 1200,
        height: 630,
        alt: "iMush Data Center & Engineering Services Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iMush Data Center | CCTV, Networking, IT Solutions",
    description:
      "Your trusted partner for CCTV installations, networking, telephone systems, and IT solutions.",
    images: [
      {
        url: "/public/globe.svg",
        alt: "iMush Data Center Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ background: "#F3F2F1", minHeight: "100vh" }}
      >
        <Headers />
        {children}
        {process.env.NEXT_PUBLIC_LIVE_CHAT === "true" && <LiveChat />}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
