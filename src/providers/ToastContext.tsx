import React, {createContext, useContext, useMemo, useState, useCallback, useEffect, ReactNode} from 'react';
import {v4 as uuidv4} from 'uuid';
import Toast from '../components/UI/Toast';
import ToastInterface from '../interfaces/ToastInterface';

export type ToastType = {
    addToast: ({toastType, toastHeader, toastMessage}: ToastInterface) => void;
};

export const ToastContext = createContext<ToastType>({
  addToast: () => {
    throw new Error('To add a toast, wrap the app in a ToastsProvider.');
  },
});

export const ToastProvider = ({children}:{ children: ReactNode}) => {
  const defaultToast: ToastInterface & {id: string} = {
    id: '',
    toastType: '',
    toastHeader: '',
    toastMessage: '',
  };

  const [toasts, setToasts] = useState([defaultToast]);

  useEffect(() => {
    if (toasts.length) {
      const timer = setTimeout(() => {
        setToasts((activeToasts) => activeToasts.slice(1));
      }, 5000);
      return () => clearTimeout(timer);
    }
    return () => false;
  }, [toasts]);

  const addToast = useCallback(({toastType, toastHeader, toastMessage}: ToastInterface) => {
    const toastId = uuidv4();
    const toast = {
      id: toastId,
      toastType,
      toastHeader,
      toastMessage,
      remove: () => {
        setToasts((latestToasts) => latestToasts.filter(({id}) => id !== toastId));
      },
    };

    setToasts((latestToasts) => [...latestToasts, toast]);
  }, []);

  const contextValue = useMemo(() => ({
    addToast,
  }), [addToast]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <div id='toast-container' className='fixed w-full bottom-0 ml-8'>
        {toasts.map((toast) => {
          const {id, toastType, toastHeader, toastMessage} = toast;
          return (
            <Toast key={id} toastType={toastType} toastHeader={toastHeader} toastMessage={toastMessage} />
          );
        })}
      </div>
    </ToastContext.Provider>
  );
};

export const useToastContext = () => useContext(ToastContext);
