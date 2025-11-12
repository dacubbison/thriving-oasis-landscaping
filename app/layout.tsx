import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script';
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Professional Christmas Light Installation in The Woodlands, Kingwood & Montgomery County TX | Thriving Oasis Landscaping",
  description: "Get stunning, hassle-free professional Christmas light installation for your home. Serving The Woodlands TX, Kingwood TX, and Montgomery County TX. Free quotes: 936-549-2797.",
  keywords: "professional Christmas light installation The Woodlands TX, Christmas light installation Kingwood TX, holiday light installation Montgomery County TX, Christmas lights near me, professional Christmas light installation near me, Christmas light hanging service The Woodlands TX, holiday lighting services Kingwood TX",
  openGraph: {
    title: "Professional Christmas Light Installation in The Woodlands TX | Thriving Oasis Landscaping",
    description: "Expert holiday light installation services in The Woodlands, Kingwood, and Montgomery County TX. Custom designs, installation, and removal.",
    url: "https://thrivingoasislandscaping.com",
    siteName: "Thriving Oasis Landscaping",
    images: [
      {
        url: "/hero-christmas-lights.jpg",
        width: 800,
        height: 600,
        alt: "Professional Christmas light installation in The Woodlands TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: "index, follow",
  metadataBase: new URL('https://thrivingoasislandscaping.com'), // Kills the metadataBase warning
};

const leaves = [
  { left: '5%', animationDelay: '0s', color: 'rgb(255, 69, 0)', emoji: '🍁' }, // Orangered
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Thriving Oasis Landscaping",
              "description": "Professional Christmas light installation services in The Woodlands TX, Kingwood TX, and Montgomery County TX.",
              "url": "https://thrivingoasislandscaping.com",
              "telephone": "936-549-2797",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "The Woodlands",
                "addressRegion": "TX",
                "postalCode": "77381",
                "addressCountry": "US"
              },
              "openingHours": "Mo-Su 08:00-20:00",
              "priceRange": "$$",
              "image": "/hero-christmas-lights.jpg",
              "sameAs": ["https://www.google.com/business/thrivingoasislandscaping"]
            })
          }}
        />
        <link rel="preload" as="image" href="/hero-christmas-lights.jpg" /> {/* Preload hero for LCP pop */}
      </head>
      <body className={inter.className}>
        {/* Snowflakes */}
        <div className="snowflake left-1/2" style={{ animationDelay: '4s' }}>❄️</div>

        {/* Falling leaves with random positions and colors */}
        {leaves.map((leaf, i) => (
          <div key={i} className="falling-leaf" style={{ left: leaf.left, animationDelay: leaf.animationDelay, color: leaf.color }}>{leaf.emoji}</div>
        ))}

        {/* Twinkling lights */}
        <div className="twinkle-light" style={{ left: '50%', top: '60%', animationDelay: '1s' }}></div>

        <nav className="bg-green-700 text-white p-4">
          <ul className="flex flex-wrap justify-center text-lg">
            <li style={{ marginRight: '2rem' }}><Link href="/" className="hover:underline font-semibold px-2" style={{ fontSize: '1.25rem' }}>Home</Link></li>
            <li style={{ marginRight: '2rem' }}><Link href="/services" className="hover:underline font-semibold px-2" style={{ fontSize: '1.25rem' }}>Services</Link></li>
            <li style={{ marginRight: '2rem' }}><Link href="/christmas-light-installation" className="hover:underline font-semibold px-2" style={{ fontSize: '1.25rem' }}>Christmas Lights</Link></li>
            <li style={{ marginRight: '2rem' }}><Link href="/blog" className="hover:underline font-semibold px-2" style={{ fontSize: '1.25rem' }}>Blog</Link></li>
            <li><Link href="/contact" className="hover:underline font-semibold px-2" style={{ fontSize: '1.25rem' }}>Contact</Link></li>
          </ul>
        </nav>
        {children}
        <footer className="bg-green-700 text-white p-4 text-center mt-8">
          <p>&copy; 2025 Thriving Oasis Landscaping | Part of D&D Mobile Services TX | <Link href="https://www.ddmobileservicestx.com" className="hover:underline">Back to Hub</Link></p>
          <p>Professional Christmas light installation in The Woodlands TX, Kingwood TX, and Montgomery County TX</p>
        </footer>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-26QRM1ZFXV" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-26QRM1ZFXV');
          `}
        </Script>
      </body>
    </html>
  );
}