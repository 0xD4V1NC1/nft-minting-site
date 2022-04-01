import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import MembersOnly from './pages/MembersOnly';
import Tos from './pages/Tos';

/* here is where we store all of the routes for our pages.
 Any new page needs to be added to this file, and its correlated paths ...*/
export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members-only" element={<MembersOnly />} />
        <Route path="/terms-of-service" element={<Tos />} />
        <Route path="*" element={()=> <h2>Page Not Found</h2>} />
      </Routes>
    </>
  );
}
