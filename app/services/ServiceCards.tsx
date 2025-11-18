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
          🎄 Professional Christmas Light Installation
        </h3>
        <p 
          className="mb-4"
          style={{ color: 'rgb(220, 38, 38)' }}
        >
          Custom LED designs in The Woodlands TX—safe install, removal, storage. Warranty included for holiday light installation services.
        </p>
        <p 
          className="font-bold text-lg"
          style={{ color: 'rgb(220, 38, 38)' }}
        >
          Starting at $1,000/job
        </p>
        <Link href="/christmas-light-installation" className="text-blue-500 hover:underline">Details</Link>
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
          🎄 Premium Christmas Light Installation
        </h3>
        <p 
          className="mb-4"
          style={{ color: 'rgb(220, 38, 38)' }}
        >
          Enhanced LED setups in Kingwood TX—maintenance, commercial options for professional Christmas light hanging service.
        </p>
        <p 
          className="font-bold text-lg"
          style={{ color: 'rgb(220, 38, 38)' }}
        >
          Starting at $1,500+/job
        </p>
        <Link href="/christmas-light-installation" className="text-blue-500 hover:underline">Details</Link>
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
          ❄️ Pressure Washing
        </h3>
        <p 
          className="mb-4"
          style={{ color: 'rgb(220, 38, 38)' }}
        >
          Gutter/driveway clean in Montgomery County TX—bundle with Christmas lights near me for 10% off.
        </p>
        <p 
          className="font-bold text-lg"
          style={{ color: 'rgb(220, 38, 38)' }}
        >
          Starting at $200/job
        </p>
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
          ❄️ Deck Washing
        </h3>
        <p 
          className="mb-4"
          style={{ color: 'rgb(220, 38, 38)' }}
        >
          Remove dirt/mold in The Woodlands TX—bundle with pressure washing for 10% off.
        </p>
        <p 
          className="font-bold text-lg"
          style={{ color: 'rgb(220, 38, 38)' }}
        >
          Starting at $150/job
        </p>
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
          ❄️ Driveway Pressure Washing
        </h3>
        <p 
          className="mb-4"
          style={{ color: 'rgb(220, 38, 38)' }}
        >
          Clear oil/dirt in Kingwood TX—holiday prep add-on for Christmas light installers near me.
        </p>
        <p 
          className="font-bold text-lg"
          style={{ color: 'rgb(220, 38, 38)' }}
        >
          Starting at $150/job
        </p>
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
          🍂 Winter Leaf Clean Up
        </h3>
        <p 
          className="mb-4"
          style={{ color: 'rgb(220, 38, 38)' }}
        >
          Yard tidy in Montgomery County TX—bundle with lights for savings.
        </p>
        <p 
          className="font-bold text-lg"
          style={{ color: 'rgb(220, 38, 38)' }}
        >
          Starting at $150/job
        </p>
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
          ❄️ Winter Pruning & Cleanups
        </h3>
        <p 
          className="mb-4"
          style={{ color: 'rgb(220, 38, 38)' }}
        >
          Plant care in The Woodlands TX—festive yard add-on.
        </p>
        <p 
          className="font-bold text-lg"
          style={{ color: 'rgb(220, 38, 38)' }}
        >
          Starting at $300/mo
        </p>
      </motion.div>
    </div>
  );
}