import { useState, useRef } from 'react';

const languages = [
  {
    id: 1,
    code: 'eng',
    lang: 'English',
    flag: 'twemoji:flag-united-kingdom',
  },
  {
    id: 2,
    code: 'ban',
    lang: 'বাংলা',
    flag: 'twemoji:flag-bangladesh',
  },
  {
    id: 3,
    code: 'zh',
    lang: '中文',
    flag: 'twemoji:flag-china',
  },
  {
    id: 4,
    code: 'tr',
    lang: 'Türkçe',
    flag: 'twemoji:flag-turkey',
  },
  {
    id: 5,
    code: 'nld',
    lang: 'Dutch',
    flag: 'twemoji:flag-netherlands',
  },
];

const LanguageSelect = () => {
  const [language, setLanguage] = useState(languages[0]);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleFlagButtonClick = () => {
    setOpen(true);
  };

  const handleFlagMenuClose = () => {
    setOpen(false);
  };

  const handleLanguageItemClick = (langItem) => {
    setLanguage(langItem);
    handleFlagMenuClose();
  };

  return (
    <div className="relative">
      <button
        onClick={handleFlagButtonClick}
        className="p-2 text-white hover:bg-blue-700 rounded-full"
        ref={anchorRef}
      >
        <span className={`inline-block h-6 w-6 bg-[url('${language.flag}')] bg-cover`}></span>
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 w-52 bg-white shadow-lg rounded-md z-50"
          style={{ top: 'calc(100% + 6px)' }}
        >
          {languages.map((langItem) => (
            <div
              key={langItem.id}
              onClick={() => handleLanguageItemClick(langItem)}
              className={`flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                langItem.id === language.id ? 'bg-blue-100' : ''
              }`}
            >
              <span className={`inline-block h-8 w-8 bg-[url('${langItem.flag}')] bg-cover mr-4`}></span>
              <span className="flex-1 text-sm text-gray-800">{langItem.lang}</span>
              <span className="text-sm text-gray-500 text-right">{langItem.code}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelect;