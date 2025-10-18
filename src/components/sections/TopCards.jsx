// src/components/sections/dashboard/top-cards.jsx
const TopCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white rounded-lg shadow">
      <div className="p-4 bg-blue-50 rounded-md">
        <h3 className="text-lg font-semibold text-gray-800">Total Sales</h3>
        <p className="text-2xl font-bold text-blue-600">$10,000</p>
      </div>
      <div className="p-4 bg-blue-50 rounded-md">
        <h3 className="text-lg font-semibold text-gray-800">Total Orders</h3>
        <p className="text-2xl font-bold text-blue-600">250</p>
      </div>
      <div className="p-4 bg-blue-50 rounded-md">
        <h3 className="text-lg font-semibold text-gray-800">Total Users</h3>
        <p className="text-2xl font-bold text-blue-600">1,200</p>
      </div>
    </div>
  );
};

export default TopCards;