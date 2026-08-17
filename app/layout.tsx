import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://plaboveheights.com";

export const metadata: Metadata = {
  title:
    "P & L Above Heights Ltd | Construction, Engineering & Industrial Supply",
  description:
    "Premium construction, engineering, and industrial supply partner in Kenya delivering quality projects and reliable logistics.",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  icons: "/images/favicon.ico",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
  },
  openGraph: {
    title: "P & L Above Heights Ltd",
    description:
      "Premium construction, engineering, and industrial supply partner in Kenya.",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/images/p-and-l-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "P & L Above Heights Ltd logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "P & L Above Heights Ltd",
    description:
      "Premium construction, engineering, and industrial supply partner in Kenya.",
    images: ["/images/p-and-l-logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
