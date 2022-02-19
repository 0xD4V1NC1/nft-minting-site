import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Tooltip from '../../components/UI/Tooltip';

export default {
  title: 'UI/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template1: ComponentStory<typeof Tooltip> = (args) => {
  return (
    <div className='m-8 w-1/2'>
      <Tooltip {...args}>
        <div className='bg-primary-500 text-white w-1/2 p-4 rounded-sm'> Hover Over Me to see tooltip </div>
      </Tooltip>
    </div>

  );
};


export const TooltipExample = Template1.bind({});
TooltipExample.args = {
  content: 'I am a tooltip',
  position: 'top',
  arrow: true,
};
