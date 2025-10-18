// src/pages/Dashboard.jsx
import TopCards from '../../components/sections/TopCards';
import Reports from '../../components/sections/Reports';
import Analytics from '../../components/sections/Analytics';
import RecentOrders from '../../components/sections/RecentOrders';
import TopSelling from '../../components/sections/TopSelling';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 gap-6 px-6 md:grid-cols-12">
      <div className="col-span-12">
        <TopCards />
      </div>
      <div className="col-span-12 md:col-span-7">
        <Reports />
      </div>
      <div className="col-span-12 md:col-span-5">
        <Analytics />
      </div>
      <div className="col-span-12 md:col-span-7">
        <RecentOrders />
      </div>
      <div className="col-span-12 md:col-span-5">
        <TopSelling />
      </div>
    </div>
  );
};

export default Dashboard;