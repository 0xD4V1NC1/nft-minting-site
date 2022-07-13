import React from 'react';


import {CoinbaseWallet} from '@web3-react/coinbase-wallet';
import {GnosisSafe} from '@web3-react/gnosis-safe';
import {Network} from '@web3-react/network';
import {MetaMask} from '@web3-react/metamask';
import {WalletConnect} from '@web3-react/walletconnect';

import {coinbaseWallet} from '../../connectors/coinbaseWallet';
import {metaMask} from '../../connectors/metaMask';
import {walletConnect} from '../../connectors/walletConnect';

import Image from '../UI/Image';
import Modal from '../UI/Modal';
// eslint-disable-next-line no-unused-vars
import {CHAIN_ID} from '../../consts/consts';

const walletOptions = [
  {
    name: 'Metamask',
    logoUrl: '/MetaMaskLogo.png',
    connector: metaMask,
  },
  {
    name: 'Coinbase',
    logoUrl: '/CoinbaseWalletLogo.png',
    connector: coinbaseWallet,
  },
  /*
    wallet connect doesn't work with react-scripts 5.0.0 + so had to add config-overrides.js and
    react-app-rewired
  */
  {
    name: 'Wallet Connect',
    logoUrl: '/WalletConnectLogo.png',
    connector: walletConnect,
  },
];

const WalletOption = ({
  walletName,
  logoUrl,
  connector,
  setIsModalOpen,
}: {
  walletName: string;
  logoUrl: string;
  connector: MetaMask | WalletConnect | CoinbaseWallet | GnosisSafe | Network;
  setIsModalOpen: any;
}) => {
  if (!walletName || !connector) return null;
  const handleConnectWallet = () => {
    // our NFT project is on Polygon, so we want to enforce a connection to Polygon mainnet when in prod, hardhat local when development
    connector.activate(CHAIN_ID);
    setIsModalOpen(false);
  };

  return (
    <button
      className="hover:bg-rainbow hover:animate-rainbow flex justify-center items-center hover:cursor-pointer w-full"
      aria-label={`Connect to ${walletName} wallet`}
      onClick={() => handleConnectWallet()}
    >
      <div className="flex justify-start items-center p-4">
        <Image src={logoUrl} size="w-16 h-16" />
        <p className="ml-4 text-3xl">{walletName}</p>
      </div>
    </button>
  );
};

const ConnectWalletModal = ({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: any;
}) => {
  return (
    <Modal
      open={isModalOpen}
      toggle={() => setIsModalOpen(!isModalOpen)}
      position="center"
      ariaLabel="Connect Wallet Modal"
      omitCloseX
      paddingBottom="pb-0"
      size="sm"
    >
      <div className="w-full bg-white dark:bg-primary-dark-500">
        {walletOptions.map((option) => (
          <WalletOption
            key={option.name}
            walletName={option.name}
            logoUrl={option.logoUrl}
            connector={option.connector}
            setIsModalOpen={setIsModalOpen}
          />
        ))}
      </div>
    </Modal>
  );
};
export default ConnectWalletModal;
