import React, {useEffect, useRef} from 'react';

import {useWeb3React} from '@web3-react/core';

import {useGlobalContext} from '../providers/GlobalContextProvider';
// import useBlockchainData from '../hooks/useBlockchainData';

import Layout from '../components/Layout/Layout';
import Divider from '../components/UI/Divider';
import Marquee from '../components/UI/Marquee';
import MintSection from '../components/PageComponents/Home/MintSection';
import OpenseaBannerSection from '../components/PageComponents/Home/OpenseaBannerSection';
import SoldOutSection from '../components/PageComponents/Home/SoldOutSection';
import IntroSection from '../components/PageComponents/Home/IntroSection';
import FaqsSection from '../components/PageComponents/Home/FaqsSection';
import {NFT_CONTRACT_ADDRESS, NFT_ABI} from '../consts/consts';
import useNftData from '../hooks/useNftData';

const Home = () => {
  const {setPageTitle, setMetaDescription} = useGlobalContext();
  const mintSectionRef = useRef<null | HTMLDivElement>(null);
  const {account, provider, isActive} = useWeb3React();
  const signer = provider?.getSigner();
  const {nftCost} = useNftData(NFT_CONTRACT_ADDRESS, NFT_ABI, signer);
  console.log('ACCOUNT (Home):', account, isActive);
  // @TODO update this with logic after hardhat configuration
  const isSoldOut = false;

  useEffect(() => {
    setPageTitle('Home | 0xWF');
    setMetaDescription('Home of 0xWF NFT. Mint your NFT here and learn more about our project');
  }, []);

  const handleScrollToMintSection = () => {
    if (mintSectionRef && mintSectionRef.current) {
      mintSectionRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  // const mintNFTHandler = async () => {
  //   if (revealTime > new Date().getTime()) {
  //     window.alert('Minting is not live yet!');
  //     return;
  //   }

  //   if (ownerOf.length > 0) {
  //     window.alert('You\'ve already minted!');
  //     return;
  //   }

  //   // Mint NFT
  //   if (openPunks && account) {
  //     setIsMinting(true);
  //     setIsError(false);

  //     await openPunks.methods.mint(1).send({from: account, value: 0})
  //         .on('confirmation', async () => {
  //           const maxSupply = await openPunks.methods.maxSupply().call();
  //           const totalSupply = await openPunks.methods.totalSupply().call();
  //           setSupplyAvailable(maxSupply - totalSupply);

  //           const ownerOf = await openPunks.methods.walletOfOwner(account).call();
  //           setOwnerOf(ownerOf);
  //         })
  //         .on('error', (error) => {
  //           window.alert(error);
  //           setIsError(true);
  //         });
  //   }

  //   setIsMinting(false);
  // };

  return (
    <Layout>
      <Marquee marqueeText="Minting May 26 ·" reverse />
      <IntroSection handleScrollToMintSection={handleScrollToMintSection} isSoldOut={isSoldOut} />
      {isSoldOut ? <SoldOutSection /> : <MintSection mintSectionRef={mintSectionRef} nftCost={nftCost} isAccountConnected={isActive} />}
      <Marquee marqueeText="Minting May 26 ·" />
      <FaqsSection />
      {isSoldOut ? (
        <>
          <Divider horizontal />
          <OpenseaBannerSection />
        </>
      ): null }
    </Layout>
  );
};

export default Home;
