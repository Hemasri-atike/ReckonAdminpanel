// src/components/sections/dashboard/top-selling.jsx
const TopSelling = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Selling Products</h3>
      <ul className="space-y-2">
        <li className="p-2 bg-blue-50 rounded-md">Product A - 120 units</li>
        <li className="p-2 bg-blue-50 rounded-md">Product B - 95 units</li>
        <li className="p-2 bg-blue-50 rounded-md">Product C - 80 units</li>
      </ul>
    </div>
  );
};

export default TopSelling;