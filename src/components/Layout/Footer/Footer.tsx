import React from 'react';
import Button from '../../UI/Button';
import Divider from '../../UI/Divider';
import Discord from '../../UI/icons/discord';
import Instagram from '../../UI/icons/instagram';
import Twitter from '../../UI/icons/twitter';

const Footer = () => {
  return (
    <footer className='bottom-0 w-full py-4 px-20 bg-white dark:bg-black text-black dark:text-white'>
      <div className='flex flex-col md:flex-row mt-8 md:justify-between'>
        {/* Section 1 */}
        <div className=''>
          <h2> LEARN MORE </h2>
          <ul className='my-4'>
            <li><a href='/members-only'>Members Only</a></li>
            {/* <li><a>Roadmap</a></li> */}
            <li><a href="#mint-section">Minting Information</a></li>
            <li><a href="#faqs-section">FAQs</a></li>
          </ul>
        </div>
        {/* Section 2 */}
        <Divider className='mx-8' vertical />
        <div className='mt-8 md:mt-0 md:max-w-[50%]'>
          <h2> JOIN OUR DISCORD! </h2>
          <div className='flex my-4'>
            <div className='flex items-center'>
              <Discord formattedClassName='flex items-center mr-8 w-16 h-16 text-primary-500' />
            </div>
            <div>
              <p className='text-sm'> Our Discord server is a great place to meet the team, chat with us and become part of an exciting and rapidly growing community </p>
            </div>
          </div>
          <Button text="Join Our Discord" color="primary" type="button" href="https://discord.gg/d272FRg2Xm" target='_blank' className='py-2 px-6 hover:animate-pulse' />
        </div>
        {/* Section 3 */}
        <Divider className='mx-8' vertical />
        <div className="mt-8 md:mt-0">
          <h2> FOLLOW US </h2>
          <div className='flex mt-4 items-center'>
            <a href="https://twitter.com/0xD4V1NC1" target="_blank" rel="noopener noreferrer">
              <Twitter formattedClassName='w-8 h-8 text-primary-500 hover:animate-pulse'/>
            </a>
            <h3 className='ml-8'>Twitter</h3>
          </div>
          <div className='flex mt-4 items-center'>
            <a href="https://instagram.com/0xwolfpackfinance" target="_blank" rel="noopener noreferrer">
              <Instagram formattedClassName='w-8 h-8 text-primary-500 hover:animate-pulse'/>
            </a>
            <h3 className='ml-8'>Instagram</h3>
          </div>
        </div>
      </div>
      <div className='mt-8 text-center text-gray-600 text-xs'>© 0xWF All rights reserved. Crafted by 0xD4V1NC1</div>
    </footer>
  );
};
export default Footer;
