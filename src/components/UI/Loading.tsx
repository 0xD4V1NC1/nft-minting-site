import React from 'react';
import LoadingInterface from '../../interfaces/LoadingInterface';

function getLoaderColor(color: string | undefined) {
  switch (color) {
    case 'primary':
      return `loader-primary`;
    case 'primary-dark':
      return `loader-primary-dark`;
    case 'secondary':
      return `loader-secondary`;
    case 'secondary-dark':
      return `loader-secondary-dark`;
    case 'white':
      return `loader-white`;
    case 'gray':
      return `loader-gray`;
    case 'pink':
      return `loader-pink`;
    case 'green':
      return `loader-green`;
    case 'red':
      return `loader-red`;
    case 'yellow':
      return `loader-yellow`;
    case 'purple':
      return `loader-purple`;
    case 'teal':
      return `loader-teal`;
    case 'indigo':
      return `loader-indigo`;
    case 'blue':
      return `loader-blue`;
    case 'orange':
      return `loader-orange`;
    case 'black':
    default:
      return 'loader-black';
  }
}

const Loading = ({
  color,
  message,
  children,
  isButton,
  className,
  messageClassName,
}: LoadingInterface) => {
  const c = getLoaderColor(color);
  const b = isButton ? `border-2 border-t-2` : `border-8 border-t-8`;
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className={`${c} ${b} animate-spin rounded-full ${className || ''}`}
      />
      {message && <div className={`${messageClassName || ''}`}>{message}</div>}
      {children}
    </div>
  );
};

export default Loading;
