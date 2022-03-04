import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Toggle from '../../components/UI/Toggle';

export default {
  title: 'UI/Toggle',
  component: Toggle,

} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => {
  const [toggleOption, setToggleOption] = useState('option 1');
  return (
    <Toggle {...args} option={toggleOption} setOption={setToggleOption} />
  );
};

export const ToggleExample = Template.bind({});
// size for Toggle refers to the text size. All Toggles use p-2 to be consistent in style
ToggleExample.args = {
  option1Text: 'OPTION 1',
  option2Text: 'OPTION 2',
  toggleColor: 'bg-blue-500',
  toggleBgColor: 'bg-red-300',
};
