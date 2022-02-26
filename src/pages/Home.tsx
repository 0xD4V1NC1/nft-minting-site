import React, {useEffect} from 'react';
import {useGlobalContext} from '../providers/GlobalContextProvider';
import Button from '../components/UI/Button';
import Layout from '../components/Layout/Layout';
import Divider from '../components/UI/Divider';
import Marquee from '../components/UI/Marquee';
import MintSection from '../components/PageComponents/Home/MintSection';
import SoldOut from '../components/UI/backgroundSvgs/sold-out';

const Home = () => {
  const {setPageTitle /* , setIsDarkMode, isDarkMode*/} = useGlobalContext();
  useEffect(() => {
    setPageTitle('HOme');
  }, []); // onClick={() => setIsDarkMode(!isDarkMode)}
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center h-screen text-red-300 bg-gradient-to-br from-white via-white to-primary-500">
        <Button type="button" color="blue" className='py-2 px-4' text="set isDarkMode" />
        <div className="flex justify-center mt-4">
          <a
            className="px-4 py-2 text-white bg-blue-400 hover:bg-rainbow rounded"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className="px-4 py-2 ml-4 text-white rounded bg-rainbow hover:bg-rainbow hover:animate-rainbow"
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Tailwind CSS v3.x
          </a>
        </div>
      </section>
      <Divider />
      <Marquee marqueeText="Minting March 23 ·"/>
      <MintSection />
      <Marquee marqueeText="Minting March 23 ·" reverse />
      <SoldOut />
    </Layout>
  );
};

export default Home;
