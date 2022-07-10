import {useState, useEffect} from 'react';
import {useWeb3React} from '@web3-react/core';
import {getKeyValue} from '../utils/commonUtil';
import config from '../config.json';

/* @TODO update config.json with your project name */
const useOpenSeaURL = () => {
  const [openseaURL, setOpenseaURL] = useState('');
  const {provider} = useWeb3React();
  useEffect(() => {
    const fetchOpenSeaURL = async () => {
      const network = await provider?.getNetwork();
      const chainId: any = network?.chainId.toString();
      const configOpenSeaURL = getKeyValue(config.NETWORKS)(chainId)?.openseaURL || 'https://www.opensea.io/';
      setOpenseaURL(configOpenSeaURL);
    };
    fetchOpenSeaURL();
  }, [provider]);
  return {openseaURL};
};
export default useOpenSeaURL;
