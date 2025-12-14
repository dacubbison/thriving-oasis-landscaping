'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-green-200"
      >
        <h3 
          className="text-2xl font-semibold mb-3"
          style={{ color: 'rgb(22, 101, 52)' }}
        >
          🌱 Lawn Mowing & Maintenance
        </h3>
        <p 
          className="mb-4"
          style={{ color: 'rgb(34, 197, 94)' }}
        >
          Weekly/bi-weekly cuts, edging, and fertilizing in The Woodlands TX—eco-friendly options for healthy lawns year-round.
        </p>
        <p 
          className="font-bold text-lg"
          style={{ color: 'rgb(34, 197, 94)' }}
        >
          Starting at $40/week
        </p>
        <Link href="/services/lawn-mowing" className="text-blue-500 hover:underline">Details</Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-green-200"
      >
        <h3 
          className="text-2xl font-semibold mb-3"
          style={{ color: 'rgb(22, 101, 52)' }}
        >
          🌿 Mulching & Bed Care
        </h3>
        <p 
          className="mb-4"
          style={{ color: 'rgb(34, 197, 94)' }}
        >
          Organic mulch application, weed control, and seasonal refreshes in Kingwood TX—enhances soil health and curb appeal.
        </p>
        <p 
          className="font-bold text-lg"
          style={{ color: 'rgb(34, 197, 94)' }}
        >
          Starting at $200/job
        </p>
        <Link href="/services/mulching" className="text-blue-500 hover:underline">Details</Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-green-200"
      >
        <h3 
          className="text-2xl font-semibold mb-3"
          style={{ color: 'rgb(22, 101, 52)' }}
        >
          🏡 Landscape Design & Installation
        </h3>
        <p 
          className="mb-4"
          style={{ color: 'rgb(34, 197, 94)' }}
        >
          Custom plans with plants, hardscaping, and irrigation in Montgomery County TX—transform your yard into an oasis.
        </p>
        <p 
          className="font-bold text-lg"
          style={{ color: 'rgb(34, 197, 94)' }}
        >
          Starting at $1,000/project
        </p>
        <Link href="/services/landscape-design" className="text-blue-500 hover:underline">Details</Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-green-200"
      >
        <h3 
          className="text-2xl font-semibold mb-3"
          style={{ color: 'rgb(22, 101, 52)' }}
        >
          💦 Irrigation & Sprinkler Systems
        </h3>
        <p 
          className="mb-4"
          style={{ color: 'rgb(34, 197, 94)' }}
        >
          Efficient installs and repairs in Conroe TX—save water and keep your lawn lush. Bundle for 10% off.
        </p>
        <p 
          className="font-bold text-lg"
          style={{ color: 'rgb(34, 197, 94)' }}
        >
          Starting at $500/install
        </p>
        <Link href="/services/irrigation" className="text-blue-500 hover:underline">Details</Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-green-200"
      >
        <h3 
          className="text-2xl font-semibold mb-3"
          style={{ color: 'rgb(22, 101, 52)' }}
        >
          🌳 Tree Trimming & Pruning
        </h3>
        <p 
          className="mb-4"
          style={{ color: 'rgb(34, 197, 94)' }}
        >
          Safe, expert care for trees and shrubs in The Woodlands TX—promote growth and safety.
        </p>
        <p 
          className="font-bold text-lg"
          style={{ color: 'rgb(34, 197, 94)' }}
        >
          Starting at $150/job
        </p>
        <Link href="/services/tree-trimming" className="text-blue-500 hover:underline">Details</Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-green-200"
      >
        <h3 
          className="text-2xl font-semibold mb-3"
          style={{ color: 'rgb(22, 101, 52)' }}
        >
          🍂 Seasonal Cleanups
        </h3>
        <p 
          className="mb-4"
          style={{ color: 'rgb(34, 197, 94)' }}
        >
          Leaf removal, debris clearing, and prep in Kingwood TX—keep your yard pristine all year.
        </p>
        <p 
          className="font-bold text-lg"
          style={{ color: 'rgb(34, 197, 94)' }}
        >
          Starting at $150/job
        </p>
        <Link href="/services/seasonal-cleanups" className="text-blue-500 hover:underline">Details</Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-green-200"
      >
        <h3 
          className="text-2xl font-semibold mb-3"
          style={{ color: 'rgb(22, 101, 52)' }}
        >
          🧹 Pressure Washing Add-On
        </h3>
        <p 
          className="mb-4"
          style={{ color: 'rgb(34, 197, 94)' }}
        >
          Driveways, decks, and patios cleaned in Montgomery County TX—bundle with any service for 10% off.
        </p>
        <p 
          className="font-bold text-lg"
          style={{ color: 'rgb(34, 197, 94)' }}
        >
          Starting at $200/job
        </p>
        <Link href="/services/pressure-washing" className="text-blue-500 hover:underline">Details</Link>
      </motion.div>
    </div>
  );
}