import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Loading from '../../components/UI/Loading';

export default {
  title: 'UI/Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => <Loading {...args} />;

export const Loader = Template.bind({});
Loader.args = {
  color: 'primary',
  className: 'w-8 h-8',
};

export const LoaderWithMessage = Template.bind({});
LoaderWithMessage.args = {
  color: 'black',
  message: 'Loading...',
  className: 'w-8 h-8',
};

// typically used for if a form or something is submitted. This loader is not a button... it is for buttons
export const LoaderAsButton = Template.bind({});
LoaderAsButton.args = {
  color: 'green',
  message: 'Loading...',
  className: 'w-8 h-8',
  messageClassName: 'text-red-500',
  isButton: true,
};

export const LoaderWithChildren = Template.bind({});
LoaderWithChildren.args = {
  color: 'green',
  message: 'Loading...',
  className: 'w-8 h-8',
  messageClassName: 'text-red-500',
  children: (
    <div className="flex gap-4">
      <div className="bg-black p-2">
        <p className='text-white'>Some Children</p>
      </div>
      <div className='bg-blue-200 p-2'>
        <p className='text-black'> Some more children </p>
      </div>
    </div>
  ),
};
