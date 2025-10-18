'use client';

import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [state, handleSubmit] = useForm('mldpadvy');

  if (state.succeeded) {
    return (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center text-green-600"
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
      className="container mx-auto p-4"
    >
      <h1 className="text-3xl font-bold mb-4 text-green-800">Contact Us for Professional Christmas Light Installation</h1>
      <p className="mb-6">Get a free quote for professional Christmas light installation in The Woodlands TX, Kingwood TX, or Montgomery County TX, plus winter landscaping services.</p>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input id="name" type="text" name="name" className="w-full p-2 border rounded" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email Address</label>
          <input id="email" type="email" name="email" className="w-full p-2 border rounded" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-1">Phone</label>
          <input id="phone" type="tel" name="phone" className="w-full p-2 border rounded" required />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Message</label>
          <textarea id="message" name="message" className="w-full p-2 border rounded h-32" required />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        <button type="submit" disabled={state.submitting} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Send It!
        </button>
      </form>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-green-800">Book a Free Holiday Audit</h2>
        <div className="calendly-inline-widget" data-url="https://calendly.com/YOUR_CALENDLY_LINK" style={{ minWidth: '320px', height: '630px' }}></div>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </div>
    </motion.div>
  );
}