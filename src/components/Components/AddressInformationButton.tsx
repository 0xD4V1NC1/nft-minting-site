import React from 'react';
import Button from '../UI/Button';
import {formatWalletAddress} from '../../utils/formatUtil';
import useCachedConnector from '../../hooks/useCachedConnector';

const AddressInformationButton = ({address, connector}: {address:string, connector?: any}) => {
  if (!address) return null;

  const {clearCachedConnector} = useCachedConnector();
  const handleDisconnectWallet = () => {
    connector?.deactivate();
    clearCachedConnector();
  };
  return (
    <div className=''>
      <div id='address-information-gradient-border' className='p-0.5 bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-500 rounded hover:bg-rainbow hover:animate-rainbow' >
        <Button type='button' ariaLabel='Click to disconnect wallet' color='primary-gradient-outline' text={`${formatWalletAddress(address, 10)}`} className='py-2 px-6' onClick={() => handleDisconnectWallet()}/>
      </div>
    </div>
  );
};
export default AddressInformationButton;
