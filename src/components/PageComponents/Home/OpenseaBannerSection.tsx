import React from 'react';

import useOpenSeaURL from '../../../hooks/useOpenSeaURL';
import Button from '../../UI/Button';
import config from '../../../config.json';

const ViewOnOpenSeaSection = () => {
  const {openseaURL} = useOpenSeaURL();
  return (
    <section className='py-8 bg-white dark:bg-primary-dark-500'>
      <div className='p-4 m-auto bg-secondary-500 flex flex-col md:flex-row justify-center md:justify-between w-4/5 text-center'>
        <h3 className='text-2xl font-extrabold italic text-center m-auto px-8 py-4'> Buy an 0xWF NFT</h3>
        <p className='text-base m-auto p-4'> The initial sale has sold out. To get your 0xWF NFT, check out the collection on OpenSea.</p>
        <Button type="button" ariaLabel='Click to purchase on Opensea' color='primary-gradient' className='py-2 px-6 ml-4 mr-8 my-4 font-bold' text='BUY A 0xWF NFT ON OPENSEA' href={`${openseaURL}/collection/${config.PROJECT_NAME}`}
        />
      </div>
    </section>
  );
};
export default ViewOnOpenSeaSection;
