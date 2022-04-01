import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Toggle from '../../components/UI/Toggle';

export default {
  title: 'UI/Toggle',
  component: Toggle,

} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => {
  // do not make options[0] and options[1] the same...array should only be two elements
  const options: [string, string] = ['option 1', 'option 2'];
  const [toggleOption, setToggleOption] = useState(options[0]);
  return (
    <>
      <Toggle {...args} options={options} option={toggleOption} setOption={setToggleOption} />
      {toggleOption === options[0]? <div>option 1 is on</div>: <div>option 2 is on</div>}
    </>

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
