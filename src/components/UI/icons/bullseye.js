import React from 'react';

function Bullseye({ formattedClassName }) {
  return (
    <svg
      className={`svg-inline--fa fa-bullseye fa-w-16 ${formattedClassName}`}
      aria-hidden="true"
      data-prefix="fas"
      data-icon="bullseye"
      role="img"
      xmlns="https://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
    >
      <path
        fill="currentColor"
        d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 432c-101.69 0-184-82.29-184-184 0-101.69 82.29-184 184-184 101.69 0 184 82.29 184 184 0 101.69-82.29 184-184 184zm0-312c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128-57.31-128-128-128zm0 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"
      />
    </svg>
  );
}

export default Bullseye;
