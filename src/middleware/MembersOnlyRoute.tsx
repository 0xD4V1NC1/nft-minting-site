import React, {useEffect, useState} from 'react';
import {Navigate} from 'react-router-dom';
import Loading from '../components/UI/Loading';
import {useNftOwnerContext} from '../providers/NftOwnerContext';
import {useGlobalContext} from '../providers/GlobalContext';

const MembersOnlyRoute = ({children} : {children: JSX.Element}) =>{
  const {isOwnerOf, isLoadingNftOwnerData} = useNftOwnerContext();
  const {account} = useGlobalContext();
  const [isDataLoading, setIsDataLoading] = useState<boolean>(isLoadingNftOwnerData);

  useEffect(() => {
    setIsDataLoading(isLoadingNftOwnerData);
  }, [isLoadingNftOwnerData, account]);

  if (isDataLoading) {
    return (
      <main className='w-full h-full flex justify-center items-center top-0 left-0 fixed'>
        <Loading className='w-16 h-16' message='Loading...'/>
      </main>
    );
  }
  /*
      if you are connected and owner... allow you to navigate to this page

      if not owner... return to home page
    */
  if (isOwnerOf) {
    return children;
  }
  return <Navigate to="/" />;
};
export default MembersOnlyRoute;
