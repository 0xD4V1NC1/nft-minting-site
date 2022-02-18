import React, { ReactNode } from 'react';

export default interface ContainerInterface {
    margin?: string;
    padding?: string;
    className?: string; 
    children: ReactNode;
};