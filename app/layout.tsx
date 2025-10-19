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

const leaves = [
  { left: '5%', animationDelay: '0s', color: 'rgb(255, 69, 0)', emoji: '🍁' }, // Orangered
  { left: '20%', animationDelay: '3s', color: 'rgb(210, 105, 30)', emoji: '🍂' }, // Chocolate brown
  { left: '40%', animationDelay: '1s', color: 'rgb(255, 69, 0)', emoji: '🍁' }, // Orangered
  { left: '60%', animationDelay: '4s', color: 'rgb(210, 105, 30)', emoji: '🍂' }, // Chocolate brown
  { left: '80%', animationDelay: '2s', color: 'rgb(255, 69, 0)', emoji: '🍁' }, // Orangered
  { left: '15%', animationDelay: '5s', color: 'rgb(210, 105, 30)', emoji: '🍂' }, // Extra for random spread
  { left: '50%', animationDelay: '0.5s', color: 'rgb(255, 69, 0)', emoji: '🍁' }, // Extra
  { left: '75%', animationDelay: '2.5s', color: 'rgb(210, 105, 30)', emoji: '🍂' } // Extra
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Snowflakes */}
        <div className="snowflake left-10" style={{ animationDelay: '0s' }}>❄️</div>
        <div className="snowflake left-1/4" style={{ animationDelay: '2s' }}>❄️</div>
        <div className="snowflake left-1/2" style={{ animationDelay: '4s' }}>❄️</div>
        <div className="snowflake left-3/4" style={{ animationDelay: '1s' }}>❄️</div>
        <div className="snowflake right-10" style={{ animationDelay: '3s' }}>❄️</div>

        {/* Falling leaves with random positions and colors */}
        {leaves.map((leaf, i) => (
          <div key={i} className="falling-leaf" style={{ left: leaf.left, animationDelay: leaf.animationDelay, color: leaf.color }}>{leaf.emoji}</div>
        ))}

        {/* Twinkling lights */}
        <div className="twinkle-light" style={{ left: '10%', top: '20%', animationDelay: '0s' }}></div>
        <div className="twinkle-light" style={{ left: '30%', top: '40%', animationDelay: '0.5s' }}></div>
        <div className="twinkle-light" style={{ left: '50%', top: '60%', animationDelay: '1s' }}></div>
        <div className="twinkle-light" style={{ left: '70%', top: '30%', animationDelay: '1.5s' }}></div>
        <div className="twinkle-light" style={{ left: '90%', top: '50%', animationDelay: '2s' }}></div>
        <div className="twinkle-light" style={{ left: '20%', top: '70%', animationDelay: '0.2s' }}></div>
        <div className="twinkle-light" style={{ left: '40%', top: '10%', animationDelay: '0.8s' }}></div>
        <div className="twinkle-light" style={{ left: '60%', top: '80%', animationDelay: '1.2s' }}></div>
        <div className="twinkle-light" style={{ left: '80%', top: '90%', animationDelay: '1.8s' }}></div>

        <nav className="bg-green-700 text-white p-4">
          <ul className="flex flex-wrap justify-center text-lg">
            <li style={{ marginRight: '2rem' }}><Link href="/" className="hover:underline font-semibold px-2" style={{ fontSize: '1.25rem' }}>Home</Link></li>
            <li style={{ marginRight: '2rem' }}><Link href="/services" className="hover:underline font-semibold px-2" style={{ fontSize: '1.25rem' }}>Services</Link></li>
            <li><Link href="/contact" className="hover:underline font-semibold px-2" style={{ fontSize: '1.25rem' }}>Contact</Link></li>
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