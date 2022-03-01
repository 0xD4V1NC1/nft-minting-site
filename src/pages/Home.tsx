import React, {useEffect} from 'react';
import {useGlobalContext} from '../providers/GlobalContextProvider';
import Layout from '../components/Layout/Layout';
import Divider from '../components/UI/Divider';
import Marquee from '../components/UI/Marquee';
import MintSection from '../components/PageComponents/Home/MintSection';
import Button from '../components/UI/Button';
import Image from '../components/UI/Image';

const Home = () => {
  const {setPageTitle} = useGlobalContext();
  useEffect(() => {
    setPageTitle('Home | 0xWF');
  }, []);
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center h-screen text-red-300 bg-gradient-to-br from-white via-white to-primary-500 dark:bg-gradient-to-br dark:from-primary-dark-500 dark:via-primary-dark-500 dark:to-primary-dark-400">
        <h1 className='text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-red-600'>Gradient Text</h1>
        <div className="flex justify-center mt-4">
          <a
            className="px-4 py-2 text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600"
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
      <section className='min-h-screen bg-white dark:bg-primary-dark-500 px-8'>
        <div className='flex gap-8'>
          <div className=''>
            <Image src='/preview.gif' size='w-64 h-64'/>
          </div>
          <div>
            <h2> SOme shit was minted</h2>
            <div className='relative w-1/2 overflow-hidden rounded-3xl bg-blue-400 bg-opacity-50 p-6 py-12' >
              <div className='h-36 md:h-48'>
                <div className='absolute inset-0 z-10 flex w-full items-center justify-center bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url('/sold-out.svg')`}}>
                  {/* @TODO: Change this link  */}
                  <Button type="button" href="https://www.opensea.io" color="primary" className='text-sm py-2 px-6 uppercase md:text-xl'> Shop on Opensea</Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
