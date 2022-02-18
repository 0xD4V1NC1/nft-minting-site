import React from 'react';
import ContainerInterface from '../../interfaces/ContainerInterface';

const Container = ({margin, padding, className, children}: ContainerInterface) => {
  let p = '';
  let m = '';

  if (padding === 'small') {
    p = `px-1`;
  } else if (padding === 'medium') {
    p = `px-2`;
  } else if (padding === 'large') {
    p = `px-4 md:px-8`;
  } else if (padding === 'xlarge') {
    p = `px-4 md:px-12`;
  } else if (padding === 'none') {
    p = `px-0`;
  }

  if (margin === 'xsmall') {
    m = `my-2`;
  } else if (margin === 'small') {
    m = `my-4`;
  } else if (margin === 'medium') {
    m = `my-4 md:my-8`;
  } else if (margin === 'large') {
    m = `my-12 md:my-24`;
  } else if (margin === 'xlarge') {
    m = `my-24 md:my-48`;
  } else if (margin === 'none') {
    m = `my-0`;
  }
  return <div className={`container mx-auto ${p} ${m} ${className || ''}`}>{children}</div>;
};

export default Container;
