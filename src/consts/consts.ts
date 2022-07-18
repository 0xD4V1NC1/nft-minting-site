// @TODO You will need to update this based on your NFT .json file name... This will likely cause error if it doesn't exist
import nftData from '../0xWF.json';
import {ethers} from 'ethers';

// NFT Mint date in milliseconds for the countdown timer
export const NFT_MINT_DATE = new Date(process.env.REACT_APP_NFT_MINT_DATE || '').getTime();
export const POLYGON_CHAIN_ID = 137;
export const LOCALHOST_CHAIN_ID = 31337;
export const POLYGON_MUMBAI_CHAIN_ID = 80001;
/*
    if developing locally, let the contract address equal the address generated in the <NFT>.json file...
    otherwise our production address
*/
// @TODO ensure the .env in the root directory is updated with production variables when ready to deploy to mainnet
// and add your production and test address and abi to the two functions below
const getNftAddress = () => {
  const environment = process.env.REACT_APP_NODE_ENV;
  let nftAddress;
  switch (environment) {
    case 'production':
      nftAddress = '';
      break;
    case 'test':
      nftAddress = '0xE665B21fE7Adc6E96C59fB96BF3C3a82CE14C060';
      break;
    case 'development':
    default:
      nftAddress = nftData.address;
  }
  return nftAddress;
};

const getNftAbi = () => {
  const environment = process.env.REACT_APP_NODE_ENV;
  let nftAbi;
  switch (environment) {
    case 'production':
      nftAbi = '';
      break;
    case 'test':
      nftAbi = '[{\"type\":\"constructor\",\"payable\":false,\"inputs\":[{\"type\":\"string\",\"name\":\"_name\"},{\"type\":\"string\",\"name\":\"_symbol\"},{\"type\":\"uint256\",\"name\":\"_cost\"},{\"type\":\"uint256\",\"name\":\"_maxSupply\"},{\"type\":\"uint256\",\"name\":\"_maxMintAmount\"},{\"type\":\"uint256\",\"name\":\"_allowMintingOn\"},{\"type\":\"string\",\"name\":\"_initBaseURI\"},{\"type\":\"string\",\"name\":\"_initNotRevealedUri\"}]},{\"type\":\"event\",\"anonymous\":false,\"name\":\"Approval\",\"inputs\":[{\"type\":\"address\",\"name\":\"owner\",\"indexed\":true},{\"type\":\"address\",\"name\":\"approved\",\"indexed\":true},{\"type\":\"uint256\",\"name\":\"tokenId\",\"indexed\":true}]},{\"type\":\"event\",\"anonymous\":false,\"name\":\"ApprovalForAll\",\"inputs\":[{\"type\":\"address\",\"name\":\"owner\",\"indexed\":true},{\"type\":\"address\",\"name\":\"operator\",\"indexed\":true},{\"type\":\"bool\",\"name\":\"approved\",\"indexed\":false}]},{\"type\":\"event\",\"anonymous\":false,\"name\":\"OwnershipTransferred\",\"inputs\":[{\"type\":\"address\",\"name\":\"previousOwner\",\"indexed\":true},{\"type\":\"address\",\"name\":\"newOwner\",\"indexed\":true}]},{\"type\":\"event\",\"anonymous\":false,\"name\":\"Transfer\",\"inputs\":[{\"type\":\"address\",\"name\":\"from\",\"indexed\":true},{\"type\":\"address\",\"name\":\"to\",\"indexed\":true},{\"type\":\"uint256\",\"name\":\"tokenId\",\"indexed\":true}]},{\"type\":\"function\",\"name\":\"allowMintingAfter\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"uint256\"}]},{\"type\":\"function\",\"name\":\"approve\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"to\"},{\"type\":\"uint256\",\"name\":\"tokenId\"}],\"outputs\":[]},{\"type\":\"function\",\"name\":\"balanceOf\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"owner\"}],\"outputs\":[{\"type\":\"uint256\"}]},{\"type\":\"function\",\"name\":\"baseExtension\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"string\"}]},{\"type\":\"function\",\"name\":\"baseURI\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"string\"}]},{\"type\":\"function\",\"name\":\"cost\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"uint256\"}]},{\"type\":\"function\",\"name\":\"getApproved\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[{\"type\":\"uint256\",\"name\":\"tokenId\"}],\"outputs\":[{\"type\":\"address\"}]},{\"type\":\"function\",\"name\":\"getSecondsUntilMinting\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"uint256\"}]},{\"type\":\"function\",\"name\":\"isApprovedForAll\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"owner\"},{\"type\":\"address\",\"name\":\"operator\"}],\"outputs\":[{\"type\":\"bool\"}]},{\"type\":\"function\",\"name\":\"isPaused\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"bool\"}]},{\"type\":\"function\",\"name\":\"isRevealed\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"bool\"}]},{\"type\":\"function\",\"name\":\"maxMintAmount\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"uint256\"}]},{\"type\":\"function\",\"name\":\"maxSupply\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"uint256\"}]},{\"type\":\"function\",\"name\":\"mint\",\"constant\":false,\"stateMutability\":\"payable\",\"payable\":true,\"inputs\":[{\"type\":\"uint256\",\"name\":\"_mintAmount\"}],\"outputs\":[]},{\"type\":\"function\",\"name\":\"name\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"string\"}]},{\"type\":\"function\",\"name\":\"notRevealedUri\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"string\"}]},{\"type\":\"function\",\"name\":\"owner\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"address\"}]},{\"type\":\"function\",\"name\":\"ownerOf\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[{\"type\":\"uint256\",\"name\":\"tokenId\"}],\"outputs\":[{\"type\":\"address\"}]},{\"type\":\"function\",\"name\":\"renounceOwnership\",\"constant\":false,\"payable\":false,\"inputs\":[],\"outputs\":[]},{\"type\":\"function\",\"name\":\"safeTransferFrom\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"from\"},{\"type\":\"address\",\"name\":\"to\"},{\"type\":\"uint256\",\"name\":\"tokenId\"}],\"outputs\":[]},{\"type\":\"function\",\"name\":\"safeTransferFrom\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"from\"},{\"type\":\"address\",\"name\":\"to\"},{\"type\":\"uint256\",\"name\":\"tokenId\"},{\"type\":\"bytes\",\"name\":\"data\"}],\"outputs\":[]},{\"type\":\"function\",\"name\":\"setApprovalForAll\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"operator\"},{\"type\":\"bool\",\"name\":\"approved\"}],\"outputs\":[]},{\"type\":\"function\",\"name\":\"setBaseExtension\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"string\",\"name\":\"_newBaseExtension\"}],\"outputs\":[]},{\"type\":\"function\",\"name\":\"setBaseURI\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"string\",\"name\":\"_newBaseURI\"}],\"outputs\":[]},{\"type\":\"function\",\"name\":\"setCost\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"uint256\",\"name\":\"_newCost\"}],\"outputs\":[]},{\"type\":\"function\",\"name\":\"setIsPaused\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"bool\",\"name\":\"_state\"}],\"outputs\":[]},{\"type\":\"function\",\"name\":\"setIsRevealed\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"bool\",\"name\":\"_state\"}],\"outputs\":[]},{\"type\":\"function\",\"name\":\"setNotRevealedURI\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"string\",\"name\":\"_notRevealedURI\"}],\"outputs\":[]},{\"type\":\"function\",\"name\":\"setmaxMintAmount\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"uint256\",\"name\":\"_newmaxMintAmount\"}],\"outputs\":[]},{\"type\":\"function\",\"name\":\"supportsInterface\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[{\"type\":\"bytes4\",\"name\":\"interfaceId\"}],\"outputs\":[{\"type\":\"bool\"}]},{\"type\":\"function\",\"name\":\"symbol\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"string\"}]},{\"type\":\"function\",\"name\":\"timeDeployed\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"uint256\"}]},{\"type\":\"function\",\"name\":\"tokenByIndex\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[{\"type\":\"uint256\",\"name\":\"index\"}],\"outputs\":[{\"type\":\"uint256\"}]},{\"type\":\"function\",\"name\":\"tokenOfOwnerByIndex\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"owner\"},{\"type\":\"uint256\",\"name\":\"index\"}],\"outputs\":[{\"type\":\"uint256\"}]},{\"type\":\"function\",\"name\":\"tokenURI\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[{\"type\":\"uint256\",\"name\":\"tokenId\"}],\"outputs\":[{\"type\":\"string\"}]},{\"type\":\"function\",\"name\":\"totalSupply\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[],\"outputs\":[{\"type\":\"uint256\"}]},{\"type\":\"function\",\"name\":\"transferFrom\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"from\"},{\"type\":\"address\",\"name\":\"to\"},{\"type\":\"uint256\",\"name\":\"tokenId\"}],\"outputs\":[]},{\"type\":\"function\",\"name\":\"transferOwnership\",\"constant\":false,\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"newOwner\"}],\"outputs\":[]},{\"type\":\"function\",\"name\":\"userNumOfMints\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"addr\"}],\"outputs\":[{\"type\":\"uint256\"}]},{\"type\":\"function\",\"name\":\"walletOfOwner\",\"constant\":true,\"stateMutability\":\"view\",\"payable\":false,\"inputs\":[{\"type\":\"address\",\"name\":\"_owner\"}],\"outputs\":[{\"type\":\"uint256[]\"}]},{\"type\":\"function\",\"name\":\"withdraw\",\"constant\":false,\"stateMutability\":\"payable\",\"payable\":true,\"inputs\":[],\"outputs\":[]}]';
      break;
    case 'development':
    default:
      nftAbi = nftData.abi;
  }
  return nftAbi;
};

export const NFT_CONTRACT_ADDRESS = getNftAddress();
export const NFT_ABI = getNftAbi();

export const MAX_MINT_AMOUNT = parseInt(process.env.REACT_APP_MAX_MINT_AMOUNT || '0');
export const MAX_NFT_SUPPLY = parseInt(process.env.REACT_APP_MAX_SUPPLY || '0');

export const NFT_COST = parseFloat(ethers.utils.formatEther(process.env.REACT_APP_MINT_COST || '0'));

export const NFT_IMAGE_CID = process.env.REACT_APP_IPFS_IMAGE_CID;

export const NFT_HIDDEN_IMAGE_CID = process.env.REACT_APP_IPFS_HIDDEN_IMAGE_CID;

export const GRADIENT_TEXT = `text-transparent bg-clip-text bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-500`;

const getChainId = () => {
  const environment = process.env.REACT_APP_NODE_ENV;
  let chainId;
  switch (environment) {
    case 'test':
      chainId = POLYGON_MUMBAI_CHAIN_ID;
      break;
    case 'production':
      chainId = POLYGON_CHAIN_ID;
      break;
    case 'development':
    default:
      chainId = LOCALHOST_CHAIN_ID;
  }
  return chainId;
};
export const CHAIN_ID = getChainId();
