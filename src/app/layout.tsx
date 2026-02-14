import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Nativz | Dallas Creative & Marketing Agency",
    template: "%s | Nativz",
  },
  description:
    "Nativz is a premium Dallas-Fort Worth marketing agency that builds AI-infused content systems, manages serious ad spend, and produces creative at volume. Marketing systems engineered for rapid growth.",
  keywords: [
    "digital marketing agency",
    "Dallas marketing agency",
    "DFW marketing",
    "social media agency",
    "content production",
    "AI marketing",
    "creative agency Dallas",
    "Nativz",
    "Dallas Fort Worth",
  ],
  authors: [{ name: "Nativz" }],
  creator: "Nativz",
  publisher: "Nativz",
  metadataBase: new URL("https://nativz.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nativz.io",
    siteName: "Nativz",
    title: "Nativz | Dallas Creative & Marketing Agency",
    description:
      "Premium Dallas-Fort Worth marketing agency. AI-infused content systems, creative production at volume, and marketing machines built for rapid growth.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nativz - Dallas Creative & Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nativz | Dallas Creative & Marketing Agency",
    description:
      "Premium Dallas-Fort Worth marketing agency. AI-infused content systems and creative production at volume.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
