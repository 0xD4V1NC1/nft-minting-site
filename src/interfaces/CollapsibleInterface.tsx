import React, { ReactNode } from 'react';

export default interface CollapsibleInterface {
    ariaLabel: string;
    collapsibleId: string;
    transitionTime?: number;
    open: boolean; 
    trigger?: ReactNode | string;
    children: ReactNode;
    onOpening?: () => void;
    onClosing?: () => void;
};