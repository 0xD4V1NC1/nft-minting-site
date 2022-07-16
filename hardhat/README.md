# 0xWF NFT Contract
1. First, navigate to the /hardhat directory of this project via your terminal or command prompt. 

2. Next we will want to make sure hardhat has been cleaned first with `npx hardhat clean`... If this is your first time no need to run this command but I always run it as the first command.

3. Compile the Contract with `npx hardhat compile`

4. Double check that your Deploy.ts file is set up correctly to deploy your contract. You will want to create an `.env` file similar to the `.env.example` file at the root of the /hardhat directory. There you will set the mint cost (in wei), mint date, and other key variables essential to the successful deployment of the NFT. 
`NOTE use a private key of a wallet you want to control this contract, but for best security practices... this wallet should be dedicated only to the NFT Contract and not store funds. I advice that any funds collected from the mint should be withdrawn to a different address`

5. Deploy your NFT contract with `npx hardhat run scripts/deploy.ts --network matic` or whichever network you are trying to deploy to.

6. Make note of the contract address returned by the console
`npx hardhat verify --network matic CONTRACT_ADDRESS`

----------------------------------------------------------------------------------------------
# (HARDHAT DEFAULT README.md) Advanced Sample Hardhat Project

This project demonstrates an advanced Hardhat use case, integrating other tools commonly used alongside Hardhat in the ecosystem.

The project comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts. It also comes with a variety of other tools, pre-configured to work with the project code.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.ts
TS_NODE_FILES=true npx ts-node scripts/deploy.ts
npx eslint '**/*.{js,ts}'
npx eslint '**/*.{js,ts}' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

# Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/deploy.ts
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```

# Performance optimizations

For faster runs of your tests and scripts, consider skipping ts-node's type checking by setting the environment variable `TS_NODE_TRANSPILE_ONLY` to `1` in hardhat's environment. For more details see [the documentation](https://hardhat.org/guides/typescript.html#performance-optimizations).
