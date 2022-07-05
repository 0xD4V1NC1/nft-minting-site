import {useState, useEffect, useCallback} from 'react';
import {BigNumber, ethers} from 'ethers';
import {useWeb3React} from '@web3-react/core';

import {NFT_CONTRACT_ADDRESS, NFT_ABI, MAX_MINT_AMOUNT} from '../consts/consts';

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
  const {provider, account} = useWeb3React();
  const signer = provider?.getSigner();
  // stores user's ownership status: if the user owns any of the NFTs in the collection
  const [isOwnerOf, setIsOwnerOf] = useState(false);

  // stores the Token IDs owned by the user
  const [nftsOwned, setNftsOwned] = useState<number[]>([]);

  const [availableMints, setAvailableMints] = useState<number>(MAX_MINT_AMOUNT);
  const contract = new ethers.Contract(NFT_CONTRACT_ADDRESS, NFT_ABI, signer);

  const fetchUsersNfts = useCallback(async () => {
    let usersNfts = [];
    if (window.ethereum && signer) {
      // 1. ownerOf returns an array of the TokenIds that the user owns
      const ownerOf = await contract.walletOfOwner(account);

      // convert our token Ids from 'Big Number' hex to number
      usersNfts = ownerOf.map((tokenId:BigNumber) => {
        return tokenId.toNumber();
      });
    }
    return usersNfts;
  }, [account]);

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

      // 6.
      setAvailableMints(MAX_MINT_AMOUNT-nftsInWallet.length);
    };
    handleIsOwnerOf();
  }, [account]);

  return {nftsOwned, isOwnerOf, availableMints};
};
export default useNftOwner;
