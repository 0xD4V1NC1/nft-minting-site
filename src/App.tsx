import React, {useState, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom'; // allows for routing in our app
import {useWeb3React} from '@web3-react/core';

/* allows us to update the <head> element of our app needed to
 dynamically change things such as page title */
import {Helmet} from 'react-helmet';

// import Application Routes to App.js to keep file structure cleaner
import AppRoutes from './AppRoutes';
import {GlobalContext} from './providers/GlobalContextProvider';
const App = () => {
  const [pageTitle, setPageTitle]= useState<string>('');
  const [metaDescription, setMetaDescription]= useState<string>('');
  const {connector} = useWeb3React();

  useEffect(() => {
    // written like that b/c of type error 'cannot invoke an object which is possibly undefined'
    // this is what attempts to keep wallet connection when returning to the site
    connector.connectEagerly?.();
  }, []);

  return (
    <BrowserRouter>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={`${metaDescription || '0xWF is revolutionary NFT project'}`} />
      </Helmet>
      <GlobalContext.Provider value={{pageTitle, setPageTitle, metaDescription, setMetaDescription}}>
        <div className="app">
          <AppRoutes/>
        </div>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
};

export default App;
