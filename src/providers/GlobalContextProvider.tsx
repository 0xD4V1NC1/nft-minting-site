import {createContext, useContext} from 'react';

export type GlobalState = {
    pageTitle?: string;
    setPageTitle: (newTitle: string) => void;
};

export const GlobalContext = createContext<GlobalState>({
  pageTitle: '0xWF',
  setPageTitle: () => {/* empty */},
});

export const useGlobalContext = () => useContext(GlobalContext);
