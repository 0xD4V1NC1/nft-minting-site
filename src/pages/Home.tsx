import React, {useEffect, useRef} from 'react';

import {useGlobalContext} from '../providers/GlobalContextProvider';
import Layout from '../components/Layout/Layout';
import Divider from '../components/UI/Divider';
import Marquee from '../components/UI/Marquee';
import MintSection from '../components/PageComponents/Home/MintSection';
import OpenseaBannerSection from '../components/PageComponents/Home/OpenseaBannerSection';
import SoldOutSection from '../components/PageComponents/Home/SoldOutSection';
import IntroSection from '../components/PageComponents/Home/IntroSection';
import FaqsSection from '../components/PageComponents/Home/FaqsSection';

const Home = () => {
  const {setPageTitle, setMetaDescription} = useGlobalContext();
  const mintSectionRef = useRef<null | HTMLDivElement>(null);
  // @TODO update this with logic after hardhat configuration.
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

  return (
    <Layout>
      <Marquee marqueeText="Minting May 26 ·" reverse />
      <IntroSection handleScrollToMintSection={handleScrollToMintSection} isSoldOut={isSoldOut} />
      {isSoldOut ? <SoldOutSection /> : <MintSection mintSectionRef={mintSectionRef} />}
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
