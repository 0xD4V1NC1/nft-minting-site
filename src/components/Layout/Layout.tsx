import React from 'react';
import LayoutInterface from '../../interfaces/LayoutInterface';
import NavBar from './Nav/NavBar';
import Footer from './Footer/Footer';

const Layout = ({noNav, noFooter, children}: LayoutInterface) => {
  return (
    <>
      {noNav ? null : (
              <NavBar />
            )}
      <main>{children}</main>
      {noFooter ? null : ( <Footer />
)}
    </>
  );
};
export default Layout;
