import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const {getByText} = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// this test doesn't work atm b/c we have changed App component. TODO: update

// let myArray: [string, object, ] = ['1',{},4];
