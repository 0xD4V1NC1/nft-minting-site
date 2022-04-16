import React from 'react';
import Modal from '../UI/Modal';
import CoinbaseWalletConnectButton from './CoinbaseWalletConnectButton';
import MetamaskConnectButton from './MetamaskConnectButton';
import WalletConnectButton from './WalletConnectButton';

const ConnectWalletModal = ({isModalOpen, setIsModalOpen}: {isModalOpen: boolean, setIsModalOpen: any}) => {
  return (
    <Modal open={isModalOpen} toggle={() => setIsModalOpen(!isModalOpen)} position="center" ariaLabel='Connect Wallet Modal'>
      <MetamaskConnectButton />
      <CoinbaseWalletConnectButton />
      <WalletConnectButton />
    </Modal>
  );
};
export default ConnectWalletModal;
