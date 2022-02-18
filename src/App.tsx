import React from 'react';
import {BrowserRouter} from 'react-router-dom'; // allows for routing in our app
/* allows us to update the <head> element of our app needed to
 dynamically change things such as page title */
import {Helmet} from 'react-helmet';

// import Application Routes to App.js to keep file structure cleaner
import AppRoutes from './AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Some Title</title>
      </Helmet>
      <div className="App">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
