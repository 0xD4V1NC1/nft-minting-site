import React from 'react';
import Button from '../../UI/Button';

const IntroSection = ({handleScrollToMintSection, isSoldOut}: {handleScrollToMintSection:()=> void, isSoldOut:boolean}) => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-red-300 bg-gradient-to-br from-white via-white to-primary-500 dark:bg-gradient-to-br dark:from-primary-500 dark:via-primary-dark-400 dark:to-primary-dark-500">
      <h1 className='text-5xl text-center md:text-9xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-500 mb-4'>0xWolfpack <br/> Finance</h1>
      <div className="flex justify-center mt-4">
        {isSoldOut ?
          <Button
            type="button"
            ariaLabel='Click to view collection on opensea'
            href="https://www.opensea.io"
            color="primary-gradient"
            className='px-8 py-2 md:px-16 md:py-4 md:text-2xl font-semibold rounded-full'
            text='Shop on Opensea'
          /> :
          <Button
            type='button'
            ariaLabel='Click to scroll to mint section'
            color='primary-gradient' text='Mint NFT'
            className='px-8 py-2 md:px-16 md:py-4 md:text-2xl font-semibold rounded-full'
            onClick={ ()=> handleScrollToMintSection()}
          />
        }
      </div>
    </section>
  );
};
export default IntroSection;
