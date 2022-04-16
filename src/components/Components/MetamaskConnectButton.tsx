import React, {useEffect} from 'react';
import {hooks, metaMask} from '../../connectors/metaMask';
import Accounts from './Accounts';
import Chains from './Chains';
// import {ConnectWithSelect} from '../ConnectWithSelect';
// import {Status} from '../Status';
import Card from '../UI/Card';

const {useChainId, useAccounts /* , useError, useIsActivating, useIsActive*/, useProvider, useENSNames} = hooks;

const MetamaskConnectButton = () => {
  const chainId = useChainId();
  const accounts = useAccounts();
  // const error = useError();
  // const isActivating = useIsActivating();

  // const isActive = useIsActive();

  const provider = useProvider();
  const ENSNames = useENSNames(provider);

  // attempt to connect eagerly on mount
  useEffect(() => {
    void metaMask.connectEagerly();
  }, []);
  return (
    <Card>
      <div>
        <b>MetaMask</b>
        {/* <Status isActivating={isActivating} error={error} isActive={isActive} /> */}
        <div style={{marginBottom: '1rem'}} />
        <Chains chainId={chainId} />
        <Accounts accounts={accounts} provider={provider} ENSNames={ENSNames} />
      </div>
      <div style={{marginBottom: '1rem'}} />
      {/* <ConnectWithSelect
        connector={metaMask}
        chainId={chainId}
        isActivating={isActivating}
        error={error}
        isActive={isActive}
      /> */}
    </Card>
  );
};
export default MetamaskConnectButton;
