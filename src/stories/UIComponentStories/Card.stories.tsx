import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Card from '../../components/UI/Card';

export default {
  title: 'UI/Card',
  component: Card,

} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CardExample = Template.bind({});
CardExample.args = {
  children: (
    <div className='bg-black'>
      <p className='text-white'> This is the card component </p>
    </div>
  ),
};
