export default function ServicesPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-green-800">Winter Landscaping Services - Professional Christmas Light Installation Focus</h1>
      <p className="mb-6">Our winter services in The Woodlands, Kingwood, and Montgomery County TX spotlight professional Christmas light installation, complemented by pressure washing and pruning for a thriving holiday property.</p>
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
            <td className="border p-2 font-semibold">Professional Christmas Light Installation</td>
            <td className="border p-2">Custom holiday lighting with professional commercial-grade LED lights for The Woodlands TX, Kingwood TX, and Montgomery County TX—includes design, safe installation, removal, and storage. Warranty included.</td>
            <td className="border p-2">$1,000/job</td>
          </tr>
          <tr className="hover:bg-green-50 transition-colors">
            <td className="border p-2 font-semibold">Premium Christmas Light Installation</td>
            <td className="border p-2">Enhanced designs with premium commercial-grade LED lights, maintenance, and commercial options for Montgomery County TX businesses—starting at $1,500+.</td>
            <td className="border p-2">$1,500+/job</td>
          </tr>
          <tr className="hover:bg-green-50 transition-colors">
            <td className="border p-2 font-semibold">Pressure Washing</td>
            <td className="border p-2">Holiday prep with gutter and driveway cleaning in The Woodlands TX and Kingwood TX—bundle with lights for 10% off.</td>
            <td className="border p-2">$200/job</td>
          </tr>
          <tr className="hover:bg-green-50 transition-colors">
            <td className="border p-2 font-semibold">Winter Pruning & Cleanups</td>
            <td className="border p-2">Native plant care in Montgomery County TX—perfect add-on to keep your yard festive and ready.</td>
            <td className="border p-2">$300/mo</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-6">Book professional Christmas light installation in The Woodlands TX or winter services today for a stunning holiday display!</p>
    </div>
  );
}