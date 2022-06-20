import React, {useEffect, useRef, useState} from 'react';

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
import useNftOwner from '../hooks/useNftOwner';

const Home = () => {
  const {setPageTitle, setMetaDescription} = useGlobalContext();
  const mintSectionRef = useRef<null | HTMLDivElement>(null);
  const {account, provider, isActive} = useWeb3React();
  const signer = provider?.getSigner();
  const {nftCost, maxNftSupply, currentNftId, isNftDataLoading} = useNftData(NFT_CONTRACT_ADDRESS, NFT_ABI, signer);
  const {nftsOwned} = useNftOwner(NFT_CONTRACT_ADDRESS, NFT_ABI, account, signer);
  console.log('nftsOwned: ', nftsOwned.toString());
  const [isSoldOut, setIsSoldOut] = useState(false);
  console.log('ACCOUNT (Home):', account, isActive, nftCost, maxNftSupply, currentNftId);

  useEffect(() => {
    setPageTitle('Home | 0xWF');
    setMetaDescription('Home of 0xWF NFT. Mint your NFT here and learn more about our project');
    if (!isNftDataLoading && parseInt(currentNftId) >= parseInt(maxNftSupply)) {
      console.error('parseInt(currentNftId) >= parseInt(maxNftSupply):', parseInt(currentNftId), parseInt(maxNftSupply));
      setIsSoldOut(true);
    }
  }, []);

  const handleScrollToMintSection = () => {
    if (mintSectionRef && mintSectionRef.current) {
      mintSectionRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <Layout>
      <Marquee marqueeText="Minting May 26 ·" reverse />
      <IntroSection handleScrollToMintSection={handleScrollToMintSection} isSoldOut={isSoldOut} />
      {isSoldOut ? <SoldOutSection /> : <MintSection mintSectionRef={mintSectionRef} nftCost={nftCost} isAccountConnected={isActive} maxAmount={maxNftSupply} currentNftId={currentNftId} />}
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
