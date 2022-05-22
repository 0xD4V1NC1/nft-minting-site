import React from 'react';
import ReactCollapsible from 'react-collapsible';
import {v4 as uuidv4} from 'uuid';
import CollapsibleInterface from '../../interfaces/CollapsibleInterface';

const Collapsible = (props: CollapsibleInterface) => {
  const collapsibleId = props.collapsibleId || uuidv4();
  let ariaProps = {};
  if (props.ariaLabel) {
    ariaProps = {
      'aria-label': props.ariaLabel,
    };
  } else {
    ariaProps = {
      'aria-labelledby': `${collapsibleId}-collapsible`,
    };
  }
  return (
    <ReactCollapsible
      {...props}
      transitionTime={props.transitionTime || 200}
      trigger={
        props.trigger ? (
            <button aria-expanded={props.open} aria-controls={collapsibleId} id={`${collapsibleId}-collapsible`} className="w-full text-left">
              {props.trigger}
            </button>
        ) : ''
      }
    >
      {(props.open || props.open === undefined) && (
        <div role="region" id={collapsibleId} {...ariaProps}>
          {props.children}
        </div>
      )}
    </ReactCollapsible>
  );
};
export default Collapsible;
