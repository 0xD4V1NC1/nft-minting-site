import React from 'react';

const Minus = ({
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
          d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
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
        d="M20 12H4"
      />
    </svg>
  );
};

export default Minus;
