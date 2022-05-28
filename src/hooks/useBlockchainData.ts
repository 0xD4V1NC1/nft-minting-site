import {useEffect, useState} from 'react';

export default function useBlockchainData() {
  const [nftData, setNftData] = useState();
  const [availableSupply, setAvailableSupply] = useState();
  // can use this for members only
  const [isOwnerOf, setIsOwnerOf] = useState(false);
  const loadBlockchainData = async (_web3, _account, _networkId) => {
    // Fetch Contract, Data, etc.
    try {
      const openPunks = new _web3.eth.Contract(OpenPunks.abi, OpenPunks.networks[_networkId].address);
      setOpenPunks(openPunks);

      const maxSupply = await openPunks.methods.maxSupply().call();
      const totalSupply = await openPunks.methods.totalSupply().call();
      setSupplyAvailable(maxSupply - totalSupply);

      const allowMintingAfter = await openPunks.methods.allowMintingAfter().call();
      const timeDeployed = await openPunks.methods.timeDeployed().call();
      setRevealTime((Number(timeDeployed) + Number(allowMintingAfter)).toString() + '000');

      if (_account) {
        const ownerOf = await openPunks.methods.walletOfOwner(_account).call();
        setOwnerOf(ownerOf);
        console.log(ownerOf);
      } else {
        setOwnerOf([]);
      }
    } catch (error) {
      setIsError(true);
      setMessage('Contract not deployed to current network, please change network in MetaMask');
    }
  };
  useEffect(() => {

  }, []);
  return {};
}
