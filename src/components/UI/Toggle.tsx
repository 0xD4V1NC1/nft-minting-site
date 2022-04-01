import React, {useEffect, useState} from 'react';
import {ToggleInterface} from '../../interfaces/ToggleInterface';

const Toggle = ({option, setOption, options, option1Text, option2Text, toggleColor, toggleBgColor}: ToggleInterface) => {
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    if (toggle) {
      setOption(options[0]);
    } else {
      setOption(options[1]);
    }
  }, [toggle]);
  return (
    <div className="mt-2 flex items-center justify-center w-full">
      <div className="mr-1 md:mr-2.5">{option1Text}</div>
      <button type="button" className={`w-10 h-6 ${toggleBgColor} border-xs border-gray-400 rounded-full flex items-center`} onClick={() => setToggle(!toggle)}>
        <div className={`w-5 h-5 ${toggleColor} rounded-full transform mx-auto duration-300 ease-in-out ${option === options[0] ? '-translate-x-2' : 'translate-x-2'}`} />
      </button>
      <div className="ml-1 md:ml-2.5">{option2Text}</div>
    </div>
  );
};
export default Toggle;
