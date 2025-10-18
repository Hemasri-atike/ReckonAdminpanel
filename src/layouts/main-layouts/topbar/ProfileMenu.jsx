// src/components/ProfileMenu.jsx
import { useState, useRef } from 'react';

const menuItems = [
  {
    id: 1,
    title: 'View Profile',
    icon: 'mdi:user-circle-outline',
  },
  {
    id: 2,
    title: 'Account Settings',
    icon: 'mdi:account-cog-outline',
  },
  {
    id: 3,
    title: 'Notifications',
    icon: 'mdi:bell-outline',
  },
  {
    id: 4,
    title: 'Switch Account',
    icon: 'mdi:account-box-multiple-outline',
  },
  {
    id: 5,
    title: 'Help Center',
    icon: 'mdi:help-circle-outline',
  },
  {
    id: 6,
    title: 'Logout',
    icon: 'mdi:logout',
  },
];

const ProfileMenu = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleProfileClick = () => {
    setOpen(true);
  };

  const handleProfileMenuClose = () => {
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={handleProfileClick}
        className="ml-2 p-2 rounded-full bg-blue-600 text-white text-sm font-semibold"
        aria-controls={open ? 'account-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        ref={anchorRef}
      >
        EA
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-md z-50"
          style={{ top: 'calc(100% + 6px)' }}
        >
          <div className="p-2">
            <div
              onClick={handleProfileMenuClose}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-blue-100"
            >
              <div className="h-[42px] w-[42px] rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-semibold mr-2">
                EA
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-800">Easin Arafat</span>
                <span className="text-xs text-gray-500">easin@example.com</span>
              </div>
            </div>
          </div>

          <hr className="my-0 border-gray-200" />

          <div className="p-2">
            {menuItems.map((item) => (
              <div
                key={item.id}
                onClick={handleProfileMenuClose}
                className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                <span
                  className={`inline-block h-6 w-6 bg-[url('${item.icon}')] bg-cover mr-2 text-gray-500`}
                ></span>
                <span className="text-sm font-medium text-gray-500">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;