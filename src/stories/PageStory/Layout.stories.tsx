import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {MemoryRouter} from 'react-router-dom';

import Layout from '../../components/Layout/Layout';
import Faqs from '../../components/Components/Faqs';

// with this story you can quickly test building a page with various components passed in as children
export default {
  title: 'Page/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <MemoryRouter><Layout {...args}/></MemoryRouter>;

const myFaqs = [{
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
}];
export const BuildAPage = Template.bind({});
BuildAPage.args = {
  children: (
    <div className='mx-8'>
      <div>Some Content</div>
      <div>Some more Content</div>
      <div>Even More Content</div>
      <Faqs faqs={myFaqs} />
    </div>
  ),
};

export const NoNavPage = Template.bind({});
NoNavPage.args = {
  noNav: true,
  children: (
    <div className='mx-8'>
      <div>Some Content</div>
      <div>Some more Content</div>
      <div>Even More Content</div>
      <Faqs faqs={myFaqs} />
    </div>
  ),
};

export const NoFooterPage = Template.bind({});
NoFooterPage.args = {
  noFooter: true,
  children: (
    <div className='mx-8'>
      <div>Some Content</div>
      <div>Some more Content</div>
      <div>Even More Content</div>
      <Faqs faqs={myFaqs} />
    </div>
  ),
};
