import React from 'react';
// import type {CoinbaseWallet} from '@web3-react/coinbase-wallet';
// import type {MetaMask} from '@web3-react/metamask';
// import {Network} from '@web3-react/network';
// import {WalletConnect} from '@web3-react/walletconnect';
import Button from '../UI/Button'; // MetaMask | WalletConnect | CoinbaseWallet | Network }

const AddressInformationButton = ({address, connector}: {address:string, connector?: any}) => {
  if (!address) return null;
  return (
    <div className=''>
      <div id='connect-wallet-gradient-border' className='p-0.5 bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-500 rounded hover:bg-rainbow hover:animate-rainbow' >
        <Button type='button' ariaLabel='Click to disconnect wallet' color='primary-gradient-outline' text={`${address}`} className='py-2 px-6 text-ellipsis overflow-hidden' onClick={() => connector?.deactivate()}/>
      </div>
    </div>
  );
};
export default AddressInformationButton;
