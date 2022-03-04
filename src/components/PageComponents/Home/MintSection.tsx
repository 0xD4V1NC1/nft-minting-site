import React from 'react';
import Image from '../../UI/Image';
import Button from '../../UI/Button';

// import Countdown from 'react-countdown';

const MintSection = () => {
  return (
    <section id='mint-section' className='min-h-screen bg-white dark:bg-primary-dark-500 px-16 py-8 m-auto'>
      <div className='flex flex-col justify-center md:flex-row md:items-end md:gap-48 w-full'>
        <div className='flex flex-col'>
          <h2 className='mb-12 text-8xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-500'> 0xWF</h2>
          <Image src='/preview.gif' size='w-full h-full md:w-72 md:h-72' marginBottom='mb-0' className='rounded-3xl'/>
        </div>
        <div className='w-full md:w-1/2'>
          <h2 className='mt-8 md:mt-0 flex flex-col text-center text-5xl font-black md:text-8xl'>
            <span className='text-black dark:text-white'> Countdown Timer here </span>
            <span className='text-5xl text-primary-400'> Minted </span>
          </h2>
          <div className='relative w-full overflow-hidden rounded-3xl bg-primary-400 p-6 py-12 mt-12' >
            <div className='h-36 md:h-48'>
              <p>can you see me</p>
              <Button type='button' ariaLabel='Click to Mint an NFT' color='primary-gradient' className='font-semibold px-8 py-1' text='MINT' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MintSection;
