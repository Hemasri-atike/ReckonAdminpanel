// src/components/DrawerItems.jsx
import { Link } from 'react-router-dom';
// import sitemap from '../routes/sitemap';

const DrawerItems = ({ expand }) => {
  return (
    <>
      <div className="py-4 sticky top-0 flex items-center justify-center bg-blue-50 z-[1200]">
        <Link to="/" className="no-underline">
          <div className={`flex ${expand ? 'flex-row space-x-3' : 'flex-col space-y-2'} items-center justify-center`}>
            <h4 className="text-2xl font-semibold tracking-wide text-gray-800">Base</h4>
          </div>
        </Link>
      </div>

      <nav className="mb-20 pt-2">
        {/* {sitemap.map((item) => (
          <div key={item.id} className="flex">
            <Link
              to={item.path}
              className={`flex items-center w-full min-h-[48px] ${
                item.active && item.path === '/' ? 'bg-gradient-to-r from-blue-500 to-blue-300' : 'bg-blue-50'
              } ${expand ? 'pl-4' : 'pl-3'}`}
            >
              <div className="w-12 flex items-center justify-center">
                {item.icon && (
                  item.messages ? (
                    <div className="relative">
                      <span
                        className={`inline-block h-6 w-6 bg-[url('${item.icon}')] bg-cover ${
                          item.active ? 'text-blue-600' : 'text-gray-400'
                        }`}
                      ></span>
                      <span
                        className={`absolute top-0 right-0 h-2 w-2 rounded-full border-2 border-blue-50 ${
                          expand ? 'bg-gray-400' : 'bg-red-700'
                        }`}
                      ></span>
                    </div>
                  ) : (
                    <span
                      className={`inline-block h-6 w-6 bg-[url('${item.icon}')] bg-cover ${
                        item.active ? 'text-blue-600' : 'text-gray-400'
                      }`}
                    ></span>
                  )
                )}
              </div>
              <span
                className={`ml-3 text-base font-medium ${item.active ? 'text-blue-600' : 'text-gray-400'} ${
                  expand ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {item.subheader}
              </span>
              {item.messages && (
                <span
                  className={`ml-auto mr-3 px-2 py-1 text-xs font-medium text-white bg-red-600 rounded-full ${
                    expand ? 'opacity-100' : 'opacity-0'
                  } transition-opacity duration-300`}
                >
                  {item.messages}
                </span>
              )}
            </Link>
          </div>
        ))} */}
      </nav>

      <div className="mt-auto px-3 pb-5">
        <div className={`flex ${expand ? 'flex-row space-x-4' : 'flex-col space-y-4'} items-center justify-between`}>
          <Link to="#!" className="flex items-center space-x-2 no-underline">
            <div className={`${expand ? 'block' : 'hidden'}`}>
              <p className="mb-0 text-sm font-bold text-gray-800">Easin Arafat</p>
              <p className="mt-0 text-xs text-gray-400">Free Account</p>
            </div>
          </Link>
          <Link to="#!" className="no-underline">
            <span className="inline-block h-6 w-6 bg-[url('majesticons:logout')] bg-cover text-gray-400"></span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DrawerItems;