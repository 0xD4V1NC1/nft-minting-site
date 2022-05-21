import Web3Provider from '../src/providers/Web3Provider';
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
      <Story/>
    </Web3Provider>
  ),
];