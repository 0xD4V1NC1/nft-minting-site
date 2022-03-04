import React, {useState} from 'react';

import Button from '../../UI/Button';
import Icon from '../../UI/Icon';
import Overlay from '../../UI/Overlay';
import Logo from '../../UI/icons/logo';

import LinkTo from '../../Components/LinkTo';
import ConnectWalletButton from '../../Components/ConnectWalletButton';
import DarkModeToggle from '../../Components/DarkModeToggle';

import nav from '../Nav/nav.enum';

const MobileMenuOptions = ({isOverlayOpen, setIsOverlayOpen}:{isOverlayOpen: boolean, setIsOverlayOpen: (state: boolean) => void}) => {
  const {mobile} = nav;

  return (
    <Overlay open={!!isOverlayOpen} dismiss={()=> setIsOverlayOpen(false)} ariaLabel="Mobile Navigation Options" maxWidth='max-w-[50%]'>
      <ul className="mb-10">
        <li>
          <p className="text-xs uppercase pb-2 font-bold pl-6">Navigation</p>
        </li>
        {mobile.primary.items.map((item) => (
          <li key={item.label}>
            <Button
              type='button'
              color='none'
              ariaLabel={`${item.ariaLabel}`}
              href={item.href || ''}
              className="flex w-9/10 mx-4 my-2 items-center cursor-pointer py-1 pl-6 shadow-none rounded hover:bg-gray-200"
            >
              <Icon name={item.icon} size='xlarge' color='primary' className="mr-3" />
              <p className="text-lg text-primary-500 dark:text-primary-dark-400">{item.label}</p>
            </Button>
          </li>
        ))}
      </ul>
      <div className='mx-12 w-2/3'>
        <ConnectWalletButton />
      </div>
    </Overlay>
  );
};
const MobileNav = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  return (
    <>
      <div id="mobile-nav-header" className='flex justify-between px-8 py-2 md:hidden'>
        <DarkModeToggle />
        <LinkTo to="/" ariaLabel='Link to Home Page'>
          <Logo formattedClassName='w-12 h-12' gradient gradientId='mobile-logo' />
        </LinkTo>
        <Button type="button" ariaLabel='Open Mobile Side Menu' onClick={() => setIsOverlayOpen(true)} color="none" icon={{name: 'menu-3', size: '2xlarge', color: 'black', position: 'none'}} />
      </div>
      {/* The Mobile Menu Options is outside of the nav header b/c with justify-between and flex... it would move the button over */}
      <MobileMenuOptions isOverlayOpen={isOverlayOpen} setIsOverlayOpen={setIsOverlayOpen} />
    </>
  );
};
export default MobileNav;
