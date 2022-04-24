import React, {useEffect} from 'react';
import {hooks} from '../../connectors/metaMask';
import ConnectWalletButton from './ConnectWalletButton';
import AddressInformationButton from './AddressInformationButton';

const {useIsActive, useAccounts} = hooks;

const AccountButton = () => {
  const isActive = useIsActive();
  const account = useAccounts() || [];
  useEffect(() => {
    connector?.connectEagerly?.();
  }, []);
  console.log('mm is active:', isActive);
  console.log('address is: ', account[0]);
  return (
    <>
      {isActive ? <AddressInformationButton address={account[0]} /> : <ConnectWalletButton />}
    </>
  );
};
export default AccountButton;
