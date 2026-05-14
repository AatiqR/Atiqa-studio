import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FloatingWhatsApp from "@/components/ui/whatsapp";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Atiqa Rana | Professional Graphic Designer & YouTube Thumbnail Designer",

  description:
    "Atiqa Rana is a professional graphic designer specializing in high-converting YouTube thumbnails, social media posts, posters, branding, and modern visual design for creators, businesses, and personal brands.",

  keywords: [
    "Atiqa Rana",
    "Graphic Designer",
    "Thumbnail Designer",
    "YouTube Thumbnail Designer",
    "Professional Thumbnail Designer",
    "YouTube Thumbnail Design",
    "Social Media Designer",
    "Poster Designer",
    "Creative Graphic Designer",
    "Freelance Graphic Designer",
    "Brand Identity Designer",
    "Instagram Post Designer",
    "Food Poster Designer",
    "YouTube Thumbnail Expert",
    "Thumbnail Design Services",
    "Modern Graphic Design",
    "Creative Designer Portfolio",
    "Visual Designer",
    "Personal Brand Designer",
    "High CTR Thumbnail Designer",
  ],

  authors: [
    {
      name: "Atiqa Rana",
    },
  ],

  creator: "Atiqa Rana",

  publisher: "Atiqa Rana",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "https://atiqa-studio.vercel.app/",
  },

  openGraph: {
    title:
      "Atiqa Rana | Graphic Designer & High-Converting Thumbnail Designer",

    description:
      "Premium thumbnail design, posters, branding, and social media visuals crafted to help creators and businesses grow faster online.",

    url: "https://atiqa-studio.vercel.app/",
    siteName: "Atiqa Rana Portfolio",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "https://atiqa-studio.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Atiqa Rana Graphic Design Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Atiqa Rana | Professional Thumbnail & Graphic Designer",

    description:
      "Helping creators and brands grow with scroll-stopping thumbnails, posters, branding, and premium visual design.",

    images: ["https://atiqa-studio.vercel.app/og-image.jpg"],
  },

  icons: {
    icon: "/Assets/LOGO.png",
    shortcut: "/Assets/LOGO.png",
    apple: "/Assets/LOGO.png",
  },

  category: "Graphic Design",

  metadataBase: new URL("https://atiqa-studio.vercel.app"),

  other: {
    "google-site-verification":
      "DOuHYzCAHl3lOkz1Y8nLhneoLH53VIfCgZlOyLkUyX0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        <FloatingWhatsApp />

        <SpeedInsights />
      </body>
    </html>
  );
}