'use client';

import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-center" style={{ color: 'rgb(220, 38, 38)' }}>
        Privacy Policy for Thriving Oasis Landscaping
      </h1>
      <p className="mb-4 text-center">Effective Date: November 12, 2025</p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(22, 101, 52)' }}>Who We Are</h2>
        <p>Thriving Oasis Landscaping provides professional Christmas light installation, lawn care, and pressure washing services in The Woodlands TX, Kingwood TX, and Montgomery County TX. We respect your privacy and are committed to protecting your personal information.</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(22, 101, 52)' }}>Information We Collect</h2>
        <p>We collect info you provide in forms or inquiries, like name, email, phone, ZIP code, and service preferences (e.g., Christmas light styles). This helps us send free quotes, schedule installs, and improve our oasis services—no spam, ever.</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(22, 101, 52)' }}>How We Use Your Info</h2>
        <p>Your data's for quotes, bookings, and bundle offers (lights + lawn/pressure washing savings). We don't sell it—period. Shared only with our team or trusted partners for services (e.g., payment processors if booking online later).</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(22, 101, 52)' }}>Your Rights & Contact</h2>
        <p>Request access, updates, or deletion anytime—email or call 936-549-2797. We're TX-based, compliant with CCPA and all that good stuff.</p>
        <p className="mt-4">Questions? Hit us at <Link href="/contact" className="text-red-600 hover:underline">Contact</Link>—let's glow your holidays while keeping things private!</p>
      </section>
      
      <p className="text-center">© 2025 Thriving Oasis Landscaping — Turning yards into oases, one privacy-respecting quote at a time. 🎄</p>
    </div>
  );
}