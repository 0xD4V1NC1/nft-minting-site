export interface ToggleInterface {
    option: string;
    setOption:(newOption:string) => void;
    option1Text: string;
    option2Text: string;
    toggleColor?: string;
    toggleBgColor?: string;
};