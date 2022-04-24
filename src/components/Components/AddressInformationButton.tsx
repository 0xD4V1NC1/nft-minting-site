import React from 'react';
import Button from '../UI/Button';

const AddressInformationButton = ({address}: {address:string}) => {
  if (!address) return null;
  return (
    <div className=''>
      <div id='connect-wallet-gradient-border' className='p-0.5 bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-500 rounded hover:bg-rainbow hover:animate-rainbow' >
        <Button type='button' ariaLabel='Click to disconnect wallet' color='primary-gradient-outline' text={`${address}`} className='py-2 px-6 text-ellipsis overflow-hidden' onClick={() => console.log('clicked')}/>
      </div>
    </div>
  );
};
export default AddressInformationButton;
