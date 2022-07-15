import {ToastTypeOptions} from './types';

export default interface ToastInterface {
    toastType: ToastTypeOptions,
    toastHeader: string,
    toastMessage: string | JSX.Element;
};
