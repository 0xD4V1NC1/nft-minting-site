
export const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    console.log('storedPrefs:', storedPrefs);
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    console.log('userMedia: ', userMedia);
    if (userMedia.matches) {
      return 'dark';
    }
  }

  // If you want to use light theme as the default,
  // return "light" instead
  return 'dark';
};

export const updateTheme = (updatedTheme:string) => {
  const root = window.document.documentElement;
  const isDarkTheme = updatedTheme === 'dark';

  root.classList.remove(isDarkTheme ? 'light' : 'dark');
  root.classList.add(updatedTheme);

  localStorage.setItem('color-theme', updatedTheme);
};

export const toggleTheme = (currentTheme:string, setTheme: (newTheme:string) => void) => {
  if (currentTheme === 'dark') {
    setTheme('light');
  } else if (currentTheme === 'light') {
    setTheme('dark');
  }
};

export const isDark = (theme:string) => {
  return theme ==='dark';
};

