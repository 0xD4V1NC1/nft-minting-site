import React, { ReactNode } from 'react';
import { ColorOptions } from './types';
export default interface LoadingInterface {
    color?: ColorOptions;
    message?: string;
    children?: ReactNode;
    isButton?: boolean;
    className?: string; 
    messageClassName?: string;
}