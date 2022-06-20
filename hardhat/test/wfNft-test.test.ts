import { expect, assert } from "chai";
import { ethers } from "hardhat";

describe(`0xWF NFT Contract Functions:`, function () {
  let NFT;
  let testNFT: any;
  let testNFT2: any; // deployed at a future date
  let owner: any;
  let addr1: any;
  let addr2: any;
  let addrs: any;
  // deploy config variables
  const NAME = process.env.PROJECT_NAME || ``;
  const SYMBOL = process.env.PROJECT_SYMBOL || `NFT`;
  const MINT_COST = process.env.MINT_COST || 0;
  const MAX_SUPPLY = process.env.MAX_SUPPLY || 0;
  const NFT_MINT_DATE = new Date(process.env.NFT_MINT_DATE || 0)
    .getTime()
    .toString()
    .slice(0, 10);
  const currentDate = new Date();
  const minsInFuture = 30; // 3o mins in the future
  const FUTURE_MINT_DATE = new Date(currentDate.getTime() + minsInFuture*60000).getTime()
  .toString()
  .slice(0, 10);
  const IPFS_IMAGE_METADATA_URI = `ipfs://${process.env.IPFS_IMAGE_METADATA_CID}/`;
  const IPFS_HIDDEN_IMAGE_METADATA_URI = `ipfs://${process.env.IPFS_HIDDEN_IMAGE_METADATA_CID}/hidden.json`;

  before(async function () {
    // Get the ContractFactory and Signers here. @TODO replace this with your contract name
    NFT = await ethers.getContractFactory(`WfNFT`);
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    console.log(`-----------------------------------------------------------`);
    console.log(`Owner:`, owner?.address);
    console.log(`Ad1:`, addr1?.address);
    console.log(`Ad2:`, addr2?.address);
    console.log(`\n - - Env Variables - - \n`)
    console.log(`NAME:`, NAME);
    console.log(`SYMBOL:`, SYMBOL);
    console.log(`MINT_COST:`, MINT_COST);
    console.log(`MAX_SUPPLY:`, MAX_SUPPLY);
    console.log(`NFT_MINT_DATE:`, NFT_MINT_DATE);
    console.log(`IPFS_IMAGE_METADATA_URI:`, IPFS_IMAGE_METADATA_URI);
    console.log(`IPFS_HIDDEN_IMAGE_METADATA_URI: `, IPFS_HIDDEN_IMAGE_METADATA_URI);
    console.log(`\n - - Other Test Variables - - \n`);
    console.log(`FUTURE_MINT_DATE:`, FUTURE_MINT_DATE);
    console.log(`-------------------------------------------------------------`);
    testNFT = await NFT.deploy(
      NAME,
      SYMBOL,
      MINT_COST,
      MAX_SUPPLY,
      NFT_MINT_DATE,
      IPFS_IMAGE_METADATA_URI,
      IPFS_HIDDEN_IMAGE_METADATA_URI
    );
    testNFT2 = await NFT.deploy(
      NAME,
      SYMBOL,
      MINT_COST,
      MAX_SUPPLY,
      FUTURE_MINT_DATE,
      IPFS_IMAGE_METADATA_URI,
      IPFS_HIDDEN_IMAGE_METADATA_URI
    );
  });
  describe.skip(`Test ethers.getSigners():`, async () => {
    it(`Make sure signers exist:`, async () => {
      expect(owner?.address).to.exist;
      expect(addr1?.address).to.exist;
      expect(addr2?.address).to.exist;
    });
  });
  describe.skip(`${SYMBOL} NFT Deployment`, function () {
    it(`.name() - Returns the contract name`, async () => {
      const result = await testNFT.name();
      expect(result).to.equal(NAME);
    });
    it(`.symbol() - Returns the symbol `, async () => {
      const result = await testNFT.symbol();
      expect(result).to.equal(SYMBOL);
    });

    it(`.cost() - Returns the cost to mint `, async () => {
      const result = await testNFT.cost();
      expect(result.toString()).to.equal(MINT_COST.toString());
    });

    it(`.maxSupply() - Returns the max supply `, async () => {
      const result = await testNFT.maxSupply();
      expect(result.toString()).to.equal(MAX_SUPPLY.toString());
    });
    // @TODO update this
    it(`.maxMintAmount() - Returns the max mint amount `, async () => {
      const result = await testNFT.maxMintAmount();
      expect(result.toString()).to.equal(`2`);
    });

    it(`.owner() - Should successfully set correct owner`, async function () {
      const result = await testNFT.owner();
      expect(result).to.equal(owner.address);
    });
    it(`.timeDeployed() - Returns the time deployed`, async () => {
      const result = await testNFT.timeDeployed();
      expect(result > 0).to.be.true;
    });
  });

  describe(`${SYMBOL} Public Functions`, function () {

    let response:any;
    before(`Mint 2 NFTs`, async () => {
      // get contract data
      const WfNFT = await ethers.getContractFactory(`WfNFT`);
      // create instance of NFT contract with addr1 as the signer (aka minter)
      const myContract = new ethers.Contract(
        testNFT.address,
        WfNFT.interface,
        addr1
      );

      // attempt to mint 2 NFTs
      const mintAmount = 2;
      // formatEther will convert our large number that is a string to actual ether price,
      // and parseFloat will convert the price to a number
      const mintCost = parseFloat(ethers.utils.formatEther(MINT_COST));

      response = await myContract.mint(mintAmount, {
        value: ethers.utils.parseEther((mintCost * mintAmount).toString()),
      });
    });
    it(`.walletOfOwner(address _owner) - Returns the IDs of minted NFTs as array`, async () => {
      const result = await testNFT.walletOfOwner(addr1.address);
      console.log(`${addr1.address} NFTs:`, result);

      // expect addr1 to have 2 NFTs in wallet
      expect(result.length).to.equal(2);
      // expect the very first minted NFT to have an ID of `1`
      expect(result[0].toString()).to.equal(`1`);
    });

    it(`.mint(int mintAmount) - Should Mint an NFT`, async () => {
      // since we already called the mint function in the beforeEach, we just expect a response to exist
      expect(response).to.exist;
    });

    it(`.totalSupply() - Should get current supply of tokens`, async () => {
      const totalSupply = await testNFT.totalSupply();
      expect(totalSupply).to.equal(2);
    });

    it(`.getSecondsUntilMinting() -  Should Return seconds until minting is available`, async () => {
      let buffer = 20
      let milliseconds = 120000 // Number between 100000 - 999999
      let target = Number(milliseconds.toString().slice(0, 3))
      const result = await testNFT2.getSecondsUntilMinting()
      const secondsTillMinting = Number(result)

      // NOTE: Sometimes the seconds may be off by 1, As long as the seconds are 
      // between the buffer zone, we`ll pass the test
      if (secondsTillMinting > (target - buffer) && secondsTillMinting <= target) {
          assert.isTrue(true)
      } else {
          assert.isTrue(false);

      }
      expect(secondsTillMinting).to.be.greaterThan(0);
    });
    // @TODO finish this ^ getSecondsUntilMinting returns int

    // tokenURI (int tokenId) returns a string?
    it(`.tokenURI() - Should return the tokens uri: `, async () => {
      const result = await testNFT.tokenURI(1);
      const isRevealed = await testNFT.isRevealed();
      console.log(`isRevealed:`, isRevealed);
      if(isRevealed){
      // if there is no hidden meta-image
      expect(result).to.equal(`${IPFS_IMAGE_METADATA_URI}1.json`);  
      } else {
      // if there is no hidden meta-image
      expect(result).to.equal(`${IPFS_HIDDEN_IMAGE_METADATA_URI}`);
      }
      
    });
  });

  describe.skip(`${SYMBOL} Only Owner Functions`, function () {
    // @TODO
    // withdraw (check if balance of owner updated)
    // setCost

    // setmaxMintAmount

    // setNotRevealedURI
    it(`.setNotRevealedURI() - update the not revealed URI`, async () => {
      const newUnrevealedURI = `example.com`;
      await testNFT.setNotRevealedURI(newUnrevealedURI);
      const result = testNFT.notRevealedUri();
      expect(result).to.equal(newUnrevealedURI);
    });

    // setBaseURI
    it(`.setBaseURI() - update base URI`, async () => {
      const newBaseURI = `lol.com`;
      await testNFT.setBaseURI(newBaseURI);
      const result = await testNFT.baseURI();
      expect(result).to.equal(newBaseURI);
    });
    // setIsPaused
    it(`.setIsPaused() - set NFT minting status.`, async () => {
      await testNFT.setIsPaused(true);
      const result = await testNFT.isPaused();
      expect(result).to.be.true;
    });
    // setIsRevealed
    it(`.setIsRevealed() - set if the NFT is revealed`, async () => {
      const updatedRevealedState = true;
      await testNFT.setIsRevealed(updatedRevealedState);
      const result = await testNFT.isRevealed();
      expect(result).to.be.true;
    });
    // setBaseExtension
    it(`.setBaseExtension() - Sets the base extension`, async () => {
      const newExtension = `.example`; // Different from the default contract state
      await testNFT.setBaseExtension(newExtension, { from: owner });
      const result = await testNFT.baseExtension();
      expect(result.toString()).to.equal(newExtension);
    });
  });

  describe.skip(`Should Fail Scenarios: `, async () => {
    // should fail attempting to mint before mint date
    // should fail trying to mint multiple
    // should fail trying to mint and transfer then mint again
    //
  });
});
