import React from 'react';
import DividerInterface from '../../interfaces/DividerInterface';

const Divider = ({horizontal, vertical, children, className}: DividerInterface) => {
  if (horizontal) {
    if (children) {
      return (
        <div className={`divider-horizontal flex leading-4 ${className || ''}`}>
          <div className="mx-4">{children}</div>
        </div>
      );
    }
    return <div className={` border-gray-300 border leading-4 text-base h-0 ${className || ''}`} />;
  }
  if (vertical) {
    if (children) {
      return (
        <div className={`flex flex-col justify-center items-center ${className || ''}`}>
          <div className="divider-vertical pb-4" />
          <div className="divider-vertical-content">{children}</div>
          <div className="divider-vertical pt-4" />
        </div>
      );
    }
    return <div className={`border-l border-gray-300 inline-block ${className || ''}`} />;
  }
  // DEFAULT HORIZONTAL
  return <div className={`border-gray-300 leading-4 text-base h-0 ${className || ''}`} />;
};

export default Divider;
