import Image from 'next/image';
import Link from 'next/link';
import ServiceCards from './ServiceCards'; // Import the new client component

export const metadata = {
  title: 'Professional Landscaping Services - Lawn Care & Design in The Woodlands TX',
  description: 'Our landscaping services in The Woodlands TX, Kingwood TX, Conroe TX, and Montgomery County TX include lawn mowing, mulching, irrigation, and custom designs for thriving outdoor spaces. Looking for "landscapers near me"? We\'re your local experts.',
  alternates: {
    canonical: 'https://www.thrivingoasislandscaping.com/services',
  },
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen">
      {/* Full Page Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-green-100 to-white opacity-90"></div>

      <div className="container mx-auto p-4 relative z-10">
        <h1 
          className="text-3xl md:text-4xl font-bold mb-6 text-center drop-shadow-md"
          style={{ color: 'rgb(22, 101, 52)' }}
        >
          🌿 Professional Landscaping Services - Lawn Care & Design in The Woodlands TX
        </h1>
        <p 
          className="mb-8 text-lg text-center max-w-3xl mx-auto"
          style={{ color: 'rgb(34, 197, 94)' }}
        >
          Our landscaping services in The Woodlands TX, Kingwood TX, Conroe TX, and Montgomery County TX include expert lawn mowing, mulching, irrigation, and custom designs for sustainable, thriving outdoor spaces. Looking for &quot;landscapers near me&quot; or &quot;lawn care services Kingwood TX&quot;? We&apos;re your local pros for beautiful results.
        </p>
        
        <ServiceCards /> {/* Render the client component here */}

        <p 
          className="mt-8 text-lg text-center max-w-3xl mx-auto"
          style={{ color: 'rgb(34, 197, 94)' }}
        >
          Book professional landscaping or lawn care in The Woodlands TX, Kingwood TX, Conroe TX, or Montgomery County TX today for your dream oasis! See our <Link href="/gallery">gallery</Link> for inspiration.
        </p>
      </div>
    </div>
  );
}