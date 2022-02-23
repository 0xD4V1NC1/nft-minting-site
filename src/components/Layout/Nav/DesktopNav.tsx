import React from 'react';
import Button from '../../UI/Button';

const DesktopNav = () => {
  return (
    <div className='hidden md:flex md:justify-between md:items-center md:py-2 md:px-4'>
      <h2> Desktop Nav</h2>
      <div id='connect-wallet-gradient-border' className='p-1 bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-500 rounded hover:animate-pulse' >
        <Button type='button' color='white' text='Connect Wallet' className='py-2 px-6 text-primary-500'/>
      </div>
    </div>
  );
};
export default DesktopNav;
