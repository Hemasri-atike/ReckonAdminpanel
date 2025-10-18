// src/pages/Dashboard.jsx
import CareersPage from '../career/CareersPage';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 gap-6 px-6 md:grid-cols-12">
      
    
      <div className="col-span-12 md:col-span-5">
        <CareersPage />
      </div>
    
      
    </div>
  );
};

export default Dashboard;