import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script';
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Professional Landscaping & Lawn Care in The Woodlands, Kingwood, Conroe & Montgomery County TX | Thriving Oasis Landscaping",
  description: "Expert landscaping and lawn services: mowing, mulching, design, and maintenance. Serving The Woodlands TX, Kingwood TX, Conroe TX, and Montgomery County TX. Free quotes: 936-549-2797.",
  keywords: "landscaping The Woodlands TX, lawn care Kingwood TX, landscape design Montgomery County TX, lawn mowing Conroe TX, professional landscapers near me, mulching services The Woodlands TX, irrigation installation Kingwood TX, eco-friendly lawn care Montgomery County TX",
  openGraph: {
    title: "Professional Landscaping & Lawn Care in The Woodlands TX | Thriving Oasis Landscaping",
    description: "Transform your yard with expert landscaping services in The Woodlands, Kingwood, Conroe, and Montgomery County TX. Custom designs, mowing, mulching, and more.",
    url: "https://thrivingoasislandscaping.com",
    siteName: "Thriving Oasis Landscaping",
    images: [
      {
        url: "/hero-landscaping.jpg",
        width: 800,
        height: 600,
        alt: "Professional landscaping in The Woodlands TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: "index, follow",
  metadataBase: new URL('https://thrivingoasislandscaping.com'), // Kills the metadataBase warning
};

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
              "description": "Professional landscaping and lawn care services in The Woodlands TX, Kingwood TX, Conroe TX, and Montgomery County TX. Expert mowing, mulching, design, and maintenance.",
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
              "image": "/hero-landscaping.jpg",
              "sameAs": ["https://www.google.com/business/thrivingoasislandscaping"]
            })
          }}
        />
        <link rel="preload" as="image" href="/hero-landscaping.jpg" /> {/* Preload hero for LCP pop */}
      </head>
      <body className={inter.className}>
        <nav className="bg-green-700 text-white p-4">
          <ul className="flex flex-wrap justify-center text-lg">
            <li style={{ marginRight: '2rem' }}><Link href="/" className="hover:underline font-semibold px-2" style={{ fontSize: '1.25rem' }}>Home</Link></li>
            <li style={{ marginRight: '2rem' }}><Link href="/services" className="hover:underline font-semibold px-2" style={{ fontSize: '1.25rem' }}>Services</Link></li>
            <li style={{ marginRight: '2rem' }}><Link href="/about" className="hover:underline font-semibold px-2" style={{ fontSize: '1.25rem' }}>About</Link></li>
            <li style={{ marginRight: '2rem' }}><Link href="/gallery" className="hover:underline font-semibold px-2" style={{ fontSize: '1.25rem' }}>Gallery</Link></li>
            <li style={{ marginRight: '2rem' }}><Link href="/blog" className="hover:underline font-semibold px-2" style={{ fontSize: '1.25rem' }}>Blog</Link></li>
            <li><Link href="/contact" className="hover:underline font-semibold px-2" style={{ fontSize: '1.25rem' }}>Contact</Link></li>
          </ul>
        </nav>
        {children}
        <footer className="bg-green-700 text-white p-4 text-center mt-8">
          <p>&copy; 2025 Thriving Oasis Landscaping | Part of D&D Mobile Services TX | <Link href="https://www.ddmobileservicestx.com" className="hover:underline">Back to Hub</Link></p>
          <p>Professional landscaping and lawn care in The Woodlands TX, Kingwood TX, Conroe TX, and Montgomery County TX</p>
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