import React from 'react';
import {Navigate} from 'react-router-dom';
import useNftOwner from '../hooks/useNftOwner';

const MembersOnlyRoute = ({children} : {children: JSX.Element}) =>{
  const {isOwnerOf} = useNftOwner();
  console.log('isOwnerOf:', isOwnerOf);
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
