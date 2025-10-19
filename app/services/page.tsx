'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen">
      {/* Full Page Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/leaves-falling-woodlands-tx.png"
          alt="Fall leaves in The Woodlands TX - Thriving Oasis Landscaping"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white opacity-90"></div>
      </div>

      <div className="container mx-auto p-4 relative z-10">
        <h1 
          className="text-3xl md:text-4xl font-bold mb-6 text-center drop-shadow-md"
          style={{ color: 'rgb(22, 101, 52)' }}  // Inline force green-800
        >
          Winter Landscaping Services - Professional Christmas Light Installation
        </h1>
        <p 
          className="mb-8 text-lg text-center max-w-3xl mx-auto"
          style={{ color: 'rgb(220, 38, 38)' }}  // Inline force red-600
        >
          Our winter services in The Woodlands TX, Kingwood TX, and Montgomery County TX spotlight professional Christmas light installation, complemented by pressure washing and pruning for a thriving holiday property.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-green-200"
          >
            <h3 
              className="text-2xl font-semibold mb-3"
              style={{ color: 'rgb(22, 101, 52)' }}  // Inline force green-800
            >
              Professional Christmas Light Installation
            </h3>
            <p 
              className="mb-4"
              style={{ color: 'rgb(220, 38, 38)' }}  // Inline force red-600
            >
              Custom holiday lighting for The Woodlands TX, Kingwood TX, and Montgomery County TX—includes design, safe installation, removal, and storage with commercial LEDs. Warranty included.
            </p>
            <p 
              className="font-bold text-lg"
              style={{ color: 'rgb(220, 38, 38)' }}  // Inline force red-600
            >
              Starting at $1,000/job
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-green-200"
          >
            <h3 
              className="text-2xl font-semibold mb-3"
              style={{ color: 'rgb(22, 101, 52)' }}  // Inline force green-800
            >
              Premium Christmas Light Installation
            </h3>
            <p 
              className="mb-4"
              style={{ color: 'rgb(220, 38, 38)' }}  // Inline force red-600
            >
              Enhanced designs with LED lights, maintenance, and commercial options for Montgomery County TX businesses.
            </p>
            <p 
              className="font-bold text-lg"
              style={{ color: 'rgb(220, 38, 38)' }}  // Inline force red-600
            >
              Starting at $1,500+/job
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-green-200"
          >
            <h3 
              className="text-2xl font-semibold mb-3"
              style={{ color: 'rgb(22, 101, 52)' }}  // Inline force green-800
            >
              Pressure Washing
            </h3>
            <p 
              className="mb-4"
              style={{ color: 'rgb(220, 38, 38)' }}  // Inline force red-600
            >
              Holiday prep with gutter and driveway cleaning in The Woodlands TX and Kingwood TX—bundle with professional Christmas light installation for 10% off.
            </p>
            <p 
              className="font-bold text-lg"
              style={{ color: 'rgb(220, 38, 38)' }}  // Inline force red-600
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
              style={{ color: 'rgb(22, 101, 52)' }}  // Inline force green-800
            >
              Deck Washing
            </h3>
            <p 
              className="mb-4"
              style={{ color: 'rgb(220, 38, 38)' }}  // Inline force red-600
            >
              Professional deck cleaning in The Woodlands TX, Kingwood TX, and Montgomery County TX—remove dirt, mold, and stains for a fresh winter outdoor space. Bundle with pressure washing for 10% off.
            </p>
            <p 
              className="font-bold text-lg"
              style={{ color: 'rgb(220, 38, 38)' }}  // Inline force red-600
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
              style={{ color: 'rgb(22, 101, 52)' }}  // Inline force green-800
            >
              Driveway Pressure Washing
            </h3>
            <p 
              className="mb-4"
              style={{ color: 'rgb(220, 38, 38)' }}  // Inline force red-600
            >
              Efficient driveway cleaning to remove oil, dirt, and stains in The Woodlands TX, Kingwood TX, and Montgomery County TX—perfect holiday prep add-on.
            </p>
            <p 
              className="font-bold text-lg"
              style={{ color: 'rgb(220, 38, 38)' }}  // Inline force red-600
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
              style={{ color: 'rgb(22, 101, 52)' }}  // Inline force green-800
            >
              Winter Leaf Clean Up
            </h3>
            <p 
              className="mb-4"
              style={{ color: 'rgb(220, 38, 38)' }}  // Inline force red-600
            >
              Thorough leaf removal and yard cleanup in The Woodlands TX, Kingwood TX, and Montgomery County TX—keep your property tidy and ready for winter festivities. Bundle with lights for savings.
            </p>
            <p 
              className="font-bold text-lg"
              style={{ color: 'rgb(220, 38, 38)' }}  // Inline force red-600
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
              style={{ color: 'rgb(22, 101, 52)' }}  // Inline force green-800
            >
              Winter Pruning & Cleanups
            </h3>
            <p 
              className="mb-4"
              style={{ color: 'rgb(220, 38, 38)' }}  // Inline force red-600
            >
              Native plant care in Montgomery County TX—perfect add-on to keep your yard festive and ready with Christmas light installation The Woodlands TX.
            </p>
            <p 
              className="font-bold text-lg"
              style={{ color: 'rgb(220, 38, 38)' }}  // Inline force red-600
            >
              Starting at $300/mo
            </p>
          </motion.div>
        </div>

        <p 
          className="mt-8 text-lg text-center max-w-3xl mx-auto"
          style={{ color: 'rgb(220, 38, 38)' }}  // Inline force red-600
        >
          Book professional Christmas light installation in The Woodlands TX, Kingwood TX, or Montgomery County TX or winter services today for a stunning holiday display!
        </p>
      </div>
    </div>
  );
}