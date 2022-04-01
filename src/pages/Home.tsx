import React, {useEffect} from 'react';
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
  useEffect(() => {
    setPageTitle('Home | 0xWF');
    setMetaDescription('Home of 0xWF NFT. Mint your NFT here and learn more about our project');
  }, []);

  return (
    <Layout>
      <Marquee marqueeText="Minting March 23 ·" reverse />
      <IntroSection />
      <MintSection />
      <Divider horizontal />
      <SoldOutSection />
      <Marquee marqueeText="Minting March 23 ·" />
      <OpenseaBannerSection />
      <Divider horizontal />
      <FaqsSection />
    </Layout>
  );
};

export default Home;
