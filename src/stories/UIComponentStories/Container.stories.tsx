import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Container from '../../components/UI/Container';

export default {
  title: 'UI/Container',
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

// purpose of the container component is to consistently handle spacing within a page or subsection across all view ports ... by default mx-auto is applied to the container
export const ContainerExample = Template.bind({});
ContainerExample.args = {
  children: (
    <div className='flex gap-8'>
      <div>Column 1 </div>
      <div>Column 2</div>
    </div>
  ),
  className: 'px-8',
};
