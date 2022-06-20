import {useState, useEffect} from 'react';
import {ethers} from 'ethers';

/*
    Determine how many, if any NFTs the user owns in the collection:
    1. Fetch ownerOf method from smart contract
    2. Determine number of NFTs owned from the collection by the user
    3. Set numbers of NFTs owned by user (default 0)
    4. Determine truthy value of number of Nfts
    5. Set isOwnerOf based on results of nftsOwned
    6. Return isOwnerOf and nftsOwned
*/

const checkNumOfNfts = async (contract: any, accountAddress: string | undefined, signer: any) => {
  let usersNfts = [];
  if (window.ethereum && signer) {
    // 1. ownerOf returns an array of the TokenIds that the user owns
    const ownerOf = await contract.walletOfOwner(accountAddress);
    console.log('ownerOf:', ownerOf);
    usersNfts = ownerOf;
  }
  return usersNfts;
};
// @TODO finish this
const useNftOwner = (NFT_CONTRACT_ADDRESS: string, NFT_ABI: string, accountAddress:string | undefined, signer: any ) => {
  // stores user's ownership status: if the user owns any of the NFTs in the collection
  const [isOwnerOf, setIsOwnerOf] = useState(false);

  // stores the Token IDs owned by the user
  const [nftsOwned, setNftsOwned] = useState([]);

  const contract = new ethers.Contract(NFT_CONTRACT_ADDRESS, NFT_ABI, signer);

  useEffect(() => {
    const handleIsOwnerOf = async () => {
      // 2.
      const nftsInWallet = await checkNumOfNfts(contract, accountAddress, signer);
      // 3.
      setNftsOwned(nftsInWallet);
      // 4.
      const isNftOwner = nftsInWallet && nftsInWallet.length ? true : false;
      // 5.
      setIsOwnerOf(isNftOwner);
    };
    handleIsOwnerOf();
  }, []);

  return {nftsOwned, isOwnerOf};
};
export default useNftOwner;
