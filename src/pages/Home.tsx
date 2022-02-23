import React, {useEffect} from 'react';
import {useGlobalContext} from '../providers/GlobalContextProvider';
import Button from '../components/UI/Button';
import Layout from '../components/Layout/Layout';

const Home = () => {
  const {setPageTitle /* , setIsDarkMode, isDarkMode*/} = useGlobalContext();
  useEffect(() => {
    setPageTitle('HOme');
  }, []); // onClick={() => setIsDarkMode(!isDarkMode)}
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center h-screen text-red-300 bg-gradient-to-br from-white via-white to-primary-500">
        <Button type="button" color="blue" className='py-2 px-4' text="set isDarkMode" />
        <div className="flex justify-center mt-4">
          <a
            className="px-4 py-2 text-white bg-indigo-500 rounded hover:bg-indigo-600"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className="px-4 py-2 ml-4 text-white bg-secondary-500 rounded hover:bg-red-600"
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Tailwind CSS v3.x
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
