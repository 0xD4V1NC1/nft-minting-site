import React from 'react';

const svgIcon = (
    formattedClassName: string,
    fill: string,
    stroke: string,
    viewBox: string,
    children: React.ReactNode,
) => {
  return (
    <svg
      className={`${formattedClassName}`}
      fill={fill}
      stroke={stroke}
      viewBox={viewBox}
      xmlns="https://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};

const ClipboardList = ({
  solid,
  formattedClassName,
}: {
  solid: boolean;
  formattedClassName: string;
}) => {
  const fill = solid ? 'currentColor' : 'none';
  const viewBox = solid ? '0 0 20 20' : '0 0 24 24';
  const stroke = solid ? '' : 'currentColor';
  const children = solid ? (
    <>
      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
      <path
        fillRule="evenodd"
        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1
        0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
        clipRule="evenodd"
      />
    </>
  ) : (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
    />
  );

  return svgIcon(formattedClassName, fill, stroke, viewBox, children);
};

export default ClipboardList;
