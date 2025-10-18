'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <section className="relative bg-green-500 text-white py-40 px-4 text-center">
        <Image
          src="/hero-christmas-lights.jpg"
          alt="Professional Christmas Light Installation in The Woodlands TX - Festive home display"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0 opacity-70"
        />
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold mb-4"
          >
            Thriving Oasis Landscaping: Professional Christmas Light Installation
          </motion.h1>
          <p className="text-xl mb-8">Brighten your holiday season with expert Christmas light installation in The Woodlands TX, Kingwood TX, and Montgomery County TX. Safe, beautiful designs tailored to your home or business!</p>
          <Link href="/contact" className="bg-green-700 px-8 py-3 rounded-lg hover:bg-green-800">Book Free Holiday Quote</Link>
        </div>
      </section>
      <section className="py-16 px-4 max-w-6xl mx-auto bg-gradient-to-b from-green-100 to-white">
        <h2 className="text-3xl font-bold text-center mb-8">Professional Christmas Light Installation Services</h2>
        <p className="text-center mb-8">Brighten up your holiday season with expert Christmas light installation! Our professional team handles everything from design to takedown, ensuring your home or business shines with festive cheer—safely and beautifully.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-white rounded shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl mb-2">Our Services Include</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Custom lighting design tailored to your property</li>
              <li>High-quality, energy-efficient LED lights</li>
              <li>Safe and secure installation by trained professionals</li>
              <li>Timely removal and storage options after the holidays</li>
              <li>Maintenance and troubleshooting throughout the season</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 bg-white rounded shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl mb-2">Why Choose Us?</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fully insured and experienced installers</li>
              <li>Hassle-free, no-ladder experience for you</li>
              <li>Creative designs to fit any style or budget</li>
              <li>Reliable scheduling and prompt service</li>
            </ul>
          </motion.div>
        </div>
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold mb-4">How It Works</h3>
          <ol className="list-decimal pl-6 space-y-2 text-left max-w-2xl mx-auto">
            <li>Schedule a free consultation and design estimate</li>
            <li>Approve your custom lighting plan</li>
            <li>Sit back while we install and illuminate your property</li>
            <li>Enjoy a dazzling, worry-free holiday display</li>
          </ol>
          <p className="mt-4">Contact us today to book your installation and make this Christmas your brightest yet!</p>
        </div>
      </section>
    </div>
  );
}