import {useState, useEffect, useCallback} from 'react';
import {BigNumber, ethers} from 'ethers';
import {useWeb3React} from '@web3-react/core';

import {NFT_CONTRACT_ADDRESS, NFT_ABI, MAX_MINT_AMOUNT} from '../consts/consts';
import {useGlobalContext} from '../providers/GlobalContext';
import useNftData from './useNftData';

/*
    Determine how many, if any NFTs the user owns in the collection:
    1. Fetch ownerOf method from smart contract
    2. Determine number of NFTs owned from the collection by the user
    3. Set numbers of NFTs owned by user (default 0)
    4. Determine truthy value of number of Nfts
    5. Set isOwnerOf based on results of nftsOwned
    6. Set available mints based on Max mints - current number of NFTs
    7. Return isOwnerOf and nftsOwned
*/

const useNftOwner = () => {
  const {provider} = useWeb3React();
  const {account} = useGlobalContext();
  const signer = provider?.getSigner();
  const {currentNftId, maxNftSupply, maxNftMintAmount} = useNftData();
  // stores user's ownership status: if the user owns any of the NFTs in the collection
  const [isOwnerOf, setIsOwnerOf] = useState<boolean | null>(null);

  // stores the Token IDs owned by the user
  const [nftsOwned, setNftsOwned] = useState<number[]>([]);

  const [availableMints, setAvailableMints] = useState<number>(MAX_MINT_AMOUNT);
  const [isLoadingNftOwnerData, setIsLoadingNftOwnerData] = useState<boolean>(true);

  const fetchUsersNfts = useCallback(async () => {
    let usersNfts:number[] = [];
    if (window.ethereum && signer) {
      const contract = new ethers.Contract(NFT_CONTRACT_ADDRESS, NFT_ABI, signer);

      // 1. ownerOf returns an array of the TokenIds that the user owns
      const ownerOf = await contract.walletOfOwner(account);

      // convert our token Ids from 'Big Number' hex to number
      usersNfts = ownerOf.map((tokenId:BigNumber) => {
        return tokenId.toNumber();
      });

      // get token uris
    }
    return usersNfts;
  }, [account, currentNftId]);


  useEffect(() => {
    const handleIsOwnerOf = async () => {
      // 2.
      const nftsInWallet = await fetchUsersNfts();

      // 3.
      setNftsOwned(nftsInWallet);

      // 4.
      const isNftOwner = nftsInWallet && nftsInWallet.length ? true : false;

      // 5.
      setIsOwnerOf(isNftOwner);

      /* 6.
        if totalMintsRemaining < userMintsAvailable ?
          Total Mints remaining is the available mints
          :
          it is the users max mint amount - nfts already minted by user
      */
      const userMintsAvailable = maxNftMintAmount - nftsInWallet.length;

      const totalMintsRemaining = maxNftSupply - currentNftId;

      const mintsAvailable = totalMintsRemaining < userMintsAvailable ? totalMintsRemaining: userMintsAvailable;

      setAvailableMints(mintsAvailable);

      setTimeout(() => setIsLoadingNftOwnerData(false), 1000);
    };
    handleIsOwnerOf();
  }, [account, currentNftId]);

  return {nftsOwned, isOwnerOf, availableMints, isLoadingNftOwnerData};
};
export default useNftOwner;
