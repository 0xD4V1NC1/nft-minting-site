import React from 'react';

function DinersClub({ formattedClassName }) {
  return (
    <svg className={`${formattedClassName}`} version="1.1" viewBox="0 0 780 500" xmlns="https://www.w3.org/2000/svg">
      <path
        d="M53.384,15h671.731c21.198,0,38.385,16.852,38.385,37.64v395.218   c0,20.789-17.187,37.642-38.385,37.642H53.384C32.185,485.5,15,468.647,15,447.858V52.64C15,31.852,32.185,15,53.384,15z"
        fill="none"
        stroke="currentColor"
        strokeWidth="30"
      />
      <path
        d="m423.83 93.429h-75.083c-88.286-0.03-160.96 64.651-160.96 158.18 0 85.566 72.669 155.87 160.96 155.46h75.083c87.243 0.411 166.87-69.911 166.87-155.46 0-93.551-79.63-158.22-166.87-158.18zm-41.237 241.39v-169.88c34.744 13.098 59.413 46.163 59.476 84.932-0.063 38.783-24.732 71.821-59.476 84.943zm-66.272-0.042c-34.732-13.121-59.363-46.148-59.439-84.906 0.077-38.751 24.707-71.793 59.439-84.926v169.83z"
        fill="#373737"
      />
    </svg>
  );
}

export default DinersClub;
