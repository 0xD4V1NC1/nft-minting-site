import React, { ReactNode } from 'react';

export default interface LoadingInterface {
    color?: string;
    message?: string;
    children?: ReactNode;
    isButton?: boolean;
    className?: string; 
    messageClassName?: string;
}