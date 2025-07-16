'use client';

import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeSwitcher() {
  // State to hold the current theme ('light' or 'dark')
  const [theme, setTheme] = useState<string>('light');

  // Effect to set the initial theme from localStorage or system preference
  useEffect(() => {
    const isDarkMode =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []); // Empty array ensures this runs only once on mount

  // Function to handle the button click
  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      // If it's dark, switch to light
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setTheme('light');
    } else {
      // If it's light, switch to dark
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setTheme('dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center p-2 rounded-full transition-colors duration-200 hover:bg-hover-gray dark:hover:bg-hover-gray-dark"
      aria-label="Toggle theme"
    >
      {/* Show Sun icon when in light mode */}
      {theme === 'light' && (
         <Moon className="h-6 w-6 text-gray-800" />
      )}
      {/* Show Moon icon when in dark mode */}
      {theme === 'dark' && (
      
         <Sun className="h-6 w-6 text-white" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}