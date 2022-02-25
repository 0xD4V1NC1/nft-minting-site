export {};
import React, {useEffect, useState} from 'react';
/**
Plan toggle button. Toggle between annual and monthly plans.
 */
const Toggle = ({whichPlan, setWhichPlan}:{whichPlan:string, setWhichPlan:(plan:string) => void}) => {
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    if (toggle) {
      setWhichPlan('monthly');
    } else {
      setWhichPlan('annual');
    }
  }, [toggle]);
  return (
    <div className="mt-2 flex items-center justify-center w-full">
      <div className="mr-1 md:mr-2.5">Billed Monthly</div>
      <button type="button" className="w-10 h-6 bg-gray-100 border-xs border-gray-400 rounded-full flex items-center" onClick={() => setToggle(!toggle)}>
        <div className={`w-5 h-5 bg-cyb-pink-500 rounded-full transform mx-auto duration-300 ease-in-out ${whichPlan === 'monthly' ? '-translate-x-2' : 'translate-x-2'}`} />
      </button>
      <div className="ml-1 md:ml-2.5">Billed Annually</div>
    </div>
  );
};
export default Toggle;
