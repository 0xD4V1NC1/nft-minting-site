import React, {useState, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom'; // allows for routing in our app
/* allows us to update the <head> element of our app needed to
 dynamically change things such as page title */
import {Helmet} from 'react-helmet';

// import Application Routes to App.js to keep file structure cleaner
import AppRoutes from './AppRoutes';
import {GlobalContext} from './providers/GlobalContextProvider';
import {getInitialTheme, updateTheme} from './context/themeContext';

const App = () => {
  const [pageTitle, setPageTitle]= useState<string>();
  const [theme, setTheme] = useState<string>(getInitialTheme());


  // if (initialTheme) {
  //   updateTheme(initialTheme);
  // }

  useEffect(
      () => {
        updateTheme(theme);
      },
      [theme],
  );
  return (
    <BrowserRouter>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <GlobalContext.Provider value={{pageTitle, setPageTitle, theme, setTheme}}>
        <div className={theme}>
          <AppRoutes />
        </div>
      </GlobalContext.Provider>

    </BrowserRouter>
  );
};

export default App;
