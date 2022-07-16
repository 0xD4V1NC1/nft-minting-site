import React from 'react';
import ToastInterface from '../../interfaces/ToastInterface';

const getToastBodyStyles = (toastType: ToastInterface['toastType']) => {
  let bodyStyles = 'items-center p-4 mb-4 w-full max-w-xs bg-white rounded-lg shadow border-2 ';
  switch (toastType) {
    case 'warning':
      bodyStyles += 'border-yellow-600 bg-yellow-200 text-yellow-600';
      break;
    case 'error':
      bodyStyles += 'border-red-600 bg-red-200 text-red-600';
      break;
    case 'success':
      bodyStyles += 'border-green-600 bg-green-100 text-green-600';
      break;
    case 'info':
      bodyStyles += 'border-blue-600 bg-blue-200 text-blue-600';
      break;
  }
  return bodyStyles;
};

const Toast = ({toastType, toastHeader, toastMessage}: ToastInterface) => {
  if (!toastType && !toastMessage) return null;

  const toastBodyStyles = getToastBodyStyles(toastType);
  return (
    <>
      <div id="toast-success" className={`${toastBodyStyles}`} role="alert">
        <div className='ml-3 text-lg font-semibold'>{toastHeader}</div>
        <div className="ml-3 text-sm font-normal">{toastMessage}</div>
      </div>
    </>

  );
};
export default Toast;
