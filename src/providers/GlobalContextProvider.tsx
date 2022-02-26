import {createContext, useContext} from 'react';
import {getInitialTheme} from '../context/themeContext';

export type GlobalState = {
    pageTitle?: string;
    setPageTitle: (newTitle: string) => void;
    theme: string;
    setTheme: (newTheme: string) => void;
    // isDarkMode: boolean;
    // setIsDarkMode: (newThemeSetting: boolean)=> void;
};

export const GlobalContext = createContext<GlobalState>({
  pageTitle: '0xWF',
  setPageTitle: () => {/* empty */},
  theme: getInitialTheme(),
  setTheme: (newTheme: string) => {
    /* empty */
  },
  // isDarkMode: false,
  // setIsDarkMode: () => {/* empty */},
});

export const useGlobalContext = () => useContext(GlobalContext);
