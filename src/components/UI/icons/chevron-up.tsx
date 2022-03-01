import React from 'react';

const ChevronUp = ({
  solid,
  formattedClassName,
}: {
  solid: boolean;
  formattedClassName: string;
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
          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
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
        d="M5 15l7-7 7 7"
      />
    </svg>
  );
};

export default ChevronUp;
