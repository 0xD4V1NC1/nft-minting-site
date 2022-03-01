import React, {ReactNode} from 'react';
export default interface LayoutInterface {
    noNav?: boolean;
    noFooter?: boolean;
    children: ReactNode;
};