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
export const CHAINS: { [chainId: number]: BasicChainInformation | ExtendedChainInformation } = {
  31337: { // Localhost via Hardhat
    urls: [`http://127.0.0.1:8545/`].filter((url) => url !== undefined),
    name: 'Localhost',
  },
  1: { // eth
    urls: [`https://speedy-nodes-nyc.moralis.io/${process.env.REACT_APP_NODE_MORALIS_API_KEY}/eth/mainnet`].filter((url) => url !== undefined),
    name: 'Mainnet',
  },
  3: { // ropsten
    urls: [`https://speedy-nodes-nyc.moralis.io/${process.env.REACT_APP_NODE_MORALIS_API_KEY}/eth/ropsten`].filter(
        (url) => url !== undefined,
    ),
    name: 'Ropsten',
  },
  4: { // Rinkeby
    urls: [`https://speedy-nodes-nyc.moralis.io/${process.env.REACT_APP_NODE_MORALIS_API_KEY}/eth/rinkeby`].filter(
        (url) => url !== undefined,
    ),
    name: 'Rinkeby',
  },
  5: { // Gorli
    urls: [`https://speedy-nodes-nyc.moralis.io/${process.env.REACT_APP_NODE_MORALIS_API_KEY}/eth/goerli`].filter(
        (url) => url !== undefined,
    ),
    name: 'Görli',
  },
  42: {
    urls: [`https://speedy-nodes-nyc.moralis.io/${process.env.REACT_APP_NODE_MORALIS_API_KEY}/eth/kovan`].filter(
        (url) => url !== undefined,
    ),
    name: 'Kovan',
  },
  // Optimism
  10: {
    urls: [``].filter((url) => url !== undefined),
    name: 'Optimism',
    nativeCurrency: ETH,
    blockExplorerUrls: ['https://optimistic.etherscan.io'],
  },
  69: {
    urls: [``].filter((url) => url !== undefined),
    name: 'Optimism Kovan',
    nativeCurrency: ETH,
    blockExplorerUrls: ['https://kovan-optimistic.etherscan.io'],
  },
  // Arbitrum
  42161: {
    urls: [`https://speedy-nodes-nyc.moralis.io/${process.env.REACT_APP_NODE_MORALIS_API_KEY}/arbitrum/mainnet`].filter((url) => url !== undefined),
    name: 'Arbitrum One',
    nativeCurrency: ETH,
    blockExplorerUrls: ['https://arbiscan.io'],
  },
  421611: {
    urls: [`https://speedy-nodes-nyc.moralis.io/${process.env.REACT_APP_NODE_MORALIS_API_KEY}/arbitrum/testnet`].filter((url) => url !== undefined),
    name: 'Arbitrum Testnet',
    nativeCurrency: ETH,
    blockExplorerUrls: ['https://testnet.arbiscan.io'],
  },
  // Polygon
  137: {
    urls: [`https://speedy-nodes-nyc.moralis.io/${process.env.REACT_APP_NODE_MORALIS_API_KEY}/polygon/mainnet`].filter((url) => url !== undefined),
    name: 'Polygon Mainnet',
    nativeCurrency: MATIC,
    blockExplorerUrls: ['https://polygonscan.com'],
  },
  80001: {
    urls: [`https://speedy-nodes-nyc.moralis.io/${process.env.REACT_APP_NODE_MORALIS_API_KEY}/polygon/mumbai`].filter(
        (url) => url !== undefined,
    ),
    name: 'Polygon Mumbai',
    nativeCurrency: MATIC,
    blockExplorerUrls: ['https://mumbai.polygonscan.com'],
  },
  // FTM
  250: {
    urls: [`https://speedy-nodes-nyc.moralis.io/${process.env.REACT_APP_NODE_MORALIS_API_KEY}/fantom/mainnet`].filter((url) => url !== undefined),
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
