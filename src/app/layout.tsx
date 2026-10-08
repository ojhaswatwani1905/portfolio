import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Caveat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-handwriting",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ojhas Watwani — Senior Technology Consultant | FinTech · Banking · Trading",
  description:
    "Senior Technology Consultant specializing in FinTech, digital banking platforms, trading systems, and financial systems architecture.",
  keywords: [
    "Ojhas Watwani",
    "Technology Consultant",
    "FinTech Engineer",
    "Banking Systems",
    "Crypto Trading",
    "Algorithmic Trading",
    "BETADRiX",
    "Financial Systems Architecture",
  ],
  authors: [{ name: "Ojhas Watwani" }],
  openGraph: {
    title: "OJHAS WATWANI — Technology Consultant",
    description: "Building Financial Systems for a Digital World.",
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
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${caveat.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#F4EFE5] text-[#161616] font-sans antialiased selection:bg-[#8B6F47] selection:text-white">
        {children}
      </body>
    </html>
  );
}
