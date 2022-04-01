import React from 'react';

const ChevronDoubleRight = ({
  solid,
  formattedClassName,
}: {
  solid: boolean,
  formattedClassName: string,
}) => {
  const fill = solid ? 'currentColor' : 'none';
  const viewBox = solid ? '0 0 20 20' : '0 0 24 24';
  const xmlns = 'https://www.w3.org/2000/svg';
  if (solid) {
    return (
      <svg
        className={`${formattedClassName}`}
        fill={fill}
        viewBox={viewBox}
        xmlns={xmlns}
      >
        <path
          fillRule="evenodd"
          d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  return (
    <svg
      className={`${formattedClassName}`}
      fill={fill}
      stroke="currentColor"
      viewBox={viewBox}
      xmlns={xmlns}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 5l7 7-7 7M5 5l7 7-7 7"
      />
    </svg>
  );
};

export default ChevronDoubleRight;
