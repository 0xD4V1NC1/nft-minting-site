/* eslint-disable no-unused-vars */
import {useState, useEffect, useCallback} from 'react';
import {ethers, Signer} from 'ethers';
// @TODO finish this
/*
    Fetch NftCost, allowMintingAfter, and baseExtension? (to show what NFTs you minted) .... from smart contract
*/
const useNftData = (nftContractAddress: string, nftAbi: string, signer: Signer | undefined) => {
  const [nftCost, setNftCost] = useState('0');
  const [currentNftId, setCurrentNftId] = useState('0');
  const [maxNftSupply, setMaxNftSupply] = useState('1');
  const [isNftDataLoading, setIsNftDataLoading] = useState(true);
  /*
        some people use ethers to get provider but since we are using web3React... we use web3React to get our provider.
        On the provider object is a function that gets the signer (aka connected account).
        This is what allows us to have write permissions to the imported smart contract. If you replace signer with provider
        in the contract instance, you would only have read permissions of the imported contract
    */
  const contract = new ethers.Contract(nftContractAddress, nftAbi, signer);

  const getNftData = useCallback(async () => {
    // cost per NFT
    let perNftCost = '0';
    // maxNFTSupply
    let maxSupply = '0';
    let currentToken = '0';
    try {
      const cost = await contract.cost();
      maxSupply = await contract.maxSupply();
      // TotalSupply is the current NFT of the MaxAmount... i.e. 1 of 25
      const totalSupply = await contract.totalSupply();
      currentToken = totalSupply.toString();
      console.warn('YO:', totalSupply.toString());
      // convert BigNumber hex string to readable string
      maxSupply = maxSupply.toString();

      const costInWei = cost && cost.toString();
      const costInEther = costInWei && ethers.utils.formatEther(costInWei);

      perNftCost = costInEther;
    } catch (error) {
      console.warn('Error fetching cost of NFT (useNftData.ts)');
    }
    // cost is returned as a string we want to convert it to a number
    return {perNftCost, maxSupply, currentToken};
  }, [signer]);

  useEffect(() => {
    // if we don't have a signer we cant make fetch... return all default state variables
    if (window.ethereum && signer) {
      console.count('COUNT:');
      const handleFetchNftData = async () => {
        const {perNftCost, maxSupply, currentToken}= await getNftData();
        setNftCost(perNftCost);
        setMaxNftSupply(maxSupply);
        setCurrentNftId(currentToken);
        setIsNftDataLoading(false);
      };
      handleFetchNftData();
    }
  }, [signer]);
  return {nftCost, maxNftSupply, currentNftId, isNftDataLoading};
};
export default useNftData;
