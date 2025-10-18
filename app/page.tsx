'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      <section className="bg-green-500 text-white py-20 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-4"
        >
          Thriving Oasis Landscaping: Professional Christmas Light Installation Experts
        </motion.h1>
        <p className="text-xl mb-8">Get the best professional Christmas light installation in The Woodlands TX, Kingwood TX, and Montgomery County TX. Festive designs, safe installs, and winter landscaping to thrive through the holidays!</p>
        <Link href="/contact" className="bg-green-700 px-8 py-3 rounded-lg hover:bg-green-800">Book Free Christmas Light Quote</Link>
      </section>
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Professional Christmas Light Installation in The Woodlands, Kingwood & Montgomery County TX</h2>
        <p className="text-center mb-8">Our expert services make your home glow with holiday cheer. From custom professional Christmas light installation in The Woodlands TX to full setups in Kingwood TX and Montgomery County TX, we handle it all with warranty and removal options.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-white rounded shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl mb-2">Christmas Light Installation The Woodlands TX</h3>
            <p>Custom designs for gated homes—professional and hassle-free.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 bg-white rounded shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl mb-2">Christmas Light Installation Kingwood TX</h3>
            <p>Brighten your neighborhood with expert installs and winter add-ons.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 bg-white rounded shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl mb-2">Christmas Light Installation Montgomery County TX</h3>
            <p>Commercial and residential—professional service for the holidays.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}