import React from 'react';
import Logo from '../../UI/icons/logo';
import LinkTo from '../../Components/LinkTo';
import ConnectWalletButton from '../../Components/ConnectWalletButton';
import Icon from '../../UI/Icon';


const DesktopNav = () => {
  return (
    <div className='hidden md:flex md:justify-between md:items-center'>
      <LinkTo to="/" ariaLabel='Link to Home Page'>
        <div className='flex items-center hover:bg-indigo-200 md:py-2 md:px-4'>
          <Logo formattedClassName='w-12 h-12 text-primary-500'/>
          <h2 className='ml-4 font-semibold text-xl'> 0xWolfpackFinance </h2>
        </div>
      </LinkTo>
      <div className='mx-4 my-2 flex items-center'>
        <div className='mr-4'>
          <Icon name='moon' color='black' size='large' />
        </div>
        <ConnectWalletButton />
      </div>
      {/* <div id='connect-wallet-gradient-border' className='p-1 bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-500 rounded hover:animate-pulse mx-4 my-2' >
        <Button type='button' color='white' text='Connect Wallet' className='py-2 px-6 text-primary-500'/>
      </div> */}
    </div>
  );
};
export default DesktopNav;
