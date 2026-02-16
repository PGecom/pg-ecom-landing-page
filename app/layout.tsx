import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { TranslationProvider } from "./i18n";
import CrispChat from "./components/CrispChat";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4F46E5",
};

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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PG Ecom",
  url: "https://www.pgecom.com",
  logo: "https://www.pgecom.com/pgecom-logo-transparent.png",
  description:
    "Virtual and physical card issuing, ecommerce, identity verification, and education platform.",
  sameAs: [
    "https://twitter.com/pgecommerce",
    "https://facebook.com/pgecom",
    "https://instagram.com/pgecom",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@pgecom.com",
    contactType: "customer service",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "PG Ecom",
  url: "https://www.pgecom.com",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <TranslationProvider>
          <main>{children}</main>
          <CrispChat />
        </TranslationProvider>
      </body>
    </html>
  );
}
