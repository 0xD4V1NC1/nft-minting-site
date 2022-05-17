const DEFAULT_LENGTH = 150;

export const formatWalletAddress = ({text, length = DEFAULT_LENGTH}: {text:string, length:number}) => {
  if (text && text.length > length) {
    return `${text.substring(0, length)}...`;
  }
  return text;
}; // 5...4
