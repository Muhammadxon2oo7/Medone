import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Toaster } from "sonner";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "med103 — Sog‘liq bo‘yicha AI yordamchi",
    template: "%s | med103",
  },
  description:
    "med103 — AI asosidagi sog‘liq yordamchisi. Kasalliklar, dorilar, simptomlar va birinchi yordam bo‘yicha tezkor AI tavsiyalari.",
  keywords: [
    "med103",
    "sogliq yordamchisi",
    "tibbiy AI",
    "tez yordam",
    "kasallik belgilari",
    "dorilar haqida ma'lumot",
    "birinchi yordam",
    "AI doctor",
    "online doctor uz",
    "medical assistant uz",
    "Tibbiy yordam",
    "yordam",
  ],
  authors: [{ name: "med103" }],
  creator: "med103",
  metadataBase: new URL("https://med103.uz"),

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },

  openGraph: {
    title: "med103 — Sog‘liq bo‘yicha AI yordamchi",
    description:
      "Kasalliklar, dorilar, simptomlar va birinchi yordam bo‘yicha AI asosidagi tezkor maslahatlar.",
    url: "https://med103.uz",
    siteName: "med103",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "med103 — tibbiy AI yordamchi",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "med103 — Sog‘liq bo‘yicha AI yordamchi",
    description:
      "AI yordamida kasalliklar va dorilar haqida aniqlik kirituvchi tibbiy platforma.",
    images: ["/og-image.png"],
  },

  category: "health",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        {children}

        <Analytics />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
