'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ChristmasLightInstallation() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-christmas-lights-1.jpg"
          alt="Custom professional Christmas light installation in The Woodlands TX - Before and after"
          fill
          quality={100}
          className="opacity-40 object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-red-50 to-white opacity-90"></div>
      </div>

      <div className="container mx-auto p-4 relative z-10">
        <h1 
          className="text-3xl md:text-4xl font-bold mb-6 text-center drop-shadow-md"
          style={{ color: 'rgb(220, 38, 38)' }}
        >
          🎄 Professional Christmas Light Installation in The Woodlands TX, Kingwood TX & Montgomery County TX
        </h1>
        <p 
          className="mb-8 text-lg text-center max-w-3xl mx-auto"
          style={{ color: 'rgb(22, 101, 52)' }}
        >
          Searching for &quot;professional Christmas light installation near me&quot;? Thriving Oasis Landscaping offers expert holiday light installation services, custom designs, and hassle-free setups for homes and businesses in The Woodlands TX, Kingwood TX, and Montgomery County TX. Now&apos;s the time to book—get your free quote today!
        </p>

        <section className="mb-12">
          <h2 
            className="text-2xl font-semibold mb-4"
            style={{ color: 'rgb(220, 38, 38)' }}
          >
            Why Choose Professional Christmas Light Installation?
          </h2>
          <p style={{ color: 'rgb(22, 101, 52)' }}>
            Hiring professional Christmas light installers saves time, ensures safety, and delivers stunning results. In areas like The Woodlands TX, our services focus on premium LED lights that are energy-efficient and durable. Avoid DIY risks—let our insured team handle the ladders and wiring for a flawless holiday display.
          </p>
        </section>

        <section className="mb-12">
          <h2 
            className="text-2xl font-semibold mb-4"
            style={{ color: 'rgb(220, 38, 38)' }}
          >
            Our Christmas Light Installation Services
          </h2>
          <ul className="list-disc pl-6 space-y-2" style={{ color: 'rgb(22, 101, 52)' }}>
            <li>Custom LED designs tailored to your home in Kingwood TX</li>
            <li>Full installation, including rooflines, trees, and landscapes</li>
            <li>Maintenance and repairs throughout the season in Montgomery County TX</li>
            <li>Post-holiday removal and storage for easy next-year setup</li>
            <li>Commercial options for businesses seeking holiday lighting services</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 
            className="text-2xl font-semibold mb-4"
            style={{ color: 'rgb(220, 38, 38)' }}
          >
            Christmas Light Installation Cost Guide for The Woodlands TX
          </h2>
          <p style={{ color: 'rgb(22, 101, 52)' }}>
            Wondering &quot;how much does Christmas light installation cost&quot;? Our pricing starts at $1,000 for basic professional setups, with premium options at $1,500+ including maintenance. Factors include home size, design complexity, and location. Bundles with winter cleanups save 10-15%. Local pros charge $1000-2,000 on average, but our premium warranties, free digital renderings, and hassle-free service deliver unbeatable value—book now and glow brighter!
          </p>
        </section>

        <section className="mb-12">
          <h2 
            className="text-2xl font-semibold mb-4"
            style={{ color: 'rgb(220, 38, 38)' }}
          >
            FAQs: Holiday Light Installation Near Me
          </h2>
          <div className="space-y-4" style={{ color: 'rgb(22, 101, 52)' }}>
            <div>
              <h3 className="font-bold">How long does Christmas light installation take?</h3>
              <p>Typically 4-8 hours for a standard home in The Woodlands TX, depending on design.</p>
            </div>
            <div>
              <h3 className="font-bold">Do you provide lights or use mine?</h3>
              <p>We supply high-quality LEDs, but can install yours for holiday light hanging service in Kingwood TX.</p>
            </div>
            <div>
              <h3 className="font-bold">What&apos;s included in removal?</h3>
              <p>Safe takedown in January, plus storage options for all our clients.</p>
            </div>
            <div>
              <h3 className="font-bold">Are you insured for Christmas light installers near me?</h3>
              <p>Yes, fully insured for peace of mind.</p>
            </div>
          </div>
        </section>

        <p 
          className="mt-8 text-lg text-center max-w-3xl mx-auto"
          style={{ color: 'rgb(22, 101, 52)' }}
        >
          Ready to hire Christmas light installers in The Woodlands TX? <Link href="/contact" style={{ color: 'rgb(220, 38, 38)' }}>Book your free quote</Link> now and light up the holidays!
        </p>
      </div>
    </div>
  );
}