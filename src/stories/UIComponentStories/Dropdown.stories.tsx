import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Dropdown from '../../components/UI/Dropdown';
export default {
  title: 'UI/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => {
  return (
    <>
      <Dropdown {...args}/>
    </>

  );
};

export const DropdownExample = Template.bind({});
DropdownExample.args = {
  id: '1',
  button: {
    text: 'dropdown',
    color: 'primary',
    type: 'button',
    ariaLabel: 'test button',

  },
  children: (
    <div className='mx-4'>
      <div className='bg-red-500'>Card 1</div>
      <div className='bg-blue-500'>Card 2</div>
    </div>
  ),
};

export const PrettyDropdown = Template.bind({});
PrettyDropdown.args = {
  id: '2',
  ariaLabel: 'Storybook Dropdown Example',
  className: 'p-2',
  dropBackgroundColor: 'bg-green-500',
  dropClassName: 'bg-white rounded-sm border-xs border-gray-700 box-shadow',
  trigger: (
    <p>I am the Trigger</p>
  ),
  icon: {
    name: 'chevron-down',
    size: 'small',
    color: 'black',
    rotate: true,
  },
  children: (
    <ul className='box-shadow'>
      <li className=' hover:bg-red-200 hover:animate-pulse px-4 py-2'>
        <button onClick={()=> console.log('Item 1 clicked')}>Item 1</button>
      </li>
      <li className=' hover:bg-blue-200 px-4 py-2'>
        <button onClick={()=> console.log('Item 2 clicked')}>Item 2</button>
      </li>
      <li className='hover:bg-green-200 px-4 py-2'>
        <button onClick={()=> console.log('Item 3 clicked')}>Item 3</button>
      </li>
      <li className=' hover:bg-gray-200 px-4 py-2'>
        <button onClick={()=> console.log('Item 4 clicked')}>Item 4</button>
      </li>
    </ul>
  ),
};

export const MoreOptionsMenu = Template.bind({});
MoreOptionsMenu.args ={
  id: '3',
  ariaLabel: 'Storybook Dropdown Example',
  className: 'ml-12 p-2',
  button: {
    color: 'gray',
    type: 'button',
    className: 'p-2',
    ariaLabel: 'test button',
  },
  icon: {
    name: 'dots-horizontal',
    color: 'black',
    size: 'medium',
    position: 'none',
  },
  dropClassName: 'bg-white rounded-sm border-xs border-gray-700 box-shadow min-w-[125px]',
  children: (
    <ul className='box-shadow'>
      <li className=' hover:bg-red-200 hover:animate-pulse px-4 py-2'>
        <button onClick={()=> console.log('Item 1 clicked')}>Click Me 1</button>
      </li>
      <li className=' hover:bg-blue-200 px-4 py-2'>
        <button onClick={()=> console.log('Item 2 clicked')}>Click Me 2</button>
      </li>
      <li className='hover:bg-green-200 px-4 py-2'>
        <button onClick={()=> console.log('Item 3 clicked')}>Click Me 3</button>
      </li>
      <li className=' hover:bg-gray-200 px-4 py-2'>
        <button onClick={()=> console.log('Item 4 clicked')}>Click Me 4</button>
      </li>
    </ul>
  ),
};
