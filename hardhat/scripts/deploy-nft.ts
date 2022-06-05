// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.

import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  const IPFS_IMAGE_METADATA_URI = `ipfs://${process.env.IPFS_IMAGE_METADATA_CID}/`
  const IPFS_HIDDEN_IMAGE_METADATA_URI = `ipfs://${process.env.IPFS_HIDDEN_IMAGE_METADATA_CID}/hidden.json`
  const NFT_MINT_DATE = new Date(process.env.NFT_MINT_DATE || 0).getTime().toString().slice(0, 10)
  const MAX_SUPPLY = process.env.MAX_SUPPLY;
  const MINT_COST = process.env.MINT_COST;
  // Here is where we will customize our NFT constructor items for deployment
  const nft_config = {
    NAME: 'Wolfpack Finance NFT',
    SYMBOL: '0xWF',
    COST: {MINT_COST},
    MAX_SUPPLY: {MAX_SUPPLY},
    NFT_MINT_DATE: {NFT_MINT_DATE},
    IPFS_IMAGE_METADATA_URI: {IPFS_IMAGE_METADATA_URI},
    IPFS_HIDDEN_IMAGE_METADATA_URI: {IPFS_HIDDEN_IMAGE_METADATA_URI}
  };

  console.log('NFT CONFIG: ');
  console.log({...nft_config});
  console.log('------------------------------------------');
  // We get the contract to deploy
  console.log('Getting Contract...');
  console.log('------------------------------------------');
  const WF_NFT = await ethers.getContractFactory("WfNFT");
  console.log('Attempting to Deploy Contract...');
  console.log('------------------------------------------');
  const wf_nft = await WF_NFT.deploy({... nft_config});

  await wf_nft.deployed();
  console.log('NFT Smart Contract deployed to: ', wf_nft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
