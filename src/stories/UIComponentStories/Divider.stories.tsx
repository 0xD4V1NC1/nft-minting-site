import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Divider from '../../components/UI/Divider';

export default {
  title: 'UI/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => <Divider {...args} />;

export const HorizontalDivider = Template.bind({});
HorizontalDivider.args = {
  horizontal: true,
  className: 'w-64',
};

export const HorizontalWithChildren = Template.bind({});
HorizontalWithChildren.args = {
  horizontal: true,
  className: 'w-64',
  children: <div>Horizontal with Children </div>,
};

export const VerticalDivider = Template.bind({});
VerticalDivider.args = {
  vertical: true,
  className: 'h-64',
};

export const VerticalWithChildren = Template.bind({});
VerticalWithChildren.args = {
  vertical: true,
  className: 'h-64',
  children: <div>Vertical with Children </div>,

};

