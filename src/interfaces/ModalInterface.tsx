import React, {ReactNode} from 'react';
export default interface ModalInterface {
    open: boolean;
    trigger?: ReactNode;
    toggle: any;
    header?: string;
    size?: 'sm' | 'lg' | 'xl';
    children: ReactNode;
    transparentBg?: boolean;
    position: 'center' | 'top right' | 'bottom';
    paddingBottom?: string;
    omitCloseX?: boolean;
    // aria label or aria labelled by should be included in usage of modal component
    ariaLabel?: string;
    ariaLabelledBy?: string;
    
    focusLockDelay?: number;
    closeIconColor?: string;
    sizeClasses?: string;
    bgBlack?: boolean;
    className?: string,
    closeXClassName?: string;
    omitMargin?: boolean;
    omitRounded?: boolean;
}