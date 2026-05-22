import type { Metadata } from "next";
import Script from "next/script";
import { Geist } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  keywords: siteConfig.meta.keywords,
  openGraph: {
    title: siteConfig.meta.title,
    description: siteConfig.meta.ogDescription,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body>
        {children}
        <Script src={siteConfig.trackingScript} data-site-id={siteConfig.siteId} strategy="afterInteractive" />
      </body>
    </html>
  );
}
