import React, { ReactElement, ReactNode } from 'react';

export default interface CollapsibleInterface {
    ariaLabel: string;
    collapsibleId: string;
    transitionTime?: number;
    open: boolean; 
    trigger?: ReactElement | string;
    children: ReactElement;
    onOpening?: () => void;
    onClosing?: () => void;
};