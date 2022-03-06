type lol = [any, any];
export interface ToggleInterface {
    option: any;
    setOption:(newOption:any) => void;
    options: [any, any];
    option1Text?: string;
    option2Text?: string;
    toggleColor?: string;
    toggleBgColor?: string;
};