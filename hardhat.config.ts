import * as dotenv from 'dotenv';

import {HardhatUserConfig, task} from 'hardhat/config';

import '@nomiclabs/hardhat-etherscan';

import '@nomiclabs/hardhat-waffle';

import '@typechain/hardhat';

import 'hardhat-gas-reporter';

import 'solidity-coverage';


dotenv.config();

/*
  This is a sample Hardhat task. To learn how to create your own go to https://hardhat.org/guides/create-task.html
  To run this task type npx hardhat accounts in the terminal
*/
task('accounts', 'Prints the list of accounts', async (_taskArgs:any, hre: any) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    const balance = await account.provider?.getBalance(account.address);
    console.log(`Address: ${account.address}`);
    console.log(`Balance: ${parseFloat(hre.ethers.utils.formatEther(balance||0))}`);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

// @TODO NOTE: that the url can be changed to public rpc's or a node from another provider. You are not limited to the one I set up the project with
const config: HardhatUserConfig = {
  solidity: '0.8.4',
  defaultNetwork: 'localhost',
  networks: {
    localhost: {
      url: `http://127.0.0.1:8545/`,
      // accounts: [`0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`],
      // accounts: process.env.REACT_APP_PRIVATE_KEY !== undefined ? [process.env.REACT_APP_PRIVATE_KEY] : [],
    },
    ropsten: {
      url: process.env.REACT_APP_ROPSTEN_URL || '',
      accounts: process.env.REACT_APP_PRIVATE_KEY !== undefined ? [process.env.REACT_APP_PRIVATE_KEY] : [],
    },
    mumbai: {
      url: `https://matic-mumbai.chainstacklabs.com`,
      accounts: process.env.REACT_APP_PRIVATE_KEY !== undefined ? [process.env.REACT_APP_PRIVATE_KEY] : [],
    },
    matic: {
      url: `https://polygon-rpc.com/`,
      accounts: process.env.REACT_APP_PRIVATE_KEY !== undefined ? [process.env.REACT_APP_PRIVATE_KEY] : [],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: 'USD',
  },
  etherscan: {
    apiKey: process.env.REACT_APP_POLYSCAN_API_KEY,
  },
};

export default config;

