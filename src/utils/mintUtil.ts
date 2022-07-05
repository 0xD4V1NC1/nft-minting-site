import {ethers} from 'ethers';
import {NFT_CONTRACT_ADDRESS, NFT_ABI} from '../consts/consts';

export const handleMint = async (mintAmount:number, provider: any, nftCost:number) => {
  const nftCostNum = nftCost;
  if (window.ethereum) {
    const signer = provider?.getSigner();
    try {
      const contract = new ethers.Contract(NFT_CONTRACT_ADDRESS, NFT_ABI, signer);
      const response = await contract.mint(mintAmount, {
        value: ethers.utils.parseEther((nftCostNum * mintAmount).toString()),
      });
      console.log('Mint Function Response:', response);
    } catch (error) {
      // const revertMessage = await getRevertReason(txHash);
      if (error instanceof Error) {
        console.log('YOOOO', error);
      }
      // console.warn('Error trying to Mint NFT:', error);
    }
  }
};
