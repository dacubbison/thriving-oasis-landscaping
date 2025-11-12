'use client';

import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';

// Declare fbq as global for TypeScript - Fixes 'Cannot find name fbq' build error
declare global {
  interface Window {
    fbq: (command: string, eventName: string, params?: Record<string, unknown>) => void;
  }
}

export default function ContactPage() {
  const [state, handleSubmit] = useForm('mldpadvy');

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e);
    // Pixel Lead event on submit - Fires on form submission
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead');
    }
  };

  if (state.succeeded) {
    return (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
        style={{ color: 'rgb(22, 101, 52)' }}  // Green-600
      >
        Awesome! Message sent—we&apos;ll hit you back ASAP for that free Christmas light quote.
      </motion.p>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto p-4 relative"
    >
      {/* Snowflakes */}
      <div className="snowflake left-10" style={{ animationDelay: '0s' }}>❄️</div>
      <div className="snowflake left-1/2" style={{ animationDelay: '2s' }}>❄️</div>
      <div className="snowflake right-10" style={{ animationDelay: '4s' }}>❄️</div>

      <h1 
        className="text-3xl font-bold mb-4"
        style={{ color: 'rgb(22, 101, 52)' }}  // Green-800
      >
        🎄 Contact Us for Professional Christmas Light Installation in The Woodlands TX
      </h1>
      <p 
        className="mb-6"
        style={{ color: 'rgb(220, 38, 38)' }}  // Red-600
      >
        Get a free quote for professional Christmas light installation in The Woodlands TX, Kingwood TX, or Montgomery County TX, plus winter landscaping services. Whether it&apos;s &quot;holiday light installation near me&quot; or custom designs, we&apos;re here.
      </p>
      <form onSubmit={handleFormSubmit} className="space-y-4 max-w-lg mx-auto">
        <div>
          <label htmlFor="name" className="block mb-1" style={{ color: 'rgb(22, 101, 52)' }}>Name</label>
          <input id="name" type="text" name="name" className="w-full p-2 border rounded" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1" style={{ color: 'rgb(22, 101, 52)' }}>Email Address</label>
          <input id="email" type="email" name="email" className="w-full p-2 border rounded" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-1" style={{ color: 'rgb(22, 101, 52)' }}>Phone</label>
          <input id="phone" type="tel" name="phone" className="w-full p-2 border rounded" required />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1" style={{ color: 'rgb(22, 101, 52)' }}>Message (e.g., Christmas light installation cost The Woodlands)</label>
          <textarea id="message" name="message" className="w-full p-2 border rounded h-32" required />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        <button type="submit" disabled={state.submitting} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Send It!
        </button>
      </form>
    </motion.div>
  );
}