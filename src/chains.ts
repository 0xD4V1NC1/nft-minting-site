import type {AddEthereumChainParameter} from '@web3-react/types';

const ETH: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Ether',
  symbol: 'ETH',
  decimals: 18,
};

const MATIC: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Matic',
  symbol: 'MATIC',
  decimals: 18,
};
const FTM: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Fantom',
  symbol: 'FTM',
  decimals: 18,
};

interface BasicChainInformation {
  urls: string[]
  name: string
}

interface ExtendedChainInformation extends BasicChainInformation {
  nativeCurrency: AddEthereumChainParameter['nativeCurrency']
  blockExplorerUrls: AddEthereumChainParameter['blockExplorerUrls']
}
/*
  @TODO if you have a node you should replace these URLs with your node. It is not considered best practice to
  to use the RPC url to connect to the blockchain but will work
*/
export const CHAINS: { [chainId: number]: BasicChainInformation | ExtendedChainInformation } = {
  31337: { // Localhost via Hardhat
    urls: [`http://127.0.0.1:8545/`].filter((url) => url !== undefined),
    name: 'Localhost',
  },
  1: { // eth
    urls: [`https://mainnet.infura.io/v3/`].filter((url) => url !== undefined),
    name: 'Mainnet',
  },
  3: { // ropsten
    urls: [`https://ropsten.infura.io/v3/`].filter(
        (url) => url !== undefined,
    ),
    name: 'Ropsten',
  },
  4: { // Rinkeby
    urls: [`https://rinkeby.infura.io/v3/`].filter(
        (url) => url !== undefined,
    ),
    name: 'Rinkeby',
  },
  5: { // Gorli
    urls: [`https://goerli.infura.io/v3/`].filter(
        (url) => url !== undefined,
    ),
    name: 'Görli',
  },
  42: {
    urls: [`https://kovan.infura.io/v3/`].filter(
        (url) => url !== undefined,
    ),
    name: 'Kovan',
  },
  // Optimism
  10: {
    urls: [`https://rpc.ankr.com/optimism`].filter((url) => url !== undefined),
    name: 'Optimism',
    nativeCurrency: ETH,
    blockExplorerUrls: ['https://optimistic.etherscan.io'],
  },
  69: {
    urls: [`https://rpc.ankr.com/optimism_testnet`].filter((url) => url !== undefined),
    name: 'Optimism Kovan',
    nativeCurrency: ETH,
    blockExplorerUrls: ['https://kovan-optimistic.etherscan.io'],
  },
  // Arbitrum
  42161: {
    urls: [`https://arb1.arbitrum.io/rpc`].filter((url) => url !== undefined),
    name: 'Arbitrum One',
    nativeCurrency: ETH,
    blockExplorerUrls: ['https://arbiscan.io'],
  },
  421611: {
    urls: [`https://rinkeby.arbitrum.io/rpc`].filter((url) => url !== undefined),
    name: 'Arbitrum Testnet',
    nativeCurrency: ETH,
    blockExplorerUrls: ['https://testnet.arbiscan.io'],
  },
  // Polygon
  137: {
    urls: [`https://young-bold-field.matic.discover.quiknode.pro/${process.env.REACT_APP_QUICK_NODES_API_KEY}/`].filter((url) => url !== undefined),
    name: 'Polygon Mainnet',
    nativeCurrency: MATIC,
    blockExplorerUrls: ['https://polygonscan.com'],
  },
  80001: {
    urls: [`wss://ws-nd-164-731-091.p2pify.com/${process.env.REACT_APP_CHAINSTACK_API_KEY}`].filter(
        (url) => url !== undefined,
    ),
    name: 'Polygon Mumbai',
    nativeCurrency: MATIC,
    blockExplorerUrls: ['https://mumbai.polygonscan.com'],
  },
  // FTM
  250: {
    urls: [`https://rpc.ankr.com/fantom`].filter((url) => url !== undefined),
    name: 'Fantom',
    nativeCurrency: FTM,
    blockExplorerUrls: ['https://polygonscan.com'],
  },
};

function isExtendedChainInformation(
    chainInformation: BasicChainInformation | ExtendedChainInformation,
): chainInformation is ExtendedChainInformation {
  return !!(chainInformation as ExtendedChainInformation).nativeCurrency;
}

export function getAddChainParameters(chainId: number): AddEthereumChainParameter | number {
  const chainInformation = CHAINS[chainId];
  if (isExtendedChainInformation(chainInformation)) {
    return {
      chainId,
      chainName: chainInformation.name,
      nativeCurrency: chainInformation.nativeCurrency,
      rpcUrls: chainInformation.urls,
      blockExplorerUrls: chainInformation.blockExplorerUrls,
    };
  } else {
    return chainId;
  }
}


export const URLS: { [chainId: number]: string[] } = Object.keys(CHAINS).reduce<{ [chainId: number]: string[] }>(
    (accumulator, chainId) => {
      const validURLs: string[] = CHAINS[Number(chainId)].urls;

      if (validURLs.length) {
        accumulator[Number(chainId)] = validURLs;
      }

      return accumulator;
    },
    {},
);
