import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import { GoogleAnalytics } from '@next/third-parties/google'


export const metadata: Metadata = {
  title: `Invoice Tracker`,
  description: `Explore a powerful GA4 dashboard built with Next.js and seamlessly deployed on Vercel. This dynamic, high-performance dashboard provides real-time insights into your website's traffic, user behavior, and key metrics. Built using the latest web technologies, it offers a user-friendly interface and advanced features for tracking performance, analyzing data, and optimizing digital strategies. Leverage the speed and scalability of Vercel to access detailed analytics in a secure and responsive environment, making it easy to monitor and improve your website’s performance`,
  keywords: [
    "Invoice Tracker",
    "Online Invoice Management",
    "Free Invoice Tracker",
    "Invoice Tracking Software",
    "Digital Invoice Manager",
    "Cloud Invoice Tracker",
    "Small Business Invoice Software",
    "Next.js Invoice Tracker",
    "PostgreSQL Invoice App",
    "Vercel Invoice Management",
    "Next.js Billing Software",
    "Open Source Invoice Tracker",
    "Scalable Invoice Tracker",
    "Automated Invoice Tracking",
    "Recurring Invoice Software",
    "Invoice Status Tracker",
    "Payment Reminder App",
    "Multi-Currency Invoice Tracker",
    "Client Invoice Dashboard",
    "Freelance Invoice App",
    "Small Business Billing App",
    "Contractor Invoice Tracker",
  ],
  authors: [{ name: 'Justin Abercrombia', url: 'http://www.github.com/jabercrombia' }],
  creator: 'Justin Abercrombia',
  openGraph: {
    images: '/dashboard.png',
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
          {children}
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_TRACKIND_ID || ''} />
    </html>
  );
}
