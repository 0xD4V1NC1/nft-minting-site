import React from 'react';
import Button from '../../UI/Button';

const ViewOnOpenSeaSection = () => {
  return (
    <section className='py-8 bg-white dark:bg-primary-dark-500'>
      <div className='p-4 m-auto bg-secondary-500 flex flex-col md:flex-row justify-center md:justify-between w-4/5 text-center'>
        <h3 className='text-2xl font-extrabold italic text-center m-auto px-8 py-4'> Buy an 0xWF NFT</h3>
        <p className='text-base m-auto p-4'> The initial sale has sold out. To get your 0xWF NFT, check out the collection on OpenSea.</p>
        {/* @TODO change this link */}
        <Button type="button" ariaLabel='Click to purchase on Opensea' color='primary-gradient' className='py-2 px-6 ml-4 mr-8 my-4 font-bold' text='BUY A 0xWF NFT ON OPENSEA' href='https://opensea.io' />
      </div>
    </section>
  );
};
export default ViewOnOpenSeaSection;
