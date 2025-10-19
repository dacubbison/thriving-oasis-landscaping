export default function ServicesPage() {
  return (
    <div className="container mx-auto p-4 bg-gradient-to-b from-green-100 to-white">
      <h1 className="text-3xl font-bold mb-4 text-green-800">Winter Landscaping Services - Professional Christmas Light Installation Focus</h1>
      <p className="mb-6 text-red-600">Our winter services in The Woodlands TX, Kingwood TX, and Montgomery County TX spotlight professional Christmas light installation, complemented by pressure washing and pruning for a thriving holiday property.</p>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-green-100">
            <th className="border p-2 text-left">Service</th>
            <th className="border p-2 text-left">Description</th>
            <th className="border p-2 text-left">Starting Price</th>
          </tr>
        </thead>
        <tbody>
          <tr id="lights" className="hover:bg-green-50 transition-colors">
            <td className="border p-2 font-semibold text-green-800">Professional Christmas Light Installation</td>
            <td className="border p-2 text-red-600">Custom holiday lighting for The Woodlands TX, Kingwood TX, and Montgomery County TX—includes design, safe installation, removal, and storage with commercial LEDs. Warranty included.</td>
            <td className="border p-2 text-red-600">$1,000/job</td>
          </tr>
          <tr className="hover:bg-green-50 transition-colors">
            <td className="border p-2 font-semibold text-green-800">Premium Christmas Light Installation</td>
            <td className="border p-2 text-red-600">Enhanced designs with LED lights, maintenance, and commercial options for Montgomery County TX businesses.</td>
            <td className="border p-2 text-red-600">$1,500+/job</td>
          </tr>
          <tr className="hover:bg-green-50 transition-colors">
            <td className="border p-2 font-semibold text-green-800">Pressure Washing</td>
            <td className="border p-2 text-red-600">Holiday prep with gutter and driveway cleaning in The Woodlands TX and Kingwood TX—bundle with professional Christmas light installation for 10% off.</td>
            <td className="border p-2 text-red-600">$200/job</td>
          </tr>
          <tr className="hover:bg-green-50 transition-colors">
            <td className="border p-2 font-semibold text-green-800">Deck Washing</td>
            <td className="border p-2 text-red-600">Professional deck cleaning in The Woodlands TX, Kingwood TX, and Montgomery County TX—remove dirt, mold, and stains for a fresh winter outdoor space. Bundle with pressure washing for 10% off.</td>
            <td className="border p-2 text-red-600">$150/job</td>
          </tr>
          <tr className="hover:bg-green-50 transition-colors">
            <td className="border p-2 font-semibold text-green-800">Driveway Pressure Washing</td>
            <td className="border p-2 text-red-600">Efficient driveway cleaning to remove oil, dirt, and stains in The Woodlands TX, Kingwood TX, and Montgomery County TX—perfect holiday prep add-on.</td>
            <td className="border p-2 text-red-600">$150/job</td>
          </tr>
          <tr className="hover:bg-green-50 transition-colors">
            <td className="border p-2 font-semibold text-green-800">Winter Leaf Clean Up</td>
            <td className="border p-2 text-red-600">Thorough leaf removal and yard cleanup in The Woodlands TX, Kingwood TX, and Montgomery County TX—keep your property tidy and ready for winter festivities. Bundle with lights for savings.</td>
            <td className="border p-2 text-red-600">$150/job</td>
          </tr>
          <tr className="hover:bg-green-50 transition-colors">
            <td className="border p-2 font-semibold text-green-800">Winter Pruning & Cleanups</td>
            <td className="border p-2 text-red-600">Native plant care in Montgomery County TX—perfect add-on to keep your yard festive and ready with Christmas light installation The Woodlands TX.</td>
            <td className="border p-2 text-red-600">$300/mo</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-6 text-red-600">Book professional Christmas light installation in The Woodlands TX, Kingwood TX, or Montgomery County TX or winter services today for a stunning holiday display!</p>
    </div>
  );
}