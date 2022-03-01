export {};
// import React, {useState, createContext, useContext, ReactNode} from 'react';

// export type GlobalState = {
//     pageTitle?: string;
//     setPageTitle: (newTitle: string) => void;
//     isDarkMode?: boolean;
//     setIsDarkMode: (updateDarkMode: boolean) => void;
// };
// const getDarkModeSettings = () => {
//   // check local storage for preferences
//   // No preference ? check OS (media) : otherwise we have preference and set theme to that

//   // No OS settings ? default to light theme... set Local storage to light theme.
//   return true;
// };

// const updateDarkModeSettings = (isDarkMode: boolean) => {
//   // Whenever the user explicitly chooses light mode
//   const localStorage: {[theme: string]:any} = isDarkMode ? 'dark' : 'light';
//   return localStorage;
// };

// export const GlobalContext = createContext<GlobalState>({
//   pageTitle: '0xWF',
//   setPageTitle: () => {/* empty intentionally */},
//   isDarkMode: getDarkModeSettings(),
//   setIsDarkMode: () => {/* empty intentionally */},
// });

// export const useGlobalContext = () => useContext(GlobalContext);

// const GlobalProvider = ({children}: {children: ReactNode}) => {
//   const [pageTitle, setPageTitle] = useState<string>();
//   const [isDarkMode, setIsDarkMode] = useState<boolean>();
//   return (
//     <GlobalContext.Provider value={{pageTitle, setPageTitle, isDarkMode, setIsDarkMode}}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };
// export default GlobalProvider;


/*
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')


From Svelte project:
export const isDarkMode = writable(false);
const storedTheme = typeof window !== 'undefined' ? localStorage.getItem("theme") : 'light';
export const theme = writable(storedTheme);
if(typeof window !== 'undefined'){
    theme.subscribe(value => {
        localStorage.setItem("theme", value === 'dark' ? 'dark' : 'light');
    });

}

*/
