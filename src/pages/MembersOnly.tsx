import React, {useEffect, useState} from 'react';
import {useWeb3React} from '@web3-react/core';

import Layout from '../components/Layout/Layout';
import Image from '../components/UI/Image';
import Loading from '../components/UI/Loading';

import {useGlobalContext} from '../providers/GlobalContext';
import {useNftOwnerContext} from '../providers/NftOwnerContext';

import {NFT_IMAGE_CID, NFT_HIDDEN_IMAGE_CID, GRADIENT_TEXT} from '../consts/consts';

const UsersNfts = ({nftsOwned}: { nftsOwned: number[]}) => {
  const [isImgLoading, setIsImgLoading] = useState<boolean>(true);
  const isHidden = true;
  const imgCID = isHidden ? NFT_HIDDEN_IMAGE_CID : NFT_IMAGE_CID;
  // @TODO this is one way of doing it but it may be very slow... alternative is saving all of the NFTs locally to the project (depending on file size...)
  return (
    <div className='pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center'>
      { nftsOwned.map((nftTokenId) => {
        const nft = `/${nftTokenId}.png`;
        const nftImageUrl = `https://ipfs.io/ipfs/${imgCID}${ isHidden ? '' : nft}`;

        return (
          <div key={`nft-${nftTokenId}`}>
            <h2 className={`pb-4 text-2xl font-semibold text-center ${GRADIENT_TEXT}`}>0xWF #{nftTokenId}</h2>
            {isImgLoading ?
            <div className='h-96 w-72'>
              <Loading message='loading nft...' className='w-12 h-12'/>
            </div> : null}
            <Image
              src={nftImageUrl}
              alt={`Nft #${nftTokenId}`}
              size='h-96 w-72'
              className='rounded-lg'
              setIsImgLoading={setIsImgLoading}
            />
          </div>
        );
      })
      }
    </div>
  );
};

const MembersOnlySection = ({isActive, isOwnerOf, nftsOwned}: {isActive:boolean, isOwnerOf:boolean | null, nftsOwned:number[]}) => {
  if (!isActive) {
    return null;
  }
  return (
    <div className='mx-12 md:mx-32'>
      {isOwnerOf ? <UsersNfts nftsOwned={nftsOwned} /> : <p>You Do not own any NFTs</p>}
    </div>
  );
};

const MembersOnly = () => {
  const {setPageTitle, setMetaDescription} = useGlobalContext();
  const {isActive} = useWeb3React();
  const {isOwnerOf, nftsOwned} = useNftOwnerContext();

  useEffect(() => {
    setPageTitle('Members | 0xWF');
    setMetaDescription(
        'Members Only page. Connect Wallet to view the dashboard.',
    );

    // scroll to top of page when navigated to
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="min-h-screen bg-white dark:bg-primary-dark-500">
        <h2 className="text-4xl text-center font-semibold py-4 text-black dark:text-white"> Members Only </h2>
        {!isActive && <p className='text-center font-medium text-2xl'>Please connect your wallet</p>}
        <MembersOnlySection isActive={isActive} isOwnerOf={isOwnerOf} nftsOwned={nftsOwned} />
      </section>
    </Layout>
  );
};
export default MembersOnly;
