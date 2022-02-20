import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Overlay from '../../components/UI/Overlay';
import Button from '../../components/UI/Button';

export default {
  title: 'UI/Overlay',
  component: Overlay,
} as ComponentMeta<typeof Overlay>;

const Template: ComponentStory<typeof Overlay> = (args) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  return (
    <>
      <Button type="button" onClick={() => setIsOverlayOpen(true)} color="primary" size='small' >Click Me</Button>
      {isOverlayOpen? <Overlay {...args} open={isOverlayOpen} dismiss={() => setIsOverlayOpen(false)}/> :
null}
    </>

  );
};

export const OverlayExample = Template.bind({});
OverlayExample.args = {
  children: (
    <div className='flex gap-4 mx-4'>
      <div className='bg-red-500'>Card 1</div>
      <div className='bg-blue-500'>Card 2</div>
    </div>
  ),
};
