import React from 'react';
import ReactDOM from 'react-dom';

import './styles/tailwind.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Web3Provider from './providers/Web3Provider';

ReactDOM.render(
    /* Make web3 provider globally accessible throughout the dApp */
    <>
      <Web3Provider>
        <App />
      </Web3Provider>
    </>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

