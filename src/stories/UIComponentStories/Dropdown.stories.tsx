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

  },
  children: (
    <div className='mx-4'>
      <div className='bg-red-500'>Card 1</div>
      <div className='bg-blue-500'>Card 2</div>
    </div>
  ),
};
