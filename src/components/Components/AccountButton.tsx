import React from 'react';
import {useWeb3React} from '@web3-react/core';

import ConnectWalletButton from './ConnectWalletButton';
import AddressInformationButton from './AddressInformationButton';


const AccountButton = () => {
  const {connector, account, isActive} = useWeb3React();
  console.log('isActive:', isActive, account);
  return (
    <>
      {isActive ? <AddressInformationButton address={account || ''} connector={connector} /> : <ConnectWalletButton />}
    </>
  );
};
export default AccountButton;
