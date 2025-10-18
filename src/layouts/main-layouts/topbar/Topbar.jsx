import { Link } from 'react-router-dom';
// import Logo from 'assets/images/Logo.png';
import LanguageSelect from './LanguageSelect';
import ProfileMenu from './ProfileMenu';

const Topbar = ({ expand, mobileOpen, setExpand, setMobileOpen, drawerWidth, miniDrawerWidth }) => {
  const handleDrawerExpand = () => {
    setExpand(!expand);
  };

  const handleMobileOpen = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <header
      className={`fixed top-0 right-0 z-50 bg-blue-600 text-white shadow-md w-full lg:${
        expand ? `w-[calc(100%-${drawerWidth}px)]` : `w-[calc(100%-${miniDrawerWidth}px)]`
      }`}
    >
      <div className="px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <Link to="/" className="hidden sm:block lg:hidden no-underline">
            {/* <img src={Logo} alt="logo" className="h-10 w-10" /> */}
          </Link>

          <div className="flex items-center">
            <button
              onClick={handleDrawerExpand}
              className="hidden lg:flex p-2 text-white hover:bg-blue-700 rounded-full"
              aria-label="expand drawer"
            >
              <span
                className={`inline-block h-6 w-6 bg-[url('${
                  expand ? 'line-md:menu-fold-left' : 'line-md:menu-fold-right'
                }')] bg-cover`}
              ></span>
            </button>

            <button
              onClick={handleMobileOpen}
              className="flex lg:hidden p-2 text-white hover:bg-blue-700 rounded-full"
              aria-label="expand drawer"
            >
              <span className="inline-block h-6 w-6 bg-[url('solar:hamburger-menu-outline')] bg-cover"></span>
            </button>
          </div>

          <div className="ml-[-1.5rem] block md:hidden">
            <button className="p-2 text-white hover:bg-blue-700 rounded-full" aria-label="search">
              <span className="inline-block h-6 w-6 bg-[url('prime:search')] bg-cover"></span>
            </button>
          </div>

          <div className="hidden md:flex relative w-[300px]">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-3 bg-blue-500 text-white border-none rounded-md focus:ring-2 focus:ring-blue-300 placeholder-white/70"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 inline-block h-5 w-5 bg-[url('prime:search')] bg-cover"></span>
          </div>
        </div>

        <div className="flex items-center space-x-1 sm:space-x-2">
          <LanguageSelect />
          <button className="relative p-2 hover:bg-blue-700 rounded-full">
            <span className="inline-block h-6 w-6 bg-[url('mdi:bell-outline')] bg-cover"></span>
            <span className="absolute top-1 right-0.5 h-2 w-2 bg-red-600 rounded-full text-xs text-white flex items-center justify-center">2</span>
          </button>
          <ProfileMenu />
        </div>
      </div>
    </header>
  );
};

export default Topbar;