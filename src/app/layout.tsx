import type { Metadata } from "next";
import Script from "next/script";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Barbarian Signs | Custom Signs in Los Angeles Since 1985",
  description:
    "Barbarian Signs has been crafting custom signs for businesses across Los Angeles for over 40 years. Channel letters, illuminated signs, monument signs, and more. Get a free quote today.",
  keywords: [
    "custom signs Los Angeles",
    "channel letters LA",
    "illuminated signs",
    "monument signs",
    "sign company LA",
    "business signs",
    "storefront signs",
    "sign installation",
    "Barbarian Signs",
  ],
  openGraph: {
    title: "Barbarian Signs | Custom Signs in Los Angeles Since 1985",
    description:
      "Specializing in customized signs for over 40 years. Trusted by Westfield, Cold Stone Creamery, and businesses across LA.",
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
        <Script src="https://is-boring.com/track.js" data-site-id="barbarian-signs" strategy="afterInteractive" />
      </body>
    </html>
  );
}
