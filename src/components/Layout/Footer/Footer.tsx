import React from 'react';
import Button from '../../UI/Button';
const Footer = () => {
  return (
    <footer className='bottom-0 w-full py-4 px-20 flex bg-black dark:bg-white'>
      <div className='flex'>
        {/* Section 1 */}
        <div className=''>
          <h2> Learn More </h2>
        </div>
        {/* Section 2 */}
        <div className=''>
          <h2> JOIN OUR DISCORD! </h2>
          <div className='flex my-4'>
            <div>
              {/* ADD DISCORD ICON HERE */}
            </div>
            <div>
              <p className='text-sm text-white'> Our Discord server is a great place to meet the team, chat with us and become part of an exciting and rapidly growing community </p>
            </div>
          </div>
          <Button text="Join Our Discord" color="primary" type="button" href="https://discord.gg/d272FRg2Xm" target='_blank' className='py-2 px-6' />
        </div>
        {/* Section 3 */}
        <div>
          <h2> FOLLOW US </h2>
        </div>
      </div>
      <div className='mt-8 text-center text-gray-600 text-xs'>© 0xWF All rights reserved. Crafted by 0xD4V1NC1</div>
    </footer>
  );
};
export default Footer;
