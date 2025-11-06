'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative">
      {/* Snowflakes for winter vibe */}
      <div className="snowflake left-10" style={{ animationDelay: '0s' }}>❄️</div>
      <div className="snowflake left-1/4" style={{ animationDelay: '2s' }}>❄️</div>
      <div className="snowflake left-1/2" style={{ animationDelay: '4s' }}>❄️</div>
      <div className="snowflake left-3/4" style={{ animationDelay: '1s' }}>❄️</div>
      <div className="snowflake right-10" style={{ animationDelay: '3s' }}>❄️</div>

      <section className="relative h-[500px] md:h-[800px] px-4 text-center flex items-center justify-center">
        <Image
          src="/hero-christmas-lights.png"
          alt="Professional Christmas light installation in The Woodlands TX - Festive home display by Thriving Oasis Landscaping"
          fill
          quality={100}
          className="absolute inset-0 z-0 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-4 text-green-300 drop-shadow-lg"
            style={{ color: 'rgb(134, 239, 172)' }}
          >
            Thriving Oasis Landscaping: Professional Christmas Light Installation in The Woodlands TX
          </motion.h1>
          <p 
            className="text-4xl md:text-6xl mb-4 font-bold text-white drop-shadow-lg"
            style={{ color: 'rgb(255, 255, 255)' }}
          >
            Brighten your holiday season with expert professional Christmas light installation in The Woodlands TX, Kingwood TX, and Montgomery County TX.
          </p>
          <p 
            className="text-2xl md:text-4xl mb-8 font-bold text-white drop-shadow-lg"
            style={{ color: 'rgb(255, 255, 255)' }}
          >
            Safe, beautiful designs tailored to your home or business!
          </p>
          <Link 
            href="/contact" 
            className="text-2xl md:text-3xl font-extrabold hover:underline mb-4 inline-block drop-shadow-lg"
            style={{ color: 'rgb(220, 38, 38)' }}
          >
            Book Free Holiday Quote for Christmas Light Installation Near Me
          </Link>
          <br />
          <Link 
            href="tel:9365492797" 
            className="text-2xl md:text-3xl font-extrabold hover:underline inline-block drop-shadow-lg"
            style={{ color: 'rgb(220, 38, 38)' }}
          >
            Call or Text: 936-549-2797
          </Link>
        </div>
      </section>
      <section className="py-16 px-4 max-w-6xl mx-auto relative z-10">
        <h2 
          className="text-3xl font-bold text-center mb-8"
          style={{ color: 'rgb(22, 101, 52)' }}  // Green-800
        >
          🎄 Professional Christmas Light Installation Services in The Woodlands TX
        </h2>
        <p 
          className="text-center mb-8"
          style={{ color: 'rgb(220, 38, 38)' }}  // Red-600
        >
          Brighten up your holiday season with expert professional Christmas light installation in The Woodlands TX, Kingwood TX, and Montgomery County TX! Our professional team handles everything from design to takedown, ensuring your home or business shines with festive cheer—safely and beautifully. Searching for &quot;Christmas lights near me&quot; or &quot;holiday light installation Kingwood TX&quot;? We&apos;ve got you covered with custom solutions.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-white rounded shadow hover:shadow-lg transition-shadow"
          >
            <h3 
              className="text-2xl mb-2"
              style={{ color: 'rgb(22, 101, 52)' }}  // Green-800
            >
              ❄️ Our Services Include
            </h3>
            <ul className="list-disc pl-6 space-y-2" style={{ color: 'rgb(220, 38, 38)' }}>
              <li>Custom designs for your property in The Woodlands TX</li>
              <li>Energy-efficient LED lights for holiday lighting services</li>
              <li>Safe pro installation for Christmas light hanging service</li>
              <li>Removal & storage post-holidays in Kingwood TX</li>
              <li>Season-long maintenance for Montgomery County TX homes</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 bg-white rounded shadow hover:shadow-lg transition-shadow"
          >
            <h3 
              className="text-2xl mb-2"
              style={{ color: 'rgb(22, 101, 52)' }}  // Green-800
            >
              🎅 Why Choose Us for Professional Christmas Light Installation?
            </h3>
            <ul className="list-disc pl-6 space-y-2" style={{ color: 'rgb(220, 38, 38)' }}>
              <li>Insured expert installers near you</li>
              <li>Hassle-free, no-ladder experience for Christmas light installers near me</li>
              <li>Designs for every budget in Kingwood TX</li>
              <li>Reliable & prompt scheduling in Montgomery County TX</li>
            </ul>
          </motion.div>
        </div>
        <div className="mt-8">
          <h3 
            className="text-2xl font-bold mb-4 text-left max-w-2xl mx-auto"
            style={{ color: 'rgb(22, 101, 52)' }}  // Green-800
          >
            ⛄ How Our Christmas Light Installation Works
          </h3>
          <ol className="list-decimal pl-6 space-y-2 text-left max-w-2xl mx-auto" style={{ color: 'rgb(220, 38, 38)' }}>
            <li>Book free consultation for professional Christmas light installation</li>
            <li>Approve your plan & digital rendering</li>
            <li>Relax during install in The Woodlands TX or nearby</li>
            <li>Enjoy your holiday glow with our holiday light installation services</li>
          </ol>
          <p 
            className="mt-4 text-center"
            style={{ color: 'rgb(220, 38, 38)' }}  // Red-600
          >
            Contact us today to book your professional Christmas light installation in The Woodlands TX, Kingwood TX, or Montgomery County TX and make this Christmas your brightest yet! Check our <Link href="/services">services</Link> or <Link href="/christmas-light-installation">dedicated Christmas page</Link> for more.
          </p>
        </div>
      </section>
    </div>
  );
}