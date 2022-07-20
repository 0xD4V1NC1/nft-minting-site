import React, {createContext, ReactNode, useContext} from 'react';
import useNftOwner from '../hooks/useNftOwner';

export type NftOwnerData = {
    nftsOwned: number[];
    isOwnerOf: boolean | null;
    availableMints: number;
    isLoadingNftOwnerData: boolean;
};

export const NftOwnerContext = createContext<NftOwnerData>({
  nftsOwned: [],
  isOwnerOf: false,
  availableMints: 0,
  isLoadingNftOwnerData: true,
});

export const NftOwnerContextProvider = ({children}: {children: ReactNode}) => {
  const {nftsOwned, isOwnerOf, availableMints, isLoadingNftOwnerData} = useNftOwner();
  return (
    <NftOwnerContext.Provider value={{nftsOwned, isOwnerOf, availableMints, isLoadingNftOwnerData}}>
      {children}
    </NftOwnerContext.Provider>
  );
};

export const useNftOwnerContext = () => useContext(NftOwnerContext);
