import React, {useState} from 'react';
import Button from '../../UI/Button';
import Overlay from '../../UI/Overlay';
import Logo from '../../UI/icons/logo';
import LinkTo from '../../Components/LinkTo';
import ConnectWalletButton from '../../Components/ConnectWalletButton';
import DarkModeToggle from '../../Components/DarkModeToggle';

const MobileMenuOptions = ({isOverlayOpen, setIsOverlayOpen}:{isOverlayOpen: boolean, setIsOverlayOpen: (state: boolean) => void}) => {
  return (
    <Overlay open={!!isOverlayOpen} dismiss={()=> setIsOverlayOpen(false)} ariaLabel="Mobile Navigation Options" maxWidth='max-w-[50%]'>
      <ul>
        <li>
          <LinkTo to='/members-only' ariaLabel='Link to members only page'>
            Members Only
          </LinkTo>
        </li>
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
        <Button type="button" onClick={() => setIsOverlayOpen(true)} color="none" icon={{name: 'menu-3', size: '2xlarge', color: 'black', position: 'none'}} />
      </div>
      {/* The Mobile Menu Options is outside of the nav header b/c with justify-between and flex... it would move the button over */}
      <MobileMenuOptions isOverlayOpen={isOverlayOpen} setIsOverlayOpen={setIsOverlayOpen} />
    </>
  );
};
export default MobileNav;
