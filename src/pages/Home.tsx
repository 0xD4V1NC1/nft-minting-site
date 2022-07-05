import React, {useEffect, useRef, useState} from 'react';

import {useWeb3React} from '@web3-react/core';

import {useGlobalContext} from '../providers/GlobalContextProvider';

import Layout from '../components/Layout/Layout';
import Divider from '../components/UI/Divider';
import Marquee from '../components/UI/Marquee';
import MintSection from '../components/PageComponents/Home/MintSection';
import OpenseaBannerSection from '../components/PageComponents/Home/OpenseaBannerSection';
import SoldOutSection from '../components/PageComponents/Home/SoldOutSection';
import IntroSection from '../components/PageComponents/Home/IntroSection';
import FaqsSection from '../components/PageComponents/Home/FaqsSection';
import useNftData from '../hooks/useNftData';
import useNftOwner from '../hooks/useNftOwner';

const Home = () => {
  const {setPageTitle, setMetaDescription} = useGlobalContext();
  const mintSectionRef = useRef<null | HTMLDivElement>(null);
  const {isActive} = useWeb3React();
  // had race condition b/c of signer not being initialized when useNFTData was called... but signer as dependency caused infinite loop...
  const {nftCost, maxNftSupply, currentNftId, isNftDataLoading} = useNftData();
  const {availableMints} = useNftOwner();
  const [isSoldOut, setIsSoldOut] = useState(false);

  useEffect(() => {
    setPageTitle('Home | 0xWF');
    setMetaDescription('Home of 0xWF NFT. Mint your NFT here and learn more about our project');
    if (!isNftDataLoading && currentNftId >= maxNftSupply) {
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
      {isSoldOut ? <SoldOutSection /> : <MintSection mintSectionRef={mintSectionRef} nftCost={nftCost} isAccountConnected={isActive} maxAmount={maxNftSupply} currentNftId={currentNftId} availableMints={availableMints} />}
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
