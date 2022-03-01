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
      <div>
            This is page 2
      </div>
    </Layout>
  );
};
export default MembersOnly;
