import { useState } from 'react';
import Sidebar from './sidebar/Sidebar.jsx';
import Topbar from './topbar/Topbar.jsx';
import Footer from './footer/Footer.jsx';

const MainLayout = ({ children }) => {
  const [expand, setExpand] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const drawerWidth = 240;
  const miniDrawerWidth = 90;

  return (
    <div className="flex min-h-screen">
      <Sidebar
        expand={expand}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        drawerWidth={drawerWidth}
        miniDrawerWidth={miniDrawerWidth}
      />
      <main className="flex-grow overflow-x-hidden">
        <Topbar
          expand={expand}
          mobileOpen={mobileOpen}
          setExpand={setExpand}
          setMobileOpen={setMobileOpen}
          drawerWidth={drawerWidth}
          miniDrawerWidth={miniDrawerWidth}
        />
        <div className="mt-12">{children}</div>
        <Footer />
      </main>
    </div>
  );
};

export default MainLayout;