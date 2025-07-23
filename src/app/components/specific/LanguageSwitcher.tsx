'use client';

// Note: The 'Cannot find namespace 'JSX'' error is a TypeScript configuration
// issue. Please ensure your `tsconfig.json` file includes `"jsx": "preserve"`
// under the `compilerOptions`. This is a standard requirement for Next.js.

import { useState, useEffect, useRef } from 'react';
// Imports for Next.js App Router compatibility
import { useRouter, usePathname, useParams } from 'next/navigation';
import type { FC } from 'react';

// --- TYPE DEFINITIONS ---
interface Language {
  code: 'en' | 'tr' | 'de' | 'fa' | 'ar' | 'ru';
  name: string;
  abbr: string;
}

// --- LANGUAGE DATA ---
const languages: Language[] = [
  { code: 'en', name: 'English', abbr: 'EN' },
  { code: 'tr', name: 'Türkçe', abbr: 'TR' },
  { code: 'de', name: 'Deutsch', abbr: 'DE' },
  { code: 'fa', name: 'فارسی', abbr: 'FA' },
  { code: 'ar', name: 'العربية', abbr: 'AR' },
  { code: 'ru', name: 'Русский', abbr: 'RU' },
];

// --- FLAG ICON COMPONENT ---
const FlagIcon: FC<{ code: Language['code'] }> = ({ code }) => {
  const flags: Record<Language['code'], React.JSX.Element> = {
    en: (
      <svg viewBox="0 0 640 480" width="24" height="18" xmlns="http://www.w3.org/2000/svg">
        <rect width="640" height="480" fill="#012169" />
        <path fill="#fff" d="M0 0L640 480M640 0L0 480" stroke="#fff" strokeWidth="60"/>
        <path fill="#C8102E" d="M0 0L640 480M640 0L0 480" stroke="#C8102E" strokeWidth="40"/>
        <path fill="#fff" d="M320 0v480M0 240h640" stroke="#fff" strokeWidth="100"/>
        <path fill="#C8102E" d="M320 0v480M0 240h640" stroke="#C8102E" strokeWidth="60"/>
      </svg>
    ),
    tr: (
      <svg viewBox="0 0 640 480" width="24" height="18" xmlns="http://www.w3.org/2000/svg">
        <rect width="640" height="480" fill="#e30a17" />
        <circle cx="250" cy="240" r="90" fill="#fff"/>
        <circle cx="275" cy="240" r="65" fill="#e30a17"/>
        <polygon points="320,240 345,255 335,230 355,215 330,215 320,190 310,215 285,215 305,230 295,255" fill="#fff"/>
      </svg>
    ),
    de: (
      <svg viewBox="0 0 5 3" width="24" height="18" xmlns="http://www.w3.org/2000/svg">
        <rect width="5" height="1" y="0" fill="#000" />
        <rect width="5" height="1" y="1" fill="#D00" />
        <rect width="5" height="1" y="2" fill="#FFCE00" />
      </svg>
    ),
    fa: (
      <svg viewBox="0 0 21 12" width="24" height="18" xmlns="http://www.w3.org/2000/svg">
        <rect y="0" width="21" height="4" fill="#239F40"/>
        <rect y="4" width="21" height="4" fill="#fff"/>
        <rect y="8" width="21" height="4" fill="#DA0000"/>
        <circle cx="10.5" cy="6" r="1.2" fill="#DA0000"/>
      </svg>
    ),
    ar: (
      <svg viewBox="0 0 600 400" width="24" height="18" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#006C35" />
        <rect x="100" y="190" width="400" height="20" fill="#fff" />
      </svg>
    ),
    ru: (
      <svg viewBox="0 0 900 600" width="24" height="18" xmlns="http://www.w3.org/2000/svg">
        <rect width="900" height="200" y="0" fill="#fff"/>
        <rect width="900" height="200" y="200" fill="#0039a6"/>
        <rect width="900" height="200" y="400" fill="#d52b1e"/>
      </svg>
    ),
  };

  return flags[code] || null;
};


// --- MAIN LANGUAGE SWITCHER COMPONENT ---
const LanguageSwitcher = () => {
  // Hooks for Next.js App Router
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  // Get current locale from URL parameters, default to 'en'
  const locale = (params.locale || 'en') as Language['code'];

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

const handleLanguageChange = (newLocale: string) => {
  const segments = pathname.split('/').filter(Boolean); // ["en", "about"]
  const currentLocale = segments[0];

  // Check if the first segment is a valid locale
  const isCurrentLocale = languages.some((lang) => lang.code === currentLocale);

  // Remove the current locale if present
  if (isCurrentLocale) {
    segments.shift(); // Remove locale
  }

  // Construct new path with new locale
  const newPath = `/${newLocale}/${segments.join('/')}`;

  router.replace(newPath);
  setIsOpen(false);
};


  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center items-center gap-x-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FlagIcon code={currentLanguage.code} />
          {currentLanguage.abbr}
          <svg
            className={`-mr-1 h-5 w-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`${
                  locale === lang.code
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700'
                } group flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900`}
                role="menuitem"
              >
                <div className="flex items-center gap-x-3">
                    <FlagIcon code={lang.code} />
                    <span className="truncate">{lang.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
