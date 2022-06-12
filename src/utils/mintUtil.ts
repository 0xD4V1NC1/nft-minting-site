import {BigNumber, ethers} from 'ethers';
import {NFT_CONTRACT_ADDRESS, NFT_ABI} from '../consts/consts';

export const handleMint = async (mintAmount:number, provider: any) => {
  if (window.ethereum) {
    const signer = provider?.getSigner();
    try {
      const contract = new ethers.Contract(NFT_CONTRACT_ADDRESS, NFT_ABI, signer);
      const response = await contract.mint(BigNumber.from(mintAmount), {
        value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
      });
      console.log('Mint Function Response:', response);
    } catch (error) {
      console.log('Error trying to Mint NFT');
    }
  }
};
