import React from 'react';
import {useWeb3React} from '@web3-react/core';

import ConnectWalletButton from './ConnectWalletButton';
import AddressInformationButton from './AddressInformationButton';
import {useGlobalContext} from '../../providers/GlobalContext';


const AccountButton = () => {
  const {connector, isActive} = useWeb3React();
  const {account} = useGlobalContext();
  return (
    <>
      {isActive ? <AddressInformationButton address={account || ''} connector={connector} /> : <ConnectWalletButton />}
    </>
  );
};
export default AccountButton;
