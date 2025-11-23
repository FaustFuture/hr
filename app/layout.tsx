import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hr-ecru-xi.vercel.app"),
  title: "FaustFuture | Hiring in the Age of AI",
  description: "We help companies build AI-native workforces. Map your workflows, automate with agents, and upskill your team to orchestrate intelligence.",
  keywords: ["AI consulting", "workforce automation", "AI hiring", "future of work", "AI strategy", "business automation", "AI workforce"],
  authors: [{ name: "FaustFuture" }],
  creator: "FaustFuture",
  publisher: "FaustFuture",
  openGraph: {
    title: "FaustFuture | Hiring in the Age of AI",
    description: "Don't just hire people. Hire people who can orchestrate AI. We help you design the workforce of the future.",
    url: "https://faustfuture.com",
    siteName: "FaustFuture",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FaustFuture - Hiring in the Age of AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FaustFuture | Hiring in the Age of AI",
    description: "Don't just hire people. Hire people who can orchestrate AI. We help you design the workforce of the future.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
