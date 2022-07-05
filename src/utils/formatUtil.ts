const DEFAULT_LENGTH = 150;

export const formatWalletAddress = (text: string, length:number = DEFAULT_LENGTH) => {
  if (text && text.length > length) {
    return `${text.substring(0, 5)}...${text.substring(text.length-4, text.length)}`;
  }
  return text;
};

export const pluralize = (count:number, noun:string, suffix = 's') => {
  const lastCharacter = noun.charAt(noun.length - 1);
  // if the last character is y, check if its plural... if it is replace the last character of the noun (y) with ies
  if (lastCharacter === 'y') {
    return `${count !== 1 ? noun.replace(/.$/, 'ies') : noun}`;
  }
  return `${noun}${count !== 1 ? suffix : ''}`;
};
