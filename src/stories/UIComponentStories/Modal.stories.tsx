import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Modal from '../../components/UI/Modal';
import Button from '../../components/UI/Button';

export default {
  title: 'UI/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Button type="button" ariaLabel='Click to trigger modal' onClick={() => setIsModalOpen(true)} color="primary" size='small' >Click Me</Button>
      <Modal {...args} open={isModalOpen} toggle={() => setIsModalOpen(!isModalOpen)}/>
    </>

  );
};

export const ModalExample = Template.bind({});

ModalExample.args = {
  size: 'lg',
  position: 'center',
  header: 'Modal title',
  ariaLabel: 'Storybook Modal 1',
  children: (
    <div className='mx-8'>
      <div>Some Content</div>
      <div>Some more Content</div>
      <div>Even More Content</div>
    </div>
  ),
};

export const NoCloseX = Template.bind({});

NoCloseX.args = {
  size: 'lg',
  position: 'center',
  header: 'No Close X',
  ariaLabel: 'Storybook modal 2',
  omitCloseX: true,
  children: (
    <div className='mx-8'>
      <div>Some Content</div>
      <div>Some more Content</div>
      <div>Even More Content</div>
    </div>
  ),
};

export const TransparentBg = Template.bind({});
TransparentBg.args = {
  size: 'lg',
  position: 'center',
  header: 'Transparent Background',
  ariaLabel: 'Storybook modal 3',
  transparentBg: true,
  children: (
    <div className='mx-8'>
      <div>Some Content</div>
      <div>Some more Content</div>
      <div>Even More Content</div>
    </div>
  ),
};

export const BgBlack = Template.bind({});
BgBlack.args = {
  size: 'lg',
  position: 'center',
  ariaLabel: 'Storybook modal 4',
  bgBlack: true,
  className: 'text-green-500',
  closeXClassName: 'text-blue-500 pr-12',
  children: (
    <div className='m-8'>
      <div>Some Content</div>
      <div>Some more Content</div>
      <div>Even More Content</div>
    </div>
  ),
};
