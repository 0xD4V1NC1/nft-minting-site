import {v4 as uuidv4} from 'uuid';

const nav = {
  mobile: {
    primary: {
      label: 'Navigation',
      items: [
        {
          label: 'Home',
          icon: 'home',
          href: '/',
          id: uuidv4(),
          ariaLabel: 'Link to Home Page',
        },
        {
          label: 'Members Only',
          icon: 'user-group',
          href: '/members-only',
          id: uuidv4(),
          ariaLabel: 'Link to Members Only Page',

        },
      ],
    },
  },
  desktop: {
    primary: {
      label: 'General',
      items: [
        {
          label: 'Mint',
          href: '/#mint-section',
          id: uuidv4(),
          ariaLabel: 'Link to Mint Section',

        },
      ],
    },
  },
};
export default nav;
