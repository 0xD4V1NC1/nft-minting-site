import React, {useState} from 'react';
import {BrowserRouter} from 'react-router-dom'; // allows for routing in our app
/* allows us to update the <head> element of our app needed to
 dynamically change things such as page title */
import {Helmet} from 'react-helmet';

// import Application Routes to App.js to keep file structure cleaner
import AppRoutes from './AppRoutes';
import {GlobalContext} from './providers/GlobalContextProvider';

const App = () => {
  const [pageTitle, setPageTitle]= useState<string>('');
  const [metaDescription, setMetaDescription]= useState<string>('');

  return (
    <BrowserRouter>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={`${metaDescription || '0xWF is revolutionary NFT project'}`} />
      </Helmet>
      <GlobalContext.Provider value={{pageTitle, setPageTitle, metaDescription, setMetaDescription}}>
        <div className="app">
          <AppRoutes />
        </div>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
};

export default App;
