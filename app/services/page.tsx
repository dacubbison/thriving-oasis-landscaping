export default function ServicesPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-green-800">Winter Landscaping Services - Focus on Professional Christmas Light Installation</h1>
      <p className="mb-6">Our winter services in The Woodlands, Kingwood, and Montgomery County TX include professional Christmas light installation, pressure washing, and pruning to keep your property thriving.</p>
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
            <td className="border p-2">Custom holiday lights for The Woodlands TX, Kingwood TX, Montgomery County TX—includes design, install, and removal. Warranty included.</td>
            <td className="border p-2">$200/job</td>
          </tr>
          <tr className="hover:bg-green-50 transition-colors">
            <td className="border p-2 font-semibold">Pressure Washing</td>
            <td className="border p-2">Gutters, roofs, driveways—prep for holidays in The Woodlands TX and Kingwood TX.</td>
            <td className="border p-2">$200/job</td>
          </tr>
          <tr className="hover:bg-green-50 transition-colors">
            <td className="border p-2 font-semibold">Winter Pruning & Cleanups</td>
            <td className="border p-2">Native plants prep for spring in Montgomery County TX—bundle with lights for 10% off.</td>
            <td className="border p-2">$300/mo</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-6">Bundle professional Christmas light installation in The Woodlands TX with winter services for savings!</p>
    </div>
  );
}