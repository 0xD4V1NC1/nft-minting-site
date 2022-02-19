import React, {ReactNode} from 'react';
type PositionOptions =  'top' | 'top-start' | 'top-end' | 'right' | 'right-start' |  
 'right-end' |  
 'bottom' |  
 'bottom-start' |  
 'bottom-end' |  
 'left'|  
 'left-start' |  
 'left-end' |  
 'auto' |  
 'auto-start' |  
 'auto-end';
export default interface TooltipInterface {
    theme?: 'dark' | 'light' | 'transparent';
    arrow?: boolean;
    content: string;
    triggerContent?: string;
    children?: ReactNode;
    // checky tippy docs... i.e. mouseenter
    trigger?: string;
    position: PositionOptions;
    disabled?: boolean;
    omitTabIndex?: boolean;
    interactive?: boolean;
    maxWidth?: number; 
    useOnShow?: boolean; 
    padded?: boolean; 
    delay?: number;
};
