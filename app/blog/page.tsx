'use client';

import { motion } from 'framer-motion';

export default function Blog() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center drop-shadow-md" style={{ color: 'rgb(22, 101, 52)' }}>
        Top 5 Landscaping Ideas for The Woodlands TX Homes
      </h1>
      <p className="mb-8 text-lg text-center max-w-3xl mx-auto" style={{ color: 'rgb(34, 197, 94)' }}>
        Searching for &quot;landscaping near me&quot; in The Woodlands TX? These ideas will transform your yard—book our pro services for hassle-free oasis makeovers!
      </p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(22, 101, 52)' }}>1. Native Plant Gardens for Low-Maintenance Beauty 🌵</h2>
        <p style={{ color: 'rgb(34, 197, 94)' }}>
          Embrace Texas natives like black-eyed Susans and lantana for a drought-resistant garden that thrives in The Woodlands TX heat. Mix in mulched beds for weed control and water savings—perfect for eco-conscious homeowners. This setup cuts maintenance while boosting pollinators and curb appeal. Pro tip: Layer with river rocks for texture. If you're not green-thumbed, our professional landscaping in The Woodlands TX handles design and install—sustainable, beautiful, and with ongoing care options.
        </p>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-12">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(22, 101, 52)' }}>2. Lush Lawn Transformations with Smart Irrigation 💦</h2>
        <p style={{ color: 'rgb(34, 197, 94)' }}>
          Upgrade to Bermuda or St. Augustine grass with efficient drip irrigation for a verdant lawn that stays green without wasting water. In Kingwood TX, where humidity rules, add aeration for root health and overseed for year-round color. This idea creates a play-ready yard that's the envy of the block. Searching for &quot;lawn care services Kingwood TX&quot;? We've got you—our team installs systems pro-style, with maintenance plans to keep it thriving.
        </p>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-12">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(22, 101, 52)' }}>3. Patio & Hardscape Retreats for Outdoor Living 🪑</h2>
        <p style={{ color: 'rgb(34, 197, 94)' }}>
          Build a flagstone patio with pergolas and fire pits for a cozy outdoor space tailored to Montgomery County TX evenings. Surround with low hedges and lighting for ambiance—ideal for BBQs or chill sessions. If &quot;landscape design Montgomery County TX&quot; is your search, hit us up—our bundles include hardscaping with eco-materials, ensuring durability and style.
        </p>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mb-12">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(22, 101, 52)' }}>4. Mulch Magic for Healthy Beds & Borders 🌿</h2>
        <p style={{ color: 'rgb(34, 197, 94)' }}>
          Apply pine bark mulch around flower beds and trees to retain moisture and suppress weeds—add colorful perennials for pops of vibrancy. In Conroe TX soils, this boosts nutrients while preventing erosion. Pro installs ensure even coverage without volcano mulching. Our &quot;mulching services near me&quot; include custom blends to match your yard's needs.
        </p>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mb-12">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(22, 101, 52)' }}>5. Tree & Shrub Accents for Structure & Shade 🌳</h2>
        <p style={{ color: 'rgb(34, 197, 94)' }}>
          Plant crepe myrtles or live oaks for shade and focal points, pruned for shape and health. In The Woodlands TX, this adds privacy and wind breaks. If you're typing &quot;tree trimming near me&quot; for pros, our team handles planting to pruning—sustainable choices for long-term beauty.
        </p>
      </motion.div>
      <p className="mt-8 text-lg text-center max-w-3xl mx-auto" style={{ color: 'rgb(34, 197, 94)' }}>
        Ready to green up your space? Call 936-549-2797 for our professional landscaping services in The Woodlands TX, Kingwood TX, Conroe TX, or Montgomery County TX—free quotes, bundles, and oasis vibes await!
      </p>
    </div>
  );
}