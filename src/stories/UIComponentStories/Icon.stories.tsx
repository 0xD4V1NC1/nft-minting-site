import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Icon from '../../components/UI/Icon';

export default {
  title: 'UI/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const ExampleIcon = Template.bind({});
ExampleIcon.args = {
  name: 'credit-card',
  color: 'black',
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  name: 'credit-card',
  color: 'black',
  size: 'large',
};

export const Medium = Template.bind({});
Medium.args = {
  name: 'credit-card',
  color: 'black',
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  name: 'credit-card',
  color: 'black',
  size: 'small',
};

