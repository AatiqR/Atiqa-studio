import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FloatingWhatsApp from "@/components/ui/whatsapp";

// import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Maz Digital Agency | High-Converting Video, Design & Web Solutions for Brands",

  description:
    "Maz Digital Agency helps brands, creators, and agencies grow with high-performing video editing, graphic design, thumbnails, and conversion-focused websites. Trusted by global clients for premium digital execution.",

  keywords: [
    "Digital Agency",
    "Video Editing Agency",
    "Influencer Marketing Agency",
    "Graphic Design Services",
    "Thumbnail Design",
    "Website Development Agency",
    "Next.js Agency",
    "Creative Agency for Brands",
    "Content Growth Agency",
    "Social Media Content Agency",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://maz-agency.vercel.app/",
  },

  openGraph: {
    title:
      "Maz Digital Agency | We Turn Content Into Growth for Brands & Creators",

    description:
      "Premium video editing, design, and high-converting websites built for brands that want attention, authority, and growth — without managing freelancers.",

    url: "https://maz-agency.vercel.app/",
    siteName: "Maz Digital Agency",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "https://maz-agency.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maz Digital Agency – Premium Creative & Web Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Maz Digital Agency | High-Converting Creative & Web Agency",

    description:
      "We help brands grow with scroll-stopping content, premium design, and websites that convert visitors into clients.",

    images: ["https://maz-agency.vercel.app/og-image.jpg"],
  },

  icons: {
    icon: "/Assets/LOGO.png",
  },

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
        <SpeedInsights />
<FloatingWhatsApp />
        {/* Optional Live Chat / Support Widget */}
        {/* 
        <Script
          id="kommunicate-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, m){
                var kommunicateSettings = 
                  {"appId":"22e442bab43e9efffe7c6bb7c87a7f982","popupWidget":true,"automaticChatOpenOnNavigation":true};
                var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
                s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
                var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
                window.kommunicate = m; m._globals = kommunicateSettings;
              })(document, window.kommunicate || {});
            `,
          }}
        />
        */}
      </body>
    </html>
  );
}
