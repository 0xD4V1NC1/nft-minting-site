import {useEffect, useState, useCallback} from 'react';
import ethers from 'ethers';

import WfNFT from '../../hardhat/artifacts/contracts/WfNFT.sol/WfNFT.json';

// eslint-disable-next-line no-unused-vars
import {POLYGON_CHAIN_ID, POLYGON_MUMBAI_CHAIN_ID} from '../consts/consts';

// @TODO update types
export default function useBlockchainData(account: string | undefined) {
  const [nftData, setNftData] = useState<object>();
  const [availableSupply, setAvailableSupply] = useState(0);
  // the tokens/nfts this user/address owns... if length is 0 they dont own one
  const [usersWfNfts, setUsersWfNfts] = useState([]);

  const loadBlockchainData = useCallback(async () => {
    // Fetch Contract, Data, etc.
    try {
      //  @TODO change this to your nft project name
      const wfNFT = new ethers.Contract(
          WfNFT.abi,
          WfNFT.networks[POLYGON_MUMBAI_CHAIN_ID].address,
      );
      setNftData(wfNFT);

      const maxSupply = await wfNFT.methods.maxSupply().call();
      const totalSupply = await wfNFT.methods.totalSupply().call();
      setAvailableSupply(maxSupply - totalSupply);

      const allowMintingAfter = await wfNFT.methods.allowMintingAfter().call();
      const timeDeployed = await wfNFT.methods.timeDeployed().call();
      setRevealTime(
          (Number(timeDeployed) + Number(allowMintingAfter)).toString() + '000',
      );

      if (account) {
        const ownerOf = await WfNFT.methods.walletOfOwner(account).call();
        setUsersWfNfts(ownerOf);
        console.log('This address is owner of: ', ownerOf);
      } else {
        setUsersWfNfts([]);
      }
    } catch (error) {
      console.warn('Error in useBlockchainData Hook: ', error);
    }
  }, []);

  useEffect(() => {
    loadBlockchainData();
  }, []);
  return {nftData, availableSupply, usersWfNfts};
}
