import TopCards from '../../components/sections/TopCards.jsx';
import Reports from   "../../components/sections/Reports.jsx"
import Analytics from '../../components/sections/Analytics.jsx';
import RecentOrders from '../../components/sections/RecentOrders.jsx';
import TopSelling from '../../components/sections/TopSelling.jsx';

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