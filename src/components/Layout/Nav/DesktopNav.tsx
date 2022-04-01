import React from 'react';

import Logo from '../../UI/icons/logo';
import LinkTo from '../../Components/LinkTo';
import ConnectWalletButton from '../../Components/ConnectWalletButton';
import DarkModeToggle from '../../Components/DarkModeToggle';

const DesktopNav = () => {
  return (
    <div className='hidden md:flex md:justify-between md:items-center'>
      <LinkTo to="/" ariaLabel='Link to Home Page'>
        <div className='flex items-center hover:bg-primary-400 md:py-2 md:px-4'>
          <Logo formattedClassName='w-12 h-12' gradient gradientId='desktop-logo'/>
          <h2 className='ml-4 font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-500'> 0xWolfpackFinance </h2>
        </div>
      </LinkTo>
      <div className='mx-4 my-2 flex items-center'>
        <div className='mr-4'>
          <DarkModeToggle />
        </div>
        <ConnectWalletButton />
      </div>
    </div>
  );
};
export default DesktopNav;
