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

const ZoomIn = ({
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
      <path d="M5 8a1 1 0 011-1h1V6a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0V9H6a1 1 0 01-1-1z" />
      <path
        fillRule="evenodd"
        d="M2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm6-4a4 4 0 100 8 4 4 0 000-8z"
        clipRule="evenodd"
      />
    </>
  ) : (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
    />
  );

  return svgIcon(formattedClassName, fill, stroke, viewBox, children);
};

export default ZoomIn;
