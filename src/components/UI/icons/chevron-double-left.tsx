import React from 'react';

const ChevronDoubleLeft = ({
  solid,
  formattedClassName,
}: {
  solid: boolean,
  formattedClassName: string,
}) => {
  if (solid) {
    return (
      <svg
        className={`${formattedClassName}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414
            0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  return (
    <svg
      className={`${formattedClassName}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="https://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
      />
    </svg>
  );
};

export default ChevronDoubleLeft;
