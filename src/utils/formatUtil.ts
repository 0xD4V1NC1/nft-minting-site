const DEFAULT_LENGTH = 150;

export const formatWalletAddress = (text: string, length:number = DEFAULT_LENGTH) => {
  if (text && text.length > length) {
    return `${text.substring(0, 5)}...${text.substring(text.length-4, text.length)}`;
  }
  return text;
};
