
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

const siteUrl = "https://biotictechnologies.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "BIOTIC TECHNOLOGIES | Waste Management & Sustainable Solutions in Kerala",
    template: "%s | BIOTIC TECHNOLOGIES",
  },

  description:
    "BIOTIC TECHNOLOGIES provides ring compost systems, biogas plants, incinerators, waste burners and complete solar panel systems in Kerala, India. Explore sustainable waste management solutions.",

  applicationName: "BIOTIC TECHNOLOGIES",

  keywords: [
    "BIOTIC TECHNOLOGIES",
    "Waste Management Kerala",
    "Ring Compost Kerala",
    "Ring Compost Systems",
    "Biogas Plant Kerala",
    "Biogas Plants",
    "Incinerators Kerala",
    "Waste Burners",
    "Solar Panel Systems Kerala",
    "Sustainable Waste Management",
    "Organic Waste Management",
    "Renewable Energy Kerala",
  ],

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title:
      "BIOTIC TECHNOLOGIES | Sustainable Solutions in Kerala",
    description:
      "Explore ring compost systems, biogas plants, incinerators, waste burners and complete solar panel systems from BIOTIC TECHNOLOGIES.",
    url: siteUrl,
    siteName: "BIOTIC TECHNOLOGIES",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary",
    title: "BIOTIC TECHNOLOGIES",
    description:
      "Waste management and sustainable technology solutions in Kerala, India.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  category: "Sustainable Technology",
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
