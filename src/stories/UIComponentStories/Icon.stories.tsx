import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Icon from '../../components/UI/Icon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Icon',
  component: Icon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    name: {control: 'name'},
    color: {control: 'label'},
    size: {control: 'label'},
    solid: {control: 'solid'},
    className: {control: 'className'},
    position: {control: 'position'},
  },
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const ExampleIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ExampleIcon.args = {
  name: 'chevron-left',
  color: 'black',
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
//   name: 'chevron-left',
  color: 'black',
  size: 'large'};

export const Medium = Template.bind({});
Medium.args = {
  name: 'chevron-left',
  color: 'black',
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  name: 'chevron-left',
  color: 'black',
  size: 'small',
};

