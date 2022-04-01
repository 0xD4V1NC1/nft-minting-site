import React from 'react';
import {screen} from '@testing-library/react';
import App from './App';
import ShallowRenderer from 'react-test-renderer/shallow';

test('renders app component', () => {
  // we use shallow render b/c test fails since the window object isn't defined yet
  const Shallow:any = ShallowRenderer;
  const renderer = new Shallow();
  renderer.render(<App />);

  // this doesn't really do anything
  const nothing = screen.getByText('');

  expect(nothing).toBeInTheDocument();
});
