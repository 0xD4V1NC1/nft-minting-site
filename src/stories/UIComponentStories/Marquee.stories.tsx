import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Marquee from '../../components/UI/Marquee';

export default {
  title: 'UI/Marquee',
  component: Marquee,
} as ComponentMeta<typeof Marquee>;

const Template1: ComponentStory<typeof Marquee> = (args) => <Marquee {...args} />;


export const MarqueeExample = Template1.bind({});
MarqueeExample.args = {
  marqueeText: 'This is some Marquee',
};

export const ReverseMarqueeExample = Template1.bind({});
ReverseMarqueeExample.args = {
  marqueeText: 'Reverse Marquee',
  reverse: true,
};
