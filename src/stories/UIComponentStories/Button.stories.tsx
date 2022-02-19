import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Button from '../../components/UI/Button';

export default {
  title: 'UI/Button',
  component: Button,

} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  text: 'Fuck my Life',
  className: 'py-4 px-8',
};


