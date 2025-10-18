// src/components/Sidebar.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DrawerItems from './DrawerItems';

const Sidebar = ({ expand, mobileOpen, setMobileOpen, drawerWidth, miniDrawerWidth }) => {
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, setMobileOpen]);

  const closeMobileDrawer = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-[${drawerWidth}px] bg-white shadow-lg transform ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-200 ease-in-out overflow-x-hidden lg:hidden`}
      >
        <DrawerItems expand={true} />
      </div>

      {/* Permanent Sidebar */}
      <div
        className={`hidden lg:block fixed inset-y-0 left-0 bg-white shadow-lg transition-all duration-200 ease-in-out overflow-x-hidden ${
          expand ? `w-[${drawerWidth}px]` : `w-[${miniDrawerWidth}px]`
        }`}
      >
        <DrawerItems expand={expand} />
      </div>

      {/* Overlay for Mobile Drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMobileDrawer}
        ></div>
      )}
    </>
  );
};

export default Sidebar;