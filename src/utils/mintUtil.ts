import {BigNumber, ethers} from 'ethers';
import {NFT_CONTRACT_ADDRESS, NFT_ABI} from '../consts/consts';

export const handleMint = async (mintAmount:number, provider: any, nftCost:string) => {
  const nftCostNum = parseFloat(nftCost);
  if (window.ethereum) {
    const signer = provider?.getSigner();
    try {
      const contract = new ethers.Contract(NFT_CONTRACT_ADDRESS, NFT_ABI, signer);
      console.log('contract:', contract);
      const response = await contract.mint(BigNumber.from(mintAmount), {
        value: ethers.utils.parseEther((nftCostNum * mintAmount).toString()),
      });
      console.log('Mint Function Response:', response);
    } catch (error) {
      console.warn('Error trying to Mint NFT');
    }
  }
};
