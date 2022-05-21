import React from 'react'; // , {createContext, useContext}

import {CoinbaseWallet} from '@web3-react/coinbase-wallet';
import {Web3ReactHooks, Web3ReactProvider} from '@web3-react/core';
import {MetaMask} from '@web3-react/metamask';
import {WalletConnect} from '@web3-react/walletconnect';

import {Network} from '@web3-react/network';
import type {Connector} from '@web3-react/types';
import {coinbaseWallet, hooks as coinbaseWalletHooks} from '../connectors/coinbaseWallet';
import {hooks as metaMaskHooks, metaMask} from '../connectors/metaMask';
import {hooks as networkHooks, network} from '../connectors/network';
import {hooks as walletConnectHooks, walletConnect} from '../connectors/walletConnect';

export function getConnectorName(walletConnector: Connector) {
  if (walletConnector instanceof MetaMask) return 'MetaMask';
  if (walletConnector instanceof WalletConnect) return 'WalletConnect';
  if (walletConnector instanceof CoinbaseWallet) return 'Coinbase Wallet';
  if (walletConnector instanceof Network) return 'Network';
  return 'Unknown';
}

const connectors: [MetaMask | WalletConnect | CoinbaseWallet | Network, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks],
  [coinbaseWallet, coinbaseWalletHooks],
  [network, networkHooks],
];

export default function Web3Provider(props:any) {
  return (
    <Web3ReactProvider connectors={connectors}>
      {props.children}
    </Web3ReactProvider>
  );
}
