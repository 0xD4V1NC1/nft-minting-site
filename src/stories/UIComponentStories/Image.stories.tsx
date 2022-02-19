import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Image from '../../components/UI/Image';

const randomImageUrl = `https://media.istockphoto.com/photos/anonymous-hacker-with-laptop-in-front-of-binary-code-cyber-security-picture-id962366210?b=1&k=20&m=962366210&s=170667a&w=0&h=DMo_N3cInUGALDSTZ6vhLmKWfDtSUGstb7-dQC-oVcg=`;

export default {
  title: 'UI/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const RandomImage = Template.bind({});
RandomImage.args = {
  src: randomImageUrl,
  size: 'w-16 h-16',
};

export const ClickableImage = Template.bind({});
ClickableImage.args = {
  src: randomImageUrl,
  onClick: () => console.log('I was clicked'),
  ariaLabel: 'Log image was clicked', // remember to include ariaLabel whenever onClick is added to Image
};

export const CircleImage = Template.bind({});
CircleImage.args = {
  src: randomImageUrl,
  circle: true,
};
