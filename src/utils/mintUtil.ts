import {ethers} from 'ethers';
import {NFT_CONTRACT_ADDRESS, NFT_ABI} from '../consts/consts';

export const handleMint = async (mintAmount:number, provider: any, nftCost:number, addToast:any) => {
  const nftCostNum = nftCost;
  if (window.ethereum) {
    const signer = provider?.getSigner();
    try {
      const contract = new ethers.Contract(NFT_CONTRACT_ADDRESS, NFT_ABI, signer);
      const response = await contract.mint(mintAmount, {
        value: ethers.utils.parseEther((nftCostNum * mintAmount).toString()),
        // value: ethers.utils.parseEther((.02 * mintAmount).toString()),

      });
      addToast({toastType: 'success', toastHeader: 'Mint Successful!', toastMessage: `Navigate to the Members Only page or Opensea to see your NFT`});
      console.log('Mint Function Response:', response);
    } catch (error) {
      if (error instanceof Error) {
        const errorMessage = {...error};
        const parsedErrorMessage = JSON.parse(JSON.stringify(errorMessage)).reason;
        // looks for Error message in between single quotes returned from node
        const regex = /(?<=\').*?(?=\')/mg;
        const specificErrorMessage = parsedErrorMessage.match(regex);
        addToast({toastType: 'error', toastHeader: 'Minting Failed', toastMessage: `Your mint failed with error: ${specificErrorMessage}`});
      } else {
        addToast({toastType: 'error', toastHeader: 'Error occurred while minting', toastMessage: `${error}`});
      }
    }
  }
};
