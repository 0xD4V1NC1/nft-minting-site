import React, {useState, useLayoutEffect, useRef, RefObject} from 'react';
import Countdown from 'react-countdown';
import {useWeb3React} from '@web3-react/core';

import Button from '../../UI/Button';
import Image from '../../UI/Image';

import {handleMint} from '../../../utils/mintUtil';
// use https://codechi.com/dev-tools/date-to-millisecond-calculators/ to calculate future date in milliseconds
import {NFT_MINT_DATE} from '../../../consts/consts';

const MintSection = ({mintSectionRef, nftCost, isAccountConnected}:{mintSectionRef: RefObject<HTMLDivElement>, nftCost: string, isAccountConnected: boolean}) => {
  const [countdownCompleted, setCountdownCompleted] = useState(false);
  const [mintAmount, setMintAmount] = useState(1);
  const countdownRef = useRef<Countdown>(null);
  const {provider} = useWeb3React();


  // check dom before rendering to see if we should display completed countdown timer state
  useLayoutEffect(() => {
    const isCountdownCompleted = countdownRef.current?.api?.isCompleted();

    if (isCountdownCompleted) setCountdownCompleted(true);
  }, [countdownCompleted]);

  const handleCountdownCompleted = () => {
    setCountdownCompleted(true);
  };

  const handleIncrement = () => {
    // @TODO max sure not bigger then the max amount or amount left...?
    if (mintAmount > 3) return;
    const incrementedAmount = mintAmount +1;
    setMintAmount(incrementedAmount);
  };

  const handleDecrement = () => {
    if (mintAmount < 1) return;
    const decrementedAmount = mintAmount - 1;
    setMintAmount(decrementedAmount);
  };

  const disabledProp = countdownCompleted ? null: {disabled: true};
  const decrementAriaLabel = mintAmount > 0 ? mintAmount - 1: 0;
  console.log('MINT AMOUNT (MintSection):', mintAmount);
  return (
    <section id='mint-section' ref={mintSectionRef} className='min-h-screen bg-white dark:bg-primary-dark-500 px-16 py-8 m-auto'>
      <div className='flex flex-col justify-center md:flex-row md:items-end md:gap-48 w-full'>
        <div className='flex flex-col'>
          <h2 className='mb-12 text-8xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-500'> 0xWF</h2>
          <Image src='/preview.gif' size='w-full h-full md:w-72 md:h-72' marginBottom='mb-0' className='rounded-3xl'/>
        </div>
        <div className='w-full md:w-1/2'>
          <h2 className='mt-8 md:mt-0 flex flex-col text-center text-5xl font-black md:text-8xl dark:text-white'>
            <Countdown date={NFT_MINT_DATE} ref={countdownRef}
              onComplete={() => handleCountdownCompleted()} />
            <span className='text-5xl text-primary-400'> Minted </span>
          </h2>
          <div className='relative w-full overflow-hidden rounded-3xl bg-primary-400 p-6 py-12 mt-12' >
            {isAccountConnected ? (
              <div className='h-36 md:h-48'>
                <div className='flex'>
                  <Button type='button' color='blue' ariaLabel={`Click to Decrement to ${decrementAriaLabel} NFTs`} text='-' onClick={handleDecrement} />
                  <input type="number" className='' value={mintAmount}/>
                  <Button type='button' color='red' ariaLabel={`Click to Increment to ${mintAmount+1} NFTs`} text='+' onClick={handleIncrement} />
                </div>
                <Button type='button' ariaLabel='Click to Mint an NFT' color='primary-gradient' className='font-semibold px-8 py-1' text='MINT' {...disabledProp} onClick={() => handleMint(mintAmount, provider)}/>
              </div>
              ) : (
                <div>
                  <p> Please Connect your wallet to Mint NFT</p>
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default MintSection;
