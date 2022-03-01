import { ColorOptions, SizeOptions } from "./types";
export default interface IconInterface {
    name: string;
    color:  ColorOptions;
    size: SizeOptions;
    solid?: boolean;
    className?: string;
    position?: 'left' | 'right' | 'none';
    rotate?: boolean;
};
