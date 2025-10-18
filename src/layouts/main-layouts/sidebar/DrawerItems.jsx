// src/components/DrawerItems.jsx
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import sitemap from '../../../routes/Sitemap.js';

const dummyLogo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAQAAAC0jP9AAAAARElEQVR42u3PAQ0AMAgAoJ36/z+0DhAQCg4BfxDwDwH/EOAfAv4h4B8C/iHgHwL+IeAfAv4h4B8C/iHgHwL+IeAfAv4h4B8C/gJ2X8jY0gAAAABJRU5ErkJggg==';

const DrawerItems = ({ expand }) => {
  return (
    <>
      <div className="py-4 sticky top-0 flex items-center justify-center bg-blue-50 z-[1200]">
        <Link to="/" className="no-underline">
          <div className={`flex ${expand ? 'flex-row space-x-3' : 'flex-col space-y-2'} items-center justify-center`}>
            <img src={dummyLogo} alt="logo" className="h-11 w-11" />
            <h4 className="text-2xl font-semibold tracking-wide text-gray-800">Base</h4>
          </div>
        </Link>
      </div>

      <nav className="mb-20 pt-2">
        {sitemap.map((item) => (
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
                      <Icon
                        icon={item.icon}
                        className={`h-6 w-6 ${item.active ? 'text-blue-600' : 'text-gray-400'}`}
                      />
                      <span
                        className={`absolute top-0 right-0 h-2 w-2 rounded-full border-2 border-blue-50 ${
                          expand ? 'bg-gray-400' : 'bg-red-700'
                        }`}
                      ></span>
                    </div>
                  ) : (
                    <Icon
                      icon={item.icon}
                      className={`h-6 w-6 ${item.active ? 'text-blue-600' : 'text-gray-400'}`}
                    />
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
        ))}
      </nav>

     
    </>
  );
};

export default DrawerItems;