import {useEffect, useState} from 'react';

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    // if we have a theme set in local storage, return that
    const storedPrefs = window.localStorage.getItem('dark-mode');
    if (typeof storedPrefs === 'boolean') {
      return storedPrefs;
    }
    // if no theme set in local storage attempt to set theme equal to browser settings
    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return true;
    }
  }

  // If we have no browser settings, or preference settings, return our default theme
  // If you want to use dark theme as the default,
  // return true instead
  return false;
};
const usePrefersDarkMode = () => {
  // we set initial value to initial theme to prevent unwanted flashing of white or dark theme if we used true or false
  const [value, setValue] = useState<boolean>(getInitialTheme);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setValue(mediaQuery.matches);

    const handler = () => setValue(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return value;
};
export default usePrefersDarkMode;
