import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Collapsible from '../../components/UI/Collapsible';
import Icon from '../../components/UI/Icon';

export default {
  title: 'UI/Collapsible',
  component: Collapsible,
} as ComponentMeta<typeof Collapsible>;

const Template1: ComponentStory<typeof Collapsible> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='m-8 w-1/2'>
      <h2 className='mb-4'> Example Usage: FAQ Section</h2>
      <Collapsible {...args} open={open} onOpening={() => setOpen(true)} onClosing={() => setOpen(false)} >
        <div className='bg-gray-100 rounded'>
          <p className='text-sm font-normal px-6 py-5'>Some Answer to some question</p>
        </div>
      </Collapsible>
    </div>

  );
};


export const CollapsibleExample = Template1.bind({});
CollapsibleExample.args = {
  ariaLabel: 'Some Aria Label',
  collapsibleId: 'storybook-collapsible',
  trigger: (
    <div className="bg-gray-100 rounded flex justify-between">
      <div>
        <h3 className="font-bold text-lg px-6 py-5">Some question</h3>
      </div>
      <div className="flex items-center mr-7">
        <Icon name="chevron-down" className={`text-black w-4 h-4`} color={'primary'} size={'large'} />
      </div>
    </div>  ),
};

export const CollapsibleWithTextTrigger = Template1.bind({});
CollapsibleWithTextTrigger.args = {
  ariaLabel: 'Some Aria Label',
  collapsibleId: 'storybook-collapsible-2',
  trigger: 'Click me, I am the trigger',
};
