import React from 'react';
import ReactDOM from 'react-dom';
import {Web3ReactProvider} from '@web3-react/core';
import {Web3Provider} from '@ethersproject/providers';
import './styles/tailwind.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// @TODO figure out the correct type of provider
function getLibrary(provider:any) {
  return new Web3Provider(provider);
}

ReactDOM.render(
    /* Make web3 provider globally accessible throughout the dApp */
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

