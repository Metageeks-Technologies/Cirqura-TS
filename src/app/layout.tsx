import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cirqura - Sustainable Glass Recycling UAE | Dubai Recycling Services",
  description: "Leading glass recycling company in UAE. Collection services, sustainability training, carbon footprint tracking for Dubai businesses. 100% recyclable glass, 40% energy savings.",
  keywords: [
    "glass recycling UAE",
    "Dubai recycling services",
    "sustainable glass collection",
    "carbon footprint tracking",
    "UAE glass recycling",
    "bottle recycling Dubai",
    "glass bottle collection UAE",
    "sustainability training UAE",
    "eco-friendly recycling",
    "Cirqura Dubai"
  ],
  openGraph: {
    title: "Cirqura - Sustainable Glass Recycling UAE",
    description: "Leading glass recycling company in UAE. Collection services, sustainability training, carbon footprint tracking for Dubai businesses.",
    url: "https://cirqura.ae",
    siteName: "Cirqura",
    locale: "en_UAE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cirqura - Sustainable Glass Recycling UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cirqura - Sustainable Glass Recycling UAE",
    description: "Leading glass recycling company in UAE. Collection services, sustainability training, carbon footprint tracking for Dubai businesses.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://cirqura.ae",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
