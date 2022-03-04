import React from 'react';
import Button from '../../UI/Button';
import Divider from '../../UI/Divider';
import Discord from '../../UI/icons/discord';
import Instagram from '../../UI/icons/instagram';
import Twitter from '../../UI/icons/twitter';
import LinkTo from '../../Components/LinkTo';
import Opensea from '../../UI/icons/open-sea';

const Footer = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  return (
    <footer className='bottom-0 w-full py-4 px-20 bg-white dark:bg-primary-dark-500 text-black dark:text-white'>
      <div className='flex flex-col md:flex-row mt-8 md:justify-between'>
        {/* Section 1 */}
        <div className=''>
          <h2 className='font-semibold'> LEARN MORE </h2>
          <ul className='my-4'>
            <li><LinkTo to='/members-only'>Members Only</LinkTo></li>
            {/* <li><LinkTo>Roadmap</LinkTo></li> */}
            <li><LinkTo to={`${BASE_URL}/#mint-section`}>Minting Information</LinkTo></li>
            <li><LinkTo to={`${BASE_URL}/#faqs-section`}>FAQs</LinkTo></li>
            <li><LinkTo to="/terms-of-service">Terms Of Service</LinkTo></li>
          </ul>
        </div>
        {/* Section 2 */}
        <Divider className='mx-8' vertical />
        <div className='mt-8 md:mt-0 md:max-w-[50%]'>
          <h2 className='font-semibold'> JOIN OUR DISCORD! </h2>
          <div className='flex my-4'>
            <div className='flex items-center'>
              <Discord formattedClassName='flex items-center mr-8 w-16 h-16 text-primary-500' />
            </div>
            <div>
              <p className='text-sm'> Our Discord server is a great place to meet the team, chat with us and become part of an exciting and rapidly growing community </p>
            </div>
          </div>
          <Button text="Join Our Discord" ariaLabel='Click to join 0xWF discord' color="primary" type="button" href="https://discord.gg/d272FRg2Xm" target='_blank' className='py-2 px-6 hover:animate-pulse' />
        </div>
        {/* Section 3 */}
        <Divider className='mx-8' vertical />
        <div className="mt-8 md:mt-0">
          <h2 className='font-semibold'> FOLLOW US </h2>
          <div className='flex mt-4 items-center'>
            <LinkTo to="https://twitter.com/0xD4V1NC1" target="_blank">
              <Twitter formattedClassName='w-8 h-8 text-primary-500 hover:animate-pulse'/>
            </LinkTo>
            <h3 className='ml-4'>Twitter</h3>
          </div>
          <div className='flex mt-4 items-center'>
            <LinkTo to="https://instagram.com/0xwolfpackfinance" target="_blank" >
              <Instagram formattedClassName='w-8 h-8 text-primary-500 hover:animate-pulse'/>
            </LinkTo>
            <h3 className='ml-4'>Instagram</h3>
          </div>
          <div className='flex mt-4 items-center'>
            <LinkTo to="" target="_blank" >
              <Opensea formattedClassName='w-8 h-8 text-primary-500 hover:animate-pulse'/>
            </LinkTo>
            <h3 className='ml-4'>Opensea</h3>
          </div>
        </div>
      </div>
      <div className='mt-8 text-center text-gray-600 dark:text-gray-400 text-xs'>© 0xWF All rights reserved. Crafted by 0xD4V1NC1</div>
    </footer>
  );
};
export default Footer;
