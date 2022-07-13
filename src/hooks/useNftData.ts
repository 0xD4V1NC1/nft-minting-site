/* eslint-disable no-unused-vars */
import {useState, useEffect, useCallback} from 'react';
import {ethers} from 'ethers';
import {useWeb3React} from '@web3-react/core';

import {NFT_CONTRACT_ADDRESS, NFT_ABI, MAX_MINT_AMOUNT, MAX_NFT_SUPPLY, NFT_COST} from '../consts/consts';

/*
    Fetch NftCost, allowMintingAfter, and baseExtension? (to show what NFTs you minted) .... from smart contract
*/
const useNftData = () => {
  const {provider} = useWeb3React();
  const [nftCost, setNftCost] = useState<number>(NFT_COST);
  const [currentNftId, setCurrentNftId] = useState<number>(0);
  const [maxNftSupply, setMaxNftSupply] = useState<number>(MAX_NFT_SUPPLY);
  const [isNftDataLoading, setIsNftDataLoading] = useState<boolean>(true);
  const [maxNftMintAmount, setMaxNftMintAmount] = useState<number>(MAX_MINT_AMOUNT);
  /*
        some people use ethers to get provider but since we are using web3React... we use web3React to get our provider.
        On the provider object is a function that gets the signer (aka connected account).
        This is what allows us to have write permissions to the imported smart contract. If you replace signer with provider
        in the contract instance, you would only have read permissions of the imported contract
    */

  const getNftData = useCallback(async () => {
    // cost per NFT
    let perNftCost;
    let currentToken = 0;
    let maxMintAmount;
    // maxNFTSupply
    let maxSupply;
    try {
      const contract = new ethers.Contract(NFT_CONTRACT_ADDRESS, NFT_ABI, provider);

      const cost = await contract.cost();
      const costInWei = cost && cost.toString();
      // cost is returned as a bigNumber... to convert it we need to turn it into a string for formatEther then convert it to a number
      const costInEther = costInWei && parseFloat(ethers.utils.formatEther(costInWei));
      perNftCost = costInEther;

      maxSupply = await contract.maxSupply();
      // convert BigNumber hex string to readable number
      maxSupply = maxSupply.toNumber();

      maxMintAmount = await contract.maxMintAmount();

      // TotalSupply is the current NFT of the MaxAmount... i.e. 1 of 25
      const totalSupply = await contract.totalSupply();
      currentToken = parseInt(totalSupply.toString());
    } catch (error) {
      console.warn('Error fetching cost of NFT (useNftData.ts):', error);
    }
    return {perNftCost, maxSupply, currentToken, maxMintAmount};
  }, [provider]);

  useEffect(() => {
    if (window.ethereum && provider) {
      const handleFetchNftData = async () => {
        const {perNftCost, maxSupply, currentToken, maxMintAmount} = await getNftData();
        setNftCost(perNftCost || NFT_COST);
        setMaxNftSupply(maxSupply || MAX_NFT_SUPPLY);
        setCurrentNftId(currentToken || 0);
        setMaxNftMintAmount(maxMintAmount || MAX_MINT_AMOUNT);
        setIsNftDataLoading(false);
      };
      handleFetchNftData();
    }
  }, [provider]);
  return {maxNftMintAmount, nftCost, maxNftSupply, currentNftId, isNftDataLoading};
};
export default useNftData;
