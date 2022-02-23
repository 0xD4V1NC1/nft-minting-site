import React, {useState} from 'react';
import Button from '../../UI/Button';
import Overlay from '../../UI/Overlay';
// import Logo from '../../UI/icons/logo';

const MobileMenuOptions = ({isOverlayOpen, setIsOverlayOpen}:{isOverlayOpen: boolean, setIsOverlayOpen: (state: boolean) => void}) => {
  return (
    <Overlay open={!!isOverlayOpen} dismiss={()=> setIsOverlayOpen(false)} ariaLabel="Mobile Navigation Options" maxWidth='max-w-[50%]'>
      <div>Some options</div>
    </Overlay>
  );
};
const MobileNav = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  return (
    <>
      <div id="mobile-nav-header" className='flex justify-between px-8 py-2 md:hidden'>
        <h2>Mobile Nav</h2>
        {/* <Logo /> */}
        <Button type="button" onClick={() => setIsOverlayOpen(true)} color="none" icon={{name: 'menu-3', size: '2xlarge', color: 'secondary', position: 'none'}} />
      </div>
      {/* The Mobile Menu Options is outside of the nav header b/c with justify-between and flex... it would move the button over */}
      <MobileMenuOptions isOverlayOpen={isOverlayOpen} setIsOverlayOpen={setIsOverlayOpen} />
    </>

  );
};
export default MobileNav;
