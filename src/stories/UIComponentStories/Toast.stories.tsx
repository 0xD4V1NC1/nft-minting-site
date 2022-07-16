import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {useToastContext} from '../../providers/ToastContext';
import Button from '../../components/UI/Button';
import Toast from '../../components/UI/Toast';

export default {
  title: 'UI/Toast',
  component: Toast,
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => {
  const {addToast} = useToastContext();
  return (
    <>
      <Button type="button" ariaLabel='Click to trigger toast' onClick={() => addToast({...args})} color="primary" size='small' >Click for Toast</Button>
    </>

  );
};

export const SuccessToast = Template.bind({});
SuccessToast.args = {
  toastType: 'success',
  toastHeader: 'Header of Toast',
  toastMessage: 'Toast Message goes here',
};

export const WarningToast = Template.bind({});
WarningToast.args = {
  toastType: 'warning',
  toastHeader: 'Header of Toast',
  toastMessage: 'Toast Message goes here',
};

export const ErrorToast = Template.bind({});
ErrorToast.args = {
  toastType: 'error',
  toastHeader: 'Header of Toast',
  toastMessage: 'Toast Message goes here',
};

export const InfoToast = Template.bind({});
InfoToast.args = {
  toastType: 'info',
  toastHeader: 'Header of Toast',
  toastMessage: 'Toast Message goes here',
};
