import React from 'react';

import {metaMask} from '../../connectors/metaMask';
import {coinbaseWallet} from '../../connectors/coinbaseWallet';
// import {gnosisSafe} from '../../connectors/gnosisSafe';
import {walletConnect} from '../../connectors/walletConnect';

import Modal from '../UI/Modal';
import Image from '../UI/Image';
import {MetaMask} from '@web3-react/metamask';
import {WalletConnect} from '@web3-react/walletconnect';
import {CoinbaseWallet} from '@web3-react/coinbase-wallet';
import {Network} from '@web3-react/network';
import {GnosisSafe} from '@web3-react/gnosis-safe';

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
  // @TODO implement Gnosis Safe...
  /*
    wallet connect doesn't work with react-scripts 5.0.0 + so had to add config-overrides.js and
    react-app-rewired
  */
  {
    name: 'Wallet Connect',
    logoUrl: '/WalletConnectLogo.png',
    connector: walletConnect,
  },
  // {
  //   name: 'Gnosis Safe',
  //   logoUrl: '/CoinbaseWalletLogo.png',
  //   connector: gnosisSafe,
  // },
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
  const polygonChainID = 137;
  const handleConnectWallet = () => {
    // our NFT project is on Polygon, so we want to enforce a connection to Polygon mainnet
    connector.activate(polygonChainID);
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
