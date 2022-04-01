import React, {useEffect} from 'react';
import Layout from '../components/Layout/Layout';
import {useGlobalContext} from '../providers/GlobalContextProvider';

const MembersOnly = () => {
  const {setPageTitle, setMetaDescription} = useGlobalContext();
  useEffect(() => {
    setPageTitle('Members | 0xWF');
    setMetaDescription('Members Only page. Connect Wallet to view the dashboard.');

    // scroll to top of page when navigated to
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <section className='min-h-screen bg-white dark:bg-primary-dark-500'>
            This is page 2
      </section>
    </Layout>
  );
};
export default MembersOnly;
