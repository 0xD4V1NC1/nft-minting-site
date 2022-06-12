// @TODO You will need to update this based on your NFT .json file name... This will likely cause error if it doesn't exist
import nftData from '../0xWF.json';

// NFT Mint date in milliseconds
export const NFT_MINT_DATE = 1653699600000;
export const POLYGON_CHAIN_ID = 137;
export const LOCALHOST_CHAIN_ID = 31337;
export const POLYGON_MUMBAI_CHAIN_ID = 80001;
/*
    if developing locally, let the contract address equal the address generated in the <NFT>.json file...
    otherwise our production address
*/
// @TODO ensure the .env in the root directory is updated with production variables when ready to deploy to mainnet
const PRODUCTION_NFT_ADDRESS = process.env.REACT_PRODUCTION_NFT_ADDRESS || '';
const PRODUCTION_NFT_ABI = process.env.REACT_PRODUCTION_NFT_ABI || '';

export const NFT_CONTRACT_ADDRESS = process.env.NODE_ENV === 'development' && nftData ? nftData.address : PRODUCTION_NFT_ADDRESS;
export const NFT_ABI = process.env.NODE_ENV === 'development' ? nftData.abi : PRODUCTION_NFT_ABI;
