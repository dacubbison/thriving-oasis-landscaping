'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative">
      <section className="relative h-[500px] md:h-[800px] px-4 text-center flex items-center justify-center">
        <Image
          src="/hero-landscaping.jpg"
          alt="Professional landscaping in The Woodlands TX - Lush lawn oasis transformation by Thriving Oasis Landscaping"
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
            Thriving Oasis Landscaping: Expert Landscaping & Lawn Care in The Woodlands TX
          </motion.h1>
          <p 
            className="text-4xl md:text-6xl mb-4 font-bold text-white drop-shadow-lg"
            style={{ color: 'rgb(255, 255, 255)' }}
          >
            Transform your yard into a thriving oasis with professional landscaping services in The Woodlands TX, Kingwood TX, Conroe TX, and Montgomery County TX.
          </p>
          <p 
            className="text-2xl md:text-4xl mb-8 font-bold text-white drop-shadow-lg"
            style={{ color: 'rgb(255, 255, 255)' }}
          >
            Sustainable, beautiful designs tailored to your home or business!
          </p>
          <Link 
            href="/contact" 
            className="text-2xl md:text-3xl font-extrabold hover:underline mb-4 inline-block drop-shadow-lg"
            style={{ color: 'rgb(34, 197, 94)' }} // Green-500 for CTA
          >
            Book Free Quote for Landscaping Services Near Me
          </Link>
          <br />
          <Link 
            href="tel:9365492797" 
            className="text-2xl md:text-3xl font-extrabold hover:underline inline-block drop-shadow-lg"
            style={{ color: 'rgb(34, 197, 94)' }} // Green-500
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
          🌿 Professional Landscaping & Lawn Care Services in The Woodlands TX
        </h2>
        <p 
          className="text-center mb-8"
          style={{ color: 'rgb(34, 197, 94)' }}  // Green-500
        >
          Elevate your outdoor space with expert landscaping and lawn care in The Woodlands TX, Kingwood TX, Conroe TX, and Montgomery County TX! Our professional team handles everything from design to maintenance, creating sustainable oases that thrive year-round. Searching for &quot;lawn care near me&quot; or &quot;landscaping services Kingwood TX&quot;? We&apos;ve got custom solutions for stunning results.
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
              🌱 Our Services Include
            </h3>
            <ul className="list-disc pl-6 space-y-2" style={{ color: 'rgb(34, 197, 94)' }}>
              <li>Custom landscape design for your property in The Woodlands TX</li>
              <li>Weekly lawn mowing and maintenance</li>
              <li>Mulching, weed control, and fertilizing</li>
              <li>Irrigation installation and tree trimming in Kingwood TX</li>
              <li>Hardscaping and seasonal cleanups in Montgomery County TX</li>
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
              🏡 Why Choose Us for Landscaping & Lawn Care?
            </h3>
            <ul className="list-disc pl-6 space-y-2" style={{ color: 'rgb(34, 197, 94)' }}>
              <li>Experienced, insured landscapers near you</li>
              <li>Eco-friendly practices for sustainable results</li>
              <li>Affordable plans for every budget in Kingwood TX</li>
              <li>Reliable scheduling and maintenance in Montgomery County TX</li>
            </ul>
          </motion.div>
        </div>
        <div className="mt-8">
          <h3 
            className="text-2xl font-bold mb-4 text-left max-w-2xl mx-auto"
            style={{ color: 'rgb(22, 101, 52)' }}  // Green-800
          >
            🌳 How Our Landscaping Process Works
          </h3>
          <ol className="list-decimal pl-6 space-y-2 text-left max-w-2xl mx-auto" style={{ color: 'rgb(34, 197, 94)' }}>
            <li>Book a free consultation for professional landscaping</li>
            <li>Approve your custom design plan</li>
            <li>Relax during expert installation in The Woodlands TX or nearby</li>
            <li>Enjoy your thriving oasis with ongoing care</li>
          </ol>
          <p 
            className="mt-4 text-center"
            style={{ color: 'rgb(34, 197, 94)' }}  // Green-500
          >
            Contact us today to start your landscaping project in The Woodlands TX, Kingwood TX, Conroe TX, or Montgomery County TX and create the yard of your dreams! Check our <Link href="/services">services</Link> or <Link href="/gallery">gallery</Link> for more inspiration.
          </p>
        </div>
      </section>
    </div>
  );
}