import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import WelcomeModal from "../app/components/dashboard/welcome-modal";
import Footer from "./components/layout/footer";
import { GoogleAnalytics } from '@next/third-parties/google'


export const metadata: Metadata = {
  title: `Invoice Tracker`,
  description: `I built an Invoice Tracker using Next.js with PostgreSQL integration, leveraging sample datasets to manage and visualize financial data using MUI. Deployed on Vercel, the app offers seamless invoice tracking with a responsive UI and real-time insights.`,
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <WelcomeModal />
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_TRACKIND_ID || ''} />
    </html>
  );
}
