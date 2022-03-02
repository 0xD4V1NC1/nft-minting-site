import React, {useEffect} from 'react';
import {useGlobalContext} from '../providers/GlobalContextProvider';
import Layout from '../components/Layout/Layout';
import Divider from '../components/UI/Divider';
import Marquee from '../components/UI/Marquee';
import MintSection from '../components/PageComponents/Home/MintSection';
import OpenseaBannerSection from '../components/PageComponents/Home/OpenseaBannerSection';
import SoldOutSection from '../components/PageComponents/Home/SoldOutSection';
import IntroSection from '../components/PageComponents/Home/IntroSection';

const Home = () => {
  const {setPageTitle} = useGlobalContext();
  useEffect(() => {
    setPageTitle('Home | 0xWF');
  }, []);
  return (
    <Layout>
      <IntroSection />
      <Divider />
      <Marquee marqueeText="Minting March 23 ·"/>
      <MintSection />
      <SoldOutSection />
      <Marquee marqueeText="Minting March 23 ·" reverse />
      <OpenseaBannerSection />
    </Layout>
  );
};

export default Home;
