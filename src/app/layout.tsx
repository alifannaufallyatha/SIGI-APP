import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "SIGI - Sistem Informasi Gangguan Jiwa",
  description: "Platform kesehatan mental untuk screening, edukasi, dan konsultasi psikologi",
  keywords: "kesehatan mental, psikologi, screening, edukasi, konsultasi, depresi, stress",
  authors: [{ name: "SIGI Team" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/sigi-logo.svg', type: 'image/svg+xml', sizes: '64x64' }
    ],
    apple: '/sigi-logo.svg',
  },
};


import AuthGuard from '../components/auth/AuthGuard';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthGuard>{children}</AuthGuard>
      </body>
    </html>
  );
}
