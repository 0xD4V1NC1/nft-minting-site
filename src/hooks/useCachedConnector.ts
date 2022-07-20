import {useEffect, useState} from 'react';
import {useWeb3React} from '@web3-react/core';
import {Connector} from '@web3-react/types';
import {getConnectorName} from '../providers/Web3Provider';
import {metaMask} from '../connectors/metaMask';
import {coinbaseWallet} from '../connectors/coinbaseWallet';
import {gnosisSafe} from '../connectors/gnosisSafe';
import {walletConnect} from '../connectors/walletConnect';

const getConnector = (connectorName: string | null) => {
  switch (connectorName) {
    case 'WalletConnect':
      return walletConnect;
    case 'Coinbase Wallet':
      return coinbaseWallet;
    case 'Gnosis safe':
      return gnosisSafe;
    case 'MetaMask':
    default:
      return metaMask;
  }
};

const getCachedConnector = () => {
  return window.localStorage.getItem('connector');
};

const setCachedConnectorName = (value: string) => {
  try {
    window.localStorage.setItem('connector', value);
  } catch (error) {
    console.warn('error setting cached connector', error);
  }
};

const clearCachedConnector = () => {
  setCachedConnectorName('');
};

const useCachedConnector = () => {
  const {connector} = useWeb3React();
  const [lastKnownConnector, setLastKnownConnector] = useState<Connector>();

  useEffect(() => {
    const cachedConnectorName = getCachedConnector();
    if (cachedConnectorName === undefined) {
      const connectorName = getConnectorName(connector);
      // if there is no cached connector, set it to useWeb3React default (metamask)
      setLastKnownConnector(connector);
      setCachedConnectorName(connectorName);
    } else {
      // otherwise set lastKnownConnector to the cached connector
      const cachedConnector = getConnector(cachedConnectorName);
      setLastKnownConnector(cachedConnector);
    }
  }, [connector]); // if connector changes
  return {lastKnownConnector, setCachedConnectorName, clearCachedConnector};
};
export default useCachedConnector;
