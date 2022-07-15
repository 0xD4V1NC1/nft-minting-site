import Web3Provider from '../src/providers/Web3Provider';
import {ToastProvider} from '../src/providers/ToastContext';
import '../src/styles/tailwind.css';
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <Web3Provider>
      <ToastProvider>
        <Story/>
      </ToastProvider>
    </Web3Provider>
  ),
];