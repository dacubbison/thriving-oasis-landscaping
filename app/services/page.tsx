import Image from 'next/image';
import Link from 'next/link';
import ServiceCards from './ServiceCards'; // Import the new client component

export const metadata = {
  title: 'Winter Landscaping Services - Professional Christmas Light Installation in The Woodlands TX',
  description: 'Our winter services in The Woodlands TX, Kingwood TX, and Montgomery County TX spotlight professional Christmas light installation, complemented by pressure washing and pruning for a thriving holiday property. Looking for "Christmas light installation near me"? We\'re your local experts.',
  alternates: {
    canonical: 'https://www.thrivingoasislandscaping.com/services',
  },
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen">
      {/* Full Page Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/leaves-falling-woodlands-tx.jpg"
          alt="Fall leaves in The Woodlands TX - Thriving Oasis Landscaping winter services background"
          fill
          quality={100}
          className="opacity-30 object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white opacity-90"></div>
      </div>

      <div className="container mx-auto p-4 relative z-10">
        <h1 
          className="text-3xl md:text-4xl font-bold mb-6 text-center drop-shadow-md"
          style={{ color: 'rgb(22, 101, 52)' }}
        >
          ❄️ Winter Landscaping Services - Professional Christmas Light Installation in The Woodlands TX
        </h1>
        <p 
          className="mb-8 text-lg text-center max-w-3xl mx-auto"
          style={{ color: 'rgb(220, 38, 38)' }}
        >
          Our winter services in The Woodlands TX, Kingwood TX, and Montgomery County TX spotlight professional Christmas light installation, complemented by pressure washing and pruning for a thriving holiday property. Looking for &quot;Christmas light installation near me&quot;? We&apos;re your local experts.
        </p>
        
        <ServiceCards /> {/* Render the client component here */}

        <p 
          className="mt-8 text-lg text-center max-w-3xl mx-auto"
          style={{ color: 'rgb(220, 38, 38)' }}
        >
          Book professional Christmas light installation in The Woodlands TX, Kingwood TX, or Montgomery County TX or winter services today for a stunning holiday display! See our <Link href="/christmas-light-installation">Christmas light details</Link>.
        </p>
      </div>
    </div>
  );
}