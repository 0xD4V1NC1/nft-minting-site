import {useState, useEffect, useCallback} from 'react';
import {useWeb3React} from '@web3-react/core';
import {ethers} from 'ethers';

import useNftOwner from './useNftOwner';
import {NFT_CONTRACT_ADDRESS, NFT_ABI} from '../consts/consts';

const useNftsOwned = () => {
  const {provider} = useWeb3React();

  const {nftsOwned} = useNftOwner();
  const [nftUris, setNftUris] = useState<string[]>([]);
  const signer = provider?.getSigner();

  const fetchNftUris = useCallback(() => {
    const nftUriList: string[] = [];
    if (window.ethereum && signer) {
      const contract = new ethers.Contract(NFT_CONTRACT_ADDRESS, NFT_ABI, signer);

      nftsOwned.forEach(async (nftTokenId) => {
        // for each tokenId owned, fetch nft uri...
        const nftUri = await contract.tokenURI(nftTokenId);
        // store token uris
        nftUriList.push(nftUri);
      });
    }
    // return all of the user's token URIs
    return nftUriList;
  }, [nftsOwned]);

  useEffect(() => {
    const handleNftUris = () => {
      const uris = fetchNftUris();
      setNftUris(uris);
    };
    handleNftUris();
  }, [nftsOwned]);
  return {nftUris};
};
export default useNftsOwned;
