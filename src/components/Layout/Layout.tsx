export {};
// import React from 'react';
// import Container from './container';
// import Navigation from './nav/navigation';
// import Footer from './nav/footer';

// const Layout = (props) => {
//   let notOnListedPages = true;
//   const {permalink} = props;
//   // do not show banner not on these pages
// //   if (
// //     // permalink === '' ||
// //     // permalink === '/' ||
// //     permalink.indexOf('/login') === 0 ||
// //     permalink.indexOf('/register') === 0 ||
// //     permalink.indexOf('/business') === 0 ||
// //     permalink.indexOf('/catalog/refined') === 0 ||
// //     permalink.indexOf('/upgrade/checkout') === 0
// //   ) {
// //     notOnListedPages = false;
// //   }
//   const {children, colorTheme, noHeader, logoOnly, noMainFooter, globalState, updateGlobalState, preview, isLogin} = props;
//   const {user, isLoggedIn} = globalState;
//           colorTheme === 'Teams' ? (
//             <img
//               width="120"
//               height="31"
//               className="mb-2 mt-2"
//               src="https://images.ctfassets.net/kvf8rpi09wgk/5mvqed7vGZQqynYaTiO6dX/141877a61e540b2a211b848f419dc2ae/cybrary_logo_white.svg"
//               alt="Cybrary For Teams Logo"
//             />
//           ) : (
//             <img
//               width="120"
//               height="31"
//               className="mb-5 mt-6"
//               src="https://images.ctfassets.net/kvf8rpi09wgk/5mvqed7vGZQqynYaTiO6dX/141877a61e540b2a211b848f419dc2ae/cybrary_logo_white.svg"
//               alt="Cybrary Logo"
//             />
//           );
//           return (
//             <>
//               {noHeader ? null : (
//               <header className="h-16">
//                 <Navigation
//                   data={contentfulNavigationBar}
//                   siteTitle={data.site.siteMetadata.title}
//                   globalState={globalState}
//                   updateGlobalState={updateGlobalState}
//                   logoOnly={logoOnly}
//                 />
//               </header>
//             )}
//               <main>{children}</main>
//               <Footer cybraryBlackLogo={cybraryBlackLogo} squeezePage={squeezePage} noMainFooter={noMainFooter} />
//             </>
//           );
// };
