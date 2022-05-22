import React from 'react';

import {Web3ReactHooks, Web3ReactProvider} from '@web3-react/core';
import {MetaMask} from '@web3-react/metamask';
import {WalletConnect} from '@web3-react/walletconnect';
import {GnosisSafe} from '@web3-react/gnosis-safe';
import {CoinbaseWallet} from '@web3-react/coinbase-wallet';
import {Network} from '@web3-react/network';
import type {Connector} from '@web3-react/types';

import {hooks as coinbaseWalletHooks, coinbaseWallet} from '../connectors/coinbaseWallet';
import {hooks as metaMaskHooks, metaMask} from '../connectors/metaMask';
import {hooks as walletConnectHooks, walletConnect} from '../connectors/walletConnect';
import {hooks as gnosisSafeHooks, gnosisSafe} from '../connectors/gnosisSafe';
import {hooks as networkHooks, network} from '../connectors/network';


export function getConnectorName(walletConnector: Connector) {
  if (walletConnector instanceof MetaMask) return 'MetaMask';
  if (walletConnector instanceof WalletConnect) return 'WalletConnect';
  if (walletConnector instanceof CoinbaseWallet) return 'Coinbase Wallet';
  if (walletConnector instanceof GnosisSafe) return 'Gnosis Safe';
  if (walletConnector instanceof Network) return 'Network';

  return 'Unknown';
}

const connectors: [MetaMask | WalletConnect | CoinbaseWallet | GnosisSafe | Network, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks],
  [coinbaseWallet, coinbaseWalletHooks],
  [gnosisSafe, gnosisSafeHooks],
  [network, networkHooks],


];

export default function Web3Provider(props:any) {
  return (
    <Web3ReactProvider connectors={connectors}>
      {props.children}
    </Web3ReactProvider>
  );
}
