import React from "react";

export default interface ImageInterface {
    src: string;
    // if image is decorative leave alt blank... it is best practice for accessibility
    alt?: string;
    className?: string;
    onClick?:() => void;
    circle?: boolean;
    // size should be height and width... i.e. w-4 h-4
    size?:string;
    // if image is clickable, provide aria-label
    ariaLabel?: string;
    omitMarginAuto?: boolean; 
    marginBottom?: string; 
    setIsImgLoading?: (arg0: boolean) => void
}