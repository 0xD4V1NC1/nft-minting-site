import React from "react";
import { BrowserRouter } from "react-router-dom"; // allows for routing in our app
import { Helmet } from 'react-helmet'; // allows us to update the <head> element of our app needed to dynamically change things such as page title

// import Application Routes to App.js to keep file structure cleaner 
import AppRoutes from './AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Some Title</title>
      </Helmet>
      <div className="App">
        <h1>Welcome to React Router!</h1>
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
