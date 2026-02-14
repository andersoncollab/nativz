import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Nativz | Creative Volume for the Andromeda Era",
    template: "%s | Nativz",
  },
  description:
    "Nativz is a DFW-based digital marketing agency specializing in creative content production, social media domination, and algorithm-optimized marketing systems. If you need an army of nerds, you know who to call.",
  keywords: [
    "digital marketing agency",
    "DFW marketing",
    "social media agency",
    "content production",
    "Meta Andromeda",
    "creative volume",
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
    title: "Nativz | Creative Volume for the Andromeda Era",
    description:
      "The most creatively aggressive digital marketing agency in DFW. Creative content production, social media domination, and algorithm-optimized marketing systems.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nativz - Creative Volume for the Andromeda Era",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nativz | Creative Volume for the Andromeda Era",
    description:
      "The most creatively aggressive digital marketing agency in DFW.",
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
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
