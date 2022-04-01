import React, {ReactNode} from 'react';
import {Link} from 'react-router-dom';

// check if link passed in is external link
const isExternal = (path:any) => {
  return /^http/.test(path);
};
const LinkTo = ({to, target, children, ariaLabel}:{to:string, target?:string, children:ReactNode, ariaLabel?:string}) => {
  if (isExternal(to)) {
    const newWindowSrText = target && target === '_blank' ? <span className="sr-only">This link opens a new window</span> : null;
    // rel="noopener noreferrer" is an important security addition b/c it helps prevent known security issues with XSS (cross site scripting) in certain browsers
    return (
      <a href={to} target={target || '_self'} rel="noopener noreferrer">
        {children} {newWindowSrText}
      </a>
    );
  }

  const ariaProps = {
    'aria-label': ariaLabel || 'This links to a new page',
  };
  /*
    We use Link from React-router over <a> b/c Link does not trigger a page refresh and a reset of application state
    which although is not of concern in small app... it can be problematic in larger applications.
    We also add aria-label since Screen Readers sometimes have a hard time detecting the "silent transition" and notifying the user the screen has changed...
    normally adding an aria-label to a an <a> is considered redundant as the screen reader often reads off "Link" when an <a> is found and then the ensuing label

    NOTE: aria-label SHOULD be added to icons with no label text regardless of <Link> or <a> as it is not descriptive enough.
  */
  return <Link to={to} {...ariaProps}>{children}</Link>;
};
export default LinkTo;
