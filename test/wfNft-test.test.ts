import {expect, assert} from 'chai';
import {ethers} from 'hardhat';

describe(`0xWF NFT Contract Functions:`, function() {
  let NFT;
  let testNFT: any;
  let testNFT2: any; // deployed at a future date
  let testNFT3: any; // for only owner functions

  let owner: any;
  let addr1: any;
  let addr2: any;
  let addr3: any;
  let addr4: any;

  // deploy config variables
  const NAME = process.env.PROJECT_NAME || ``;
  const SYMBOL = process.env.REACT_APP_PROJECT_SYMBOL || `NFT`;
  const MINT_COST = process.env.REACT_APP_MINT_COST || 0;
  const MAX_SUPPLY = process.env.REACT_APP_MAX_SUPPLY || 0;
  const MAX_MINT_AMOUNT = process.env.REACT_APP_MAX_MINT_AMOUNT || 1;
  const NFT_MINT_DATE = new Date(process.env.REACT_APP_NFT_MINT_DATE || 0)
      .getTime()
      .toString()
      .slice(0, 10);
  const currentDate = new Date();
  const minsInFuture = 30; // 3o mins in the future
  const FUTURE_MINT_DATE = new Date(
      currentDate.getTime() + minsInFuture * 60000,
  )
      .getTime()
      .toString()
      .slice(0, 10);
  const IPFS_IMAGE_METADATA_URI = `ipfs://${process.env.REACT_APP_IPFS_IMAGE_METADATA_CID}/`;
  const IPFS_HIDDEN_IMAGE_METADATA_URI = `ipfs://${process.env.REACT_APP_IPFS_HIDDEN_IMAGE_METADATA_CID}/hidden.json`;

  // formatEther will convert our large number that is a string to actual ether price,
  // and parseFloat will convert the price to a number
  const mintCost = parseFloat(ethers.utils.formatEther(MINT_COST));

  before(async function() {
    /* Get the ContractFactory and Signers here. @TODO `WfNFT` replace this with your contract name */
    NFT = await ethers.getContractFactory(`WfNFT`);
    [owner, addr1, addr2, addr3, addr4] = await ethers.getSigners();
    testNFT = await NFT.deploy(
        NAME,
        SYMBOL,
        MINT_COST,
        MAX_SUPPLY,
        MAX_MINT_AMOUNT,
        NFT_MINT_DATE,
        IPFS_IMAGE_METADATA_URI,
        IPFS_HIDDEN_IMAGE_METADATA_URI,
    );

    testNFT2 = await NFT.deploy(
        NAME,
        SYMBOL,
        MINT_COST,
        MAX_SUPPLY,
        MAX_MINT_AMOUNT,
        FUTURE_MINT_DATE,
        IPFS_IMAGE_METADATA_URI,
        IPFS_HIDDEN_IMAGE_METADATA_URI,
    );
    testNFT3 = await NFT.deploy(
        NAME,
        SYMBOL,
        MINT_COST,
        MAX_SUPPLY,
        MAX_MINT_AMOUNT,
        NFT_MINT_DATE,
        IPFS_IMAGE_METADATA_URI,
        IPFS_HIDDEN_IMAGE_METADATA_URI,
    );
    console.log(`-----------------------------------------------------------`);
    console.log(`\n - - Address Variables - - \n`);
    console.log(`Contract 1 Address: `, testNFT.address);
    console.log(`Contract 2 Address: `, testNFT2.address);
    console.log(`Contract 3 Address: `, testNFT3.address);

    console.log(`Owner:`, owner?.address);
    console.log(`Ad1:`, addr1?.address);
    console.log(`Ad2:`, addr2?.address);
    console.log(`Ad3:`, addr3?.address);
    console.log(`Ad4:`, addr4?.address);
    console.log(`\n - - Env Variables - - \n`);
    console.log(`NAME:`, NAME);
    console.log(`SYMBOL:`, SYMBOL);
    console.log(`MINT_COST:`, MINT_COST);
    console.log(`MAX_SUPPLY:`, MAX_SUPPLY);
    console.log(`MAX_MINT_AMOUNT:`, MAX_MINT_AMOUNT);
    console.log(`NFT_MINT_DATE:`, NFT_MINT_DATE);
    console.log(`IPFS_IMAGE_METADATA_URI:`, IPFS_IMAGE_METADATA_URI);
    console.log(
        `IPFS_HIDDEN_IMAGE_METADATA_URI: `,
        IPFS_HIDDEN_IMAGE_METADATA_URI,
    );
    console.log(`\n - - Other Test Variables - - \n`);
    console.log(`FUTURE_MINT_DATE:`, FUTURE_MINT_DATE);
    console.log(`mintCost (as number)`, mintCost);

    console.log(
        `-------------------------------------------------------------`,
    );
  });

  describe(`Test ethers.getSigners():`, async () => {
    it(`Make sure signers exist:`, async () => {
      expect(owner?.address).to.exist;
      expect(addr1?.address).to.exist;
      expect(addr2?.address).to.exist;
      expect(addr3?.address).to.exist;
      expect(addr4?.address).to.exist;
    });
  });

  describe(`${SYMBOL} NFT Deployment`, function() {
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

    it(`.maxMintAmount() - Returns the max mint amount `, async () => {
      const result = await testNFT.maxMintAmount();
      expect(result).to.equal(MAX_MINT_AMOUNT);
    });

    it(`.owner() - Should successfully set correct owner`, async () => {
      const result = await testNFT.owner();
      expect(result).to.equal(owner.address);
    });

    it(`.timeDeployed() - Returns the time deployed`, async () => {
      const result = await testNFT.timeDeployed();
      expect(result > 0).to.be.true;
    });
  });

  describe(`${SYMBOL} Public Functions`, function() {
    it(`.mint(int mintAmount) - Should Mint an NFT`, async () => {
      // attempt to mint 2 NFTs
      const mintAmount = 2;

      const response = await testNFT.connect(addr1).mint(mintAmount, {
        value: ethers.utils.parseEther((mintCost * mintAmount).toString()),
      });
      // since we already called the mint function in the beforeEach, we just expect a response to exist
      expect(response).to.exist;
    });
    it(`.walletOfOwner(address _owner) - Returns the IDs of minted NFTs as array`, async () => {
      const result = await testNFT.walletOfOwner(addr1.address);
      // expect addr1 to have 2 NFTs in wallet
      expect(result.length).to.equal(2);
      // expect the very first minted NFT to have an ID of `1`
      expect(result[0].toString()).to.equal(`1`);
    });


    it(`.totalSupply() - Should get current supply of tokens minted`, async () => {
      const totalSupply = await testNFT.totalSupply();
      // We only have minted 2 NFTs from the testNFT Contract
      expect(totalSupply).to.equal(2);
    });

    it(`.getSecondsUntilMinting() -  Should Return seconds until minting is available`, async () => {
      const buffer = 2;
      const result = await testNFT2.getSecondsUntilMinting();
      const secondsTillMinting = Number(result);

      // getting most recent block timestamp
      const blockNum = await ethers.provider.getBlockNumber();
      const block = await ethers.provider.getBlock(blockNum);
      const timestamp = block.timestamp;

      const target = parseFloat(FUTURE_MINT_DATE) - timestamp;

      // NOTE: Sometimes the seconds may be off by 1, As long as the seconds are
      // between the buffer zone, we'll pass the test
      if (
        secondsTillMinting > target - buffer &&
        secondsTillMinting <= target
      ) {
        assert.isTrue(true);
      } else {
        assert.isTrue(false);
      }
      expect(secondsTillMinting).to.be.greaterThan(0);
    });

    it(`.tokenURI(int tokenId) - Should return the tokens uri as string: `, async () => {
      const result = await testNFT.tokenURI(1);
      const isRevealed = await testNFT.isRevealed();
      if (isRevealed) {
        // if there is no hidden meta-image
        expect(result).to.equal(`${IPFS_IMAGE_METADATA_URI}1.json`);
      } else {
        // if there is no hidden meta-image
        expect(result).to.equal(`${IPFS_HIDDEN_IMAGE_METADATA_URI}`);
      }
    });
  });

  describe(`${SYMBOL} Only Owner Functions`, function() {
    it(`.setBaseURI(string newBaseURI) - should set baseURI`, async () => {
      const newBaseURI = `example.com`;
      await testNFT.setBaseURI(newBaseURI, {from: owner.address});
      const result = await testNFT.baseURI();
      expect(result).to.equal(newBaseURI);
    });

    it(`.setNotRevealedURI(string newNotRevealedURI) - change the URI for the not revealed json`, async () => {
      const newNotRevealedURI = `example.com`;
      await testNFT.setNotRevealedURI(newNotRevealedURI);
      const result = await testNFT.notRevealedUri();
      expect(result).to.equal(newNotRevealedURI);
    });

    it(`.setmaxMintAmount(int newMaxMintAmount) - update the max mint amount`, async () => {
      const newMaxMintAmount = 4;
      await testNFT.setmaxMintAmount(newMaxMintAmount);
      const result = await testNFT.maxMintAmount();
      expect(result).to.equal(newMaxMintAmount);
    });

    it(`.setCost(int newCost) -  update the cost of the NFT`, async () => {
      const newCost = 0;
      await testNFT.setCost(newCost);
      const result = await testNFT.cost();
      expect(result).to.equal(newCost);
    });

    it(`.setIsPaused(boolean newState) - test pausing minting state...`, async () => {
      // make sure minting is paused...
      const isMintingPaused = true;
      await testNFT.setIsPaused(isMintingPaused);
      const result = await testNFT.isPaused();

      // expect minting is paused to be true...
      expect(result).to.be.true;

      const attemptMint = testNFT.connect(addr1).mint(1, {
        value: ethers.utils.parseEther((mintCost * 1).toString()),
      });
      // expect minting to fail b/c its paused...
      await expect(attemptMint).to.be.reverted;
    });

    it(`.setIsRevealed(boolean newState) - Change the isRevealed state`, async () => {
      // isRevealed is initialized to false
      const newRevealState = true;
      await testNFT.setIsRevealed(newRevealState);
      const result = await testNFT.isRevealed();
      expect(result).to.be.true;
    });

    it(`.setBaseExtension(string newBaseExtension) - Sets the base extension`, async () => {
      const newExtension = `.example`; // Different from the default contract state
      await testNFT.setBaseExtension(`.example`, {from: owner.address});
      const result = await testNFT.baseExtension();
      expect(result.toString()).to.equal(newExtension);
    });
    it(`.withdraw() - should allow onlyOwner to withdraw funds from contract`, async () => {
      // expect non-owner withdraw attempt to fail
      const nonOwnerWithdrawAttempt = testNFT.withdraw({from: addr1.address});
      await expect(nonOwnerWithdrawAttempt).to.be.reverted;

      const beforeWithdrawOwnerBalance = await owner.provider.getBalance(
          owner.address,
      );
      const beforeWithdrawContractBalance = await testNFT.provider.getBalance(
          testNFT.address,
      );

      // execute owner withdrawal
      const tx = await testNFT.withdraw({from: owner.address});
      const newContractBalance = await testNFT.provider.getBalance(
          testNFT.address,
      );
      const txReceipt = await tx.wait();
      const txGasUsed = await txReceipt.gasUsed.mul(
          txReceipt.effectiveGasPrice,
      );

      /*
      these values are all `BigNumbers` so you would do math on them like so --> https://docs.ethers.io/v5/api/utils/bignumber/
      ownerBalance should be equal to the
      (owners balance before transaction) + (the contract balance before transaction) - (the cost of gas used for the withdraw)
      */
      const ownerBalanceShouldBe = beforeWithdrawContractBalance
          .add(beforeWithdrawOwnerBalance)
          .sub(txGasUsed);

      const newOwnerBalance = await owner.provider.getBalance(owner.address);

      // expect contract's balance to be zero since we have withdrawn funds...
      expect(newContractBalance).to.equal(0);

      // expect owners new balance to equal owners previous balance plus contract's balance before withdraw...
      expect(newOwnerBalance).to.equal(ownerBalanceShouldBe);
    });
  });

  describe(`Should Fail Scenarios: `, async () => {
    // should fail attempting to mint before mint date
    it(`Should Fail: Mint before mint date`, async () => {
      // attempt to mint 1 NFT
      const result = testNFT2.connect(addr1).mint(1, {
        value: ethers.utils.parseEther((mintCost * 1).toString()),
      });

      // we expect an error b/c it is before mint date
      await expect(result).to.be.reverted;
    });

    it(`Trying to mint more than max amount`, async () => {
      const maxMintAmount = Number(MAX_MINT_AMOUNT);
      const attemptedMintAmount = maxMintAmount + 1;

      const attemptBadMint = testNFT3.connect(addr4).mint(attemptedMintAmount, {
        value: ethers.utils.parseEther(
            (mintCost * attemptedMintAmount).toString(),
        ),
      });

      await expect(attemptBadMint).to.be.revertedWith(
          `Insufficient Mints Left`,
      );
    });

    it(`Trying to mint with not enough money`, async () => {
      const attemptBadMint = testNFT3.connect(addr4).mint(1, {
        value: ethers.utils.parseEther((0.01 * 1).toString()),
      });

      await expect(attemptBadMint).to.be.revertedWith(
          `Not enough funds provided`,
      );
    });

    // should fail trying to mint and transfer then mint again
    it(`Test Re-entrancy attack`, async () => {
      const reentrancyTest = async () => {
        let currentTokenIndex = await testNFT3.totalSupply();
        const maxTokenSupply = await testNFT3.maxSupply();
        try {
          for (let i = 0; i < maxTokenSupply; i++) {
            /*
              - Transfer to account3
              - attempt to mint again...
            */

            // - Mint NFT with account2
            await testNFT3.connect(addr2).mint(1, {
              value: ethers.utils.parseEther((mintCost * 1).toString()),
            });

            await testNFT3
                .connect(addr2)
                .approve(addr3.address, currentTokenIndex.toNumber() + 1);

            await testNFT3
                .connect(addr2)
                .transferFrom(
                    addr2.address,
                    addr3.address,
                    currentTokenIndex.toNumber() + 1,
                );
            currentTokenIndex = await testNFT3.totalSupply();
          }
        } catch (error) {
          assert.isTrue(true);
        }
      };
      // addr2 numOfMints should be less than or equal to maxMintAmount
      await reentrancyTest();

      const attemptAnotherMint = testNFT3.connect(addr2).mint(1, {
        value: ethers.utils.parseEther((mintCost * 1).toString()),
      });
      const addr2NumOfMints = await testNFT3.userNumOfMints(addr2.address);
      await expect(attemptAnotherMint).to.be.revertedWith(
          `Insufficient Mints Left`,
      );
      expect(addr2NumOfMints.toNumber()).to.be.lessThanOrEqual(
          Number(MAX_MINT_AMOUNT),
      );
    });
  });
});
