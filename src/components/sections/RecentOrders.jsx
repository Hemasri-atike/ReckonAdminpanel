// src/components/sections/dashboard/recent-orders.jsx
const RecentOrders = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Orders</h3>
      <ul className="space-y-2">
        <li className="p-2 bg-blue-50 rounded-md">Order #1234 - $150.00</li>
        <li className="p-2 bg-blue-50 rounded-md">Order #1235 - $89.99</li>
        <li className="p-2 bg-blue-50 rounded-md">Order #1236 - $200.00</li>
      </ul>
    </div>
  );
};

export default RecentOrders;