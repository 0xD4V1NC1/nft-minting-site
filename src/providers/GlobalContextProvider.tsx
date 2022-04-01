import {createContext, useContext} from 'react';

export type GlobalState = {
    pageTitle: string;
    setPageTitle: (newTitle: string) => void;
    metaDescription: string;
    setMetaDescription: (newMetaDescription: string) => void;
};

export const GlobalContext = createContext<GlobalState>({
  pageTitle: '0xWF',
  setPageTitle: () => {/* empty */},
  metaDescription: '',
  setMetaDescription: () => {/* empty */},
});

export const useGlobalContext = () => useContext(GlobalContext);
