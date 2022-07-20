import React, {useState, useLayoutEffect, useRef, RefObject, useEffect} from 'react';
import Countdown from 'react-countdown';
import {useWeb3React} from '@web3-react/core';

import Button from '../../UI/Button';
import Image from '../../UI/Image';

// use https://codechi.com/dev-tools/date-to-millisecond-calculators/ to calculate future date in milliseconds
import {NFT_MINT_DATE} from '../../../consts/consts';

import {handleMint} from '../../../utils/mintUtil';
import {pluralize} from '../../../utils/formatUtil';
import {useToastContext} from '../../../providers/ToastContext';

const MintSection = ({
  mintSectionRef,
  nftCost,
  isAccountConnected,
  maxAmount,
  currentNftId,
  availableMints,
}: {
  mintSectionRef: RefObject<HTMLDivElement>;
  nftCost: number;
  isAccountConnected: boolean;
  maxAmount: number;
  currentNftId: number;
  availableMints: number;
}) => {
  const [countdownCompleted, setCountdownCompleted] = useState<boolean>(false);
  const [mintAmount, setMintAmount] = useState<number>(1);
  const countdownRef = useRef<Countdown>(null);
  const [isMinting, setIsMinting] = useState<boolean>(false);
  const {provider} = useWeb3React();
  const {addToast} = useToastContext();

  // check dom before rendering to see if we should display completed countdown timer state
  useLayoutEffect(() => {
    const isCountdownCompleted = countdownRef.current?.api?.isCompleted();
    if (isCountdownCompleted) setCountdownCompleted(true);
  }, [countdownCompleted]);

  useEffect(() => {
    if (availableMints === 0) setMintAmount(0);
  }, [availableMints]);
  const handleCountdownCompleted = () => {
    setCountdownCompleted(true);
  };

  const handleIncrement = () => {
    if (mintAmount >= availableMints) return;
    const incrementedAmount = mintAmount + 1;
    setMintAmount(incrementedAmount);
  };

  const handleDecrement = () => {
    // doesn't make sense to let the user to set it to 0
    if (mintAmount <= 1) return;
    const decrementedAmount = mintAmount - 1;
    setMintAmount(decrementedAmount);
  };

  const validateKeyPress = (e: any) => {
    const some = Number(e.key).toString();
    const validKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight'];
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      handleIncrement();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      handleDecrement();
    } else if (!/^[0-9]\d*$/.test(some) && validKeys.indexOf(e.key) === -1) {
      e.preventDefault();
    }
  };

  const disabledProp = countdownCompleted && availableMints > 0? null : {disabled: true};
  const decrementAriaLabel = mintAmount > 0 ? mintAmount - 1 : 0;
  const totalCost = (nftCost * mintAmount);
  const formattedTotalCost = totalCost.toFixed(2);
  const mintTextColor = availableMints > 0 ? 'text-black dark:text-white' : 'text-red-500';
  return (
    <section
      id="mint-section"
      ref={mintSectionRef}
      className="min-h-screen bg-white dark:bg-primary-dark-500 px-16 py-8 m-auto scroll-mt-8"
    >
      <div className="flex flex-col justify-center md:flex-row md:items-end sm:gap-24 lg:gap-36 w-full">
        <div className="flex flex-col">
          <h2 className="mb-12 text-8xl md:text-6xl lg:text-8xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-500">
            0xWF
          </h2>
          <Image
            src="/preview.gif"
            size="w-full h-full md:w-72 md:h-72"
            marginBottom="mb-0"
            className="rounded-3xl"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="mt-8 md:mt-0 flex flex-col text-center font-black text-4xl md:text-6xl lg:text-7xl dark:text-white overflow-hidden">
            <Countdown
              date={NFT_MINT_DATE}
              ref={countdownRef}
              onComplete={() => handleCountdownCompleted()}
            />
            {isAccountConnected ? <span className="text-5xl text-primary-400"> {currentNftId} / {maxAmount} Minted </span> : null}
          </h2>
          <div className="relative w-full overflow-hidden rounded-3xl bg-[#f5f5f5] dark:bg-primary-dark-400 text-black dark:text-white p-6 py-12 mt-12">
            {isAccountConnected ? (
              <div className="h-48 flex flex-col justify-center items-center">
                <h3 className='mb-4 text-3xl font-semibold'>Mint Cost: {formattedTotalCost} Ξ</h3>
                <div className="flex justify-center items-center pb-4">
                  <Button
                    type="button"
                    color="primary-gradient"
                    className="px-6 py-4 mr-4"
                    ariaLabel={`Click to Decrement to ${decrementAriaLabel} NFTs`}
                    text="-"
                    onClick={handleDecrement}
                  />
                  <input
                    type="number"
                    className={`mb-0 box-content border-none text-black text-center p-4 w-1/2`}
                    onKeyDown={(e) => validateKeyPress(e)}
                    onChange={(e) => {
                      if (parseInt(e.target.value) < 4 && parseInt(e.target.value) > 0) {
                        setMintAmount(parseInt(e.target.value));
                      }
                    }}
                    value={mintAmount}
                    aria-required
                  />
                  <Button
                    type="button"
                    color="primary-gradient"
                    className="px-6 py-4 ml-4"
                    ariaLabel={`Click to Increment to ${mintAmount + 1} NFTs`}
                    text="+"
                    onClick={handleIncrement}
                  />
                </div>
                <Button
                  type="button"
                  ariaLabel="Click to Mint an NFT"
                  color="primary-gradient"
                  className="font-semibold px-[5.5rem] py-4"
                  text="MINT"
                  {...disabledProp}
                  onClick={() => {
                    setIsMinting(true);
                    handleMint(mintAmount, provider, nftCost, addToast);
                    setIsMinting(false);
                  }}
                  loading={isMinting}
                />
                <p className={`${mintTextColor} pt-4`}> You have {availableMints} {pluralize(availableMints, 'mint')} left</p>
              </div>
            ) : (
              <div className="h-36 md:h-48 flex justify-center items-center text-center">
                <h3 className="text-4xl font-semibold">
                  {' '}
                  Please Connect your wallet to Mint NFT
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default MintSection;
