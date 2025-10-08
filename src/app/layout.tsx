import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Side Project with Daggy (SPD) - 3-Month Mentorship Program",
  description: "A 3-month mentorship helping aspiring engineers build real projects and grow into world-class developers. Apply for Cohort 2 and join our community of builders.",
  keywords: ["mentorship", "software development", "side projects", "engineering", "programming", "web development"],
  authors: [{ name: "Daggy" }],
  creator: "Daggy",
  openGraph: {
    title: "Side Project with Daggy (SPD)",
    description: "A 3-month mentorship helping aspiring engineers build real projects and grow into world-class developers.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Side Project with Daggy (SPD)",
    description: "A 3-month mentorship helping aspiring engineers build real projects and grow into world-class developers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
