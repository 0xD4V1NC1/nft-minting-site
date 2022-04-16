import React from 'react';
import {hooks} from '../../connectors/metaMask';
import ConnectWalletButton from './ConnectWalletButton';
import AddressInformationButton from './AddressInformationButton';
const {useIsActive} = hooks;

const AccountButton = () => {
  const isActive = useIsActive();
  console.log('mm isActive:', isActive);
  return (
    <>
      {isActive ? <AddressInformationButton address='0xshittttt' /> : <ConnectWalletButton />}
    </>
  );
};
export default AccountButton;
