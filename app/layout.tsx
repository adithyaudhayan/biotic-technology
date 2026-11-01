
import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://biotictechnologies.com"),

  title: {
    default: "BIOTIC TECHNOLOGIES | Sustainable Technology Solutions",
    template: "%s | BIOTIC TECHNOLOGIES",
  },

  description:
    "BIOTIC TECHNOLOGIES offers waste management, organic waste processing, biogas, waste treatment and renewable energy solutions in Kerala, India.",

  applicationName: "BIOTIC TECHNOLOGIES",

  keywords: [
    "BIOTIC TECHNOLOGIES",
    "Waste Management Kerala",
    "Ring Compost Systems",
    "Biogas Plants",
    "Incinerators",
    "Solar Energy",
    "Sustainable Technology",
  ],

  openGraph: {
    title: "BIOTIC TECHNOLOGIES",
    description:
      "Practical waste management and sustainable technology solutions.",
    type: "website",
    locale: "en_IN",
    siteName: "BIOTIC TECHNOLOGIES",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
