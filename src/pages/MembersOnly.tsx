import React, {useEffect} from 'react';
import Layout from '../components/Layout/Layout';
import {useGlobalContext} from '../providers/GlobalContextProvider';
import {walletConnect} from '../connectors/walletConnect';

const MembersOnly = () => {
  const {setPageTitle, setMetaDescription} = useGlobalContext();
  useEffect(() => {
    setPageTitle('Members | 0xWF');
    setMetaDescription('Members Only page. Connect Wallet to view the dashboard.');

    // scroll to top of page when navigated to
    window.scrollTo(0, 0);
  }, []);
  const activateWalletConnect = async () => {
    await walletConnect.activate(1).then(() => console.log('should activate'));
  };
  return (
    <Layout>
      <section className='min-h-screen bg-white dark:bg-primary-dark-500'>
        <button className='bg-red-500 py-2 px-4 text-white' onClick={() => activateWalletConnect() }> Click to activate </button>
      </section>
    </Layout>
  );
};
export default MembersOnly;
