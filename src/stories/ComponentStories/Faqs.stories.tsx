import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Faqs
  from '../../components/Components/Faqs';
export default {
  title: 'Components/FAQs',
  component: Faqs,
} as ComponentMeta<typeof Faqs>;

const Template: ComponentStory<typeof Faqs> = (args) => <Faqs {...args} />;

export const FaqsExample = Template.bind({});
// if you use this component create a faqs.enum.ts file for your array of objects unless you are fetching FAQs from an external data-source
FaqsExample.args = {
  faqs: [{
    id: 1,
    question: 'Is programming easy?',
    answer: 'No',
  }, {
    id: 2,
    question: 'How long did this take?',
    answer: 'Too Long',
  },
  {
    id: 3,
    question: 'How are you feeling today?',
    answer: 'Been coding for 12 hours... i am tired',
  }],
};
