import React from 'react';

const Clock = ({
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
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
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
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

export default Clock;
