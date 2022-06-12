import {useState, useEffect, useCallback} from 'react';
import {ethers, Signer} from 'ethers';
// @TODO finish this
/*
    Fetch NftCost, allowMintingAfter, and baseExtension? (to show what NFTs you minted) .... from smart contract
*/
const useNftData = (nftContractAddress: string, nftAbi: string, signer: Signer | undefined) => {
  const [nftCost, setNftCost] = useState('0');
  /*
        some people use ethers to get provider but since we are using web3React... we use web3React to get our provider.
        On the provider object is a function that gets the signer (aka connected account).
        This is what allows us to have write permissions to the imported smart contract. If you replace signer with provider
        in the contract instance, you would only have read permissions of the imported contract
    */
  console.log('SIGNER: ', signer);
  const contract = new ethers.Contract(nftContractAddress, nftAbi, signer);

  const getCost = useCallback(async () => {
    // cost per NFT
    let perNftCostString = '0';
    try {
      const cost = await contract.cost();
      const costInWei = cost && cost.toString();
      const costInEther = costInWei && ethers.utils.formatEther(costInWei);
      perNftCostString = costInEther;
    } catch (error) {
      console.log('Error fetching cost of NFT (useNftData.ts)');
    }
    return perNftCostString;
  }, [signer]);

  useEffect(() => {
    // if we don't have a signer we cant make fetch... return all default state variables
    if (window.ethereum && signer) {
      const handleFetchNftData = async () => {
        const costOfNft = await getCost();
        setNftCost(costOfNft);
      };
      handleFetchNftData();
    }
  }, [signer]);
  return {nftCost};
};
export default useNftData;
