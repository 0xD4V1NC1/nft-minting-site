import React from 'react';
import type {CoinbaseWallet} from '@web3-react/coinbase-wallet';
import type {MetaMask} from '@web3-react/metamask';
import {Network} from '@web3-react/network';
import {WalletConnect} from '@web3-react/walletconnect';

const AddressInformationButton = ({address, connector}: {address:string, connector: MetaMask | WalletConnect | CoinbaseWallet | Network}) => {
  if (!address) return null;

  return (
    <div>
      {address}
      <button onClick={() => connector.deactivate()}>Disconnect</button>

    </div>
  );
};
export default AddressInformationButton;
