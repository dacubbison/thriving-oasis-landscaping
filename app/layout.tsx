import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thriving Oasis Landscaping - Professional Christmas Light Installation in The Woodlands, Kingwood & Montgomery County TX",
  description: "Expert professional Christmas light installation services in The Woodlands TX, Kingwood TX, and Montgomery County TX. Winter landscaping including pressure washing and pruning for a festive, thriving property.",
  keywords: "professional Christmas light installation The Woodlands TX, professional Christmas light installation Kingwood TX, professional Christmas light installation Montgomery County TX, Christmas light installation The Woodlands TX, Christmas light installation Kingwood TX, Christmas light installation Montgomery County TX, winter landscaping The Woodlands TX, pressure washing Montgomery County TX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-green-700 text-white p-4">
          <ul className="flex flex-wrap space-x-16 justify-center text-lg">
            <li><Link href="/" className="hover:underline font-semibold px-2">Home</Link></li>
            <li><Link href="/services" className="hover:underline font-semibold px-2">Services</Link></li>
            <li><Link href="/contact" className="hover:underline font-semibold px-2">Contact</Link></li>
          </ul>
        </nav>
        {children}
        <footer className="bg-green-700 text-white p-4 text-center mt-8">
          <p>&copy; 2025 Thriving Oasis Landscaping | Part of D&D Mobile Services TX | <Link href="https://www.ddmobileservicestx.com" className="hover:underline">Back to Hub</Link></p>
          <p>Professional Christmas light installation in The Woodlands, Kingwood, and Montgomery County TX</p>
        </footer>
      </body>
    </html>
  );
}