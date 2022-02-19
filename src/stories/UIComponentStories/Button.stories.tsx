import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Button from '../../components/UI/Button';

export default {
  title: 'UI/Button',
  component: Button,

} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// size for button refers to the text size. All buttons use p-2 to be consistent in style
Primary.args = {
  color: 'primary',
  text: 'Primary',
  size: 'small',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  text: 'Secondary',
  size: 'medium',
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  color: 'blue',
  text: 'Large',
  size: 'large',
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  color: 'green',
  text: 'Continue',
  size: 'medium',
  icon: {
    name: 'chevron-right',
    position: 'right',
    color: 'white',
    size: 'medium',
  },
};

export const ButtonIconOnly = Template.bind({});
ButtonIconOnly.args = {
  color: 'red',
  className: 'p-2',
  icon: {
    name: 'exclamation-circle',
    position: 'none',
    color: 'white',
    size: 'large',
  },
};
