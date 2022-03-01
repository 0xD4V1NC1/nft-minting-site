import React, {ReactNode} from 'react';
import ButtonInterface from './ButtonInterface';
import IconInterface from './IconInterface';

export default interface DropdownInterface{
    // will return null without id
    id: string;

    children: ReactNode;
    dropBackgroundColor?: string;
    className?:string;
    dropClassName?: string;
    button: ButtonInterface;
    icon: IconInterface;
    text?: string;
    trigger: ReactNode;
    ariaLabel: string;
};