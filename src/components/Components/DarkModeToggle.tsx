import React from 'react';
import useDarkMode from '../../hooks/useDarkMode';

import Button from '../UI/Button';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <Button type='button' color='none' icon={{name: `${isDark ? 'sun': 'moon'}`, size: 'large', position: 'none',
      color: 'black', className: 'hover:text-purple-500'}} onClick={()=> setIsDark(!isDark)} />
  );
};
export default DarkModeToggle;
