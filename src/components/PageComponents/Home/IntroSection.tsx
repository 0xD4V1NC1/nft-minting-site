import React from 'react';

const IntroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-red-300 bg-gradient-to-br from-white via-white to-primary-500 dark:bg-gradient-to-br dark:from-primary-dark-500 dark:via-primary-dark-500 dark:to-primary-dark-400">
      <h1 className='text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-500'>Gradient Text</h1>
      <div className="flex justify-center mt-4">
        <a
          className="px-4 py-2 text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
            Learn React
        </a>
        <a
          className="px-4 py-2 ml-4 text-white rounded bg-rainbow hover:bg-rainbow hover:animate-rainbow"
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
        >
            Learn Tailwind CSS v3.x
        </a>
      </div>
    </section>
  );
};
export default IntroSection;
