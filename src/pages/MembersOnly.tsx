import React, {useEffect} from 'react';
import {useWeb3React} from '@web3-react/core';

import Layout from '../components/Layout/Layout';

import {useGlobalContext} from '../providers/GlobalContextProvider';
import useNftOwner from '../hooks/useNftOwner';


const MembersOnlySection = ({isActive, isOwnerOf}: {isActive:boolean, isOwnerOf:any}) => {
  if (!isActive) {
    return null;
  }
  return (
    <>
      {isOwnerOf ? <p>You Own some NFTs</p> : <p>You Do not own any NFTs</p>}
    </>
  );
};

const MembersOnly = () => {
  const {setPageTitle, setMetaDescription} = useGlobalContext();
  const {isActive} = useWeb3React();
  const {isOwnerOf} = useNftOwner();

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
        <h2 className="text-4xl text-center font-semibold py-4"> Members Only </h2>
        {!isActive && <p className='text-center font-medium text-2xl'>Please connect your wallet</p>}
        <MembersOnlySection isActive={isActive} isOwnerOf={isOwnerOf} />
      </section>
    </Layout>
  );
};
export default MembersOnly;
