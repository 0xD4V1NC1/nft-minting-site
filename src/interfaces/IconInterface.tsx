export default interface IconInterface {
    name: string;
    color: string;
    size: 'mini' | 'tiny' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | '2xlarge';
    solid?: boolean;
    className?: string;
    position?: string;
};