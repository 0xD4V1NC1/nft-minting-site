import React, {ReactNode} from 'react';
export default interface DividerInterface {
    horizontal?: boolean;
    vertical?: boolean;
    children?: ReactNode;
    className?: string;
}