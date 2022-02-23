import {createContext, useContext} from 'react';

export type GlobalState = {
    pageTitle?: string;
    setPageTitle: (newTitle: string) => void;
    // isDarkMode: boolean;
    // setIsDarkMode: (newThemeSetting: boolean)=> void;
};

export const GlobalContext = createContext<GlobalState>({
  pageTitle: '0xWF',
  setPageTitle: () => {/* empty */},
  // isDarkMode: false,
  // setIsDarkMode: () => {/* empty */},
});

export const useGlobalContext = () => useContext(GlobalContext);
