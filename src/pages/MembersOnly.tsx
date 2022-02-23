import React, {useEffect} from 'react';
import {useGlobalContext} from '../providers/GlobalContextProvider';

const SecondPage = () => {
  const {setPageTitle} = useGlobalContext();
  useEffect(() => {
    setPageTitle('PAG2');
  }, []);
  return (
    <main>
      <div>
            This is page 2
      </div>

    </main>
  );
};
export default SecondPage;
