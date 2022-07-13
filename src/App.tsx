import React, {useState, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom'; // allows for routing in our app
import {useWeb3React} from '@web3-react/core';

/* allows us to update the <head> element of our app needed to
 dynamically change things such as page title */
import {Helmet} from 'react-helmet';

// import Application Routes to App.js to keep file structure cleaner
import AppRoutes from './AppRoutes';
import {GlobalContext} from './providers/GlobalContext';
import {NftOwnerContextProvider} from './providers/NftOwnerContext';

const App = () => {
  const [pageTitle, setPageTitle]= useState<string>('');
  const [metaDescription, setMetaDescription]= useState<string>('');
  const {connector, account} = useWeb3React();

  useEffect(() => {
    // this is what attempts to keep wallet connection when returning to the site
    connector.connectEagerly?.();
  }, []);

  return (
    <BrowserRouter>
      {/* @ts-ignore upgraded helmet types... waiting for react-helmet to upgrade... issue comes in with react 18 upgrade */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={`${metaDescription || '0xWF is revolutionary NFT project'}`} />
      </Helmet>

      <GlobalContext.Provider value={{pageTitle, setPageTitle, metaDescription, setMetaDescription, account}}>
        <NftOwnerContextProvider>
          <div className="app">
            <AppRoutes/>
          </div>
        </NftOwnerContextProvider>

      </GlobalContext.Provider>
    </BrowserRouter>

  );
};

export default App;
