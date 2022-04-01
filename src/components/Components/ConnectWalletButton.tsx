import React from 'react';
import Button from '../UI/Button';

const ConnectWalletButton = () => {
  return (
    <div id='connect-wallet-gradient-border' className='p-0.5 bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-500 rounded hover:bg-rainbow hover:animate-rainbow' >
      <Button type='button' ariaLabel='Click to connect metamask wallet' color='primary-gradient-outline' text='Connect Wallet' className='py-2 px-6'/>
    </div>
  );
};
export default ConnectWalletButton;
