import React, {useEffect} from 'react';
import Layout from '../components/Layout/Layout';
import {useGlobalContext} from '../providers/GlobalContextProvider';

const MembersOnly = () => {
  const {setPageTitle} = useGlobalContext();
  useEffect(() => {
    setPageTitle('Members | 0xWF');
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
