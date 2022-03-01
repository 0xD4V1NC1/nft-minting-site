import React from 'react';

const CreditCard = ({
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
        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
        <path
          fillRule="evenodd"
          d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
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
        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      />
    </svg>
  );
};

export default CreditCard;
