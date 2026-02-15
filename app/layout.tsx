import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { TranslationProvider } from "./i18n";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pgecom.com"),
  title: {
    default: "PG Ecom - Virtual and Physical Card Issuing Platform",
    template: "%s | PG Ecom",
  },
  description:
    "Create, distribute, and manage virtual and physical payment cards for your business. Whitelabel card programs, identity verification, ecommerce, and developer-ready APIs.",
  icons: {
    icon: "/pgecom-logo-transparent.png",
    apple: "/pgecom-logo-transparent.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["fr_FR", "es_ES"],
    siteName: "PG Ecom",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    languages: {
      "en-US": "https://www.pgecom.com",
      "fr-FR": "https://www.pgecom.com",
      "es-ES": "https://www.pgecom.com",
      "ht-HT": "https://www.pgecom.com",
    },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased`}
      >
        <TranslationProvider>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}
