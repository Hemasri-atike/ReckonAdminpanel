import TopCards from 'components/sections/dashboard/top-cards';
import Reports from 'components/sections/dashboard/reports';
import Analytics from 'components/sections/dashboard/analytics';
import RecentOrders from 'components/sections/dashboard/recent-orders';
import TopSelling from 'components/sections/dashboard/top-selling';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-4 px-4">
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