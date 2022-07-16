import React, {useEffect, useState} from 'react';
import {createPortal} from 'react-dom';

import FocusLock from 'react-focus-lock';
import ModalInterface from '../../interfaces/ModalInterface';

function CloseX({toggle, omitCloseX, color}: {toggle: ()=> void, omitCloseX:boolean | undefined, color: string | undefined }) {
  if (omitCloseX) {
    return null;
  }
  return (
    <>
      <button aria-label="Close" className={`text-3xl cursor-pointer ${color || ''}`} onClick={toggle}>
        &times;
      </button>
    </>
  );
}
function manageFocus(focusLocked: boolean) {
  if (focusLocked) {
    const modalContainer = document.getElementById('modal-container');
    if (modalContainer) {
      modalContainer.focus();
    }
  }
}
function getBackgroundColor(transparentBg: boolean | undefined, bgBlack: boolean | undefined) {
  if (transparentBg) {
    return '';
  }
  if (bgBlack) {
    return 'bg-black';
  }
  return 'bg-white';
}
function getSizeStyles(size: string | undefined, sizeStyles: string | undefined) {
  if (sizeStyles) {
    return sizeStyles;
  }
  switch (size) {
    case 'sm':
      return 'md:w-1/3';
    case 'lg':
      return 'md:w-2/3';
    case 'xl':
      return 'md:w-5/6';
    default:
      return 'sm:w-3/4 lg:w-2/3 xl:w-1/2';
  }
}
function getPositionStyles(position: string) {
  let positionStyles = '';
  if (position === 'center') {
    positionStyles = 'flex items-center';
  }
  if (position === 'top right') {
    positionStyles = 'flex items-start justify-end';
  }
  if (position === 'bottom') {
    positionStyles = 'flex items-end';
  }
  return positionStyles;
}
const Modal = ({
  open,
  trigger,
  toggle,
  header,
  size,
  children,
  transparentBg,
  position,
  ariaLabel,
  paddingBottom,
  omitCloseX,
  ariaLabelledBy,
  focusLockDelay = 0,
  closeIconColor,
  sizeClasses,
  bgBlack,
  className = '',
  closeXClassName,
  omitMargin,
  omitRounded,
}: ModalInterface) => {
  const [focusLocked, setFocusLocked] = useState(false);
  const positionStyles = getPositionStyles(position);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    // Control when focus lock begins (in case we need to delay for reasons (toast has focus))
    if (open) {
      setTimeout(() => {
        setFocusLocked(true);
      }, focusLockDelay);
    }
    // allow modal to be closed on press of esc key (accessibility reasons)
    function close(e: any) {
      if (e && e.key === 'Escape' && open && toggle) {
        toggle();
      }
    };
    window.addEventListener('keydown', close );
    // useEffect cleanup function
    return () => {
      window.removeEventListener('keydown', close);
      setFocusLocked(false);
    };
  }, [open]);
  // Set focus on modal when focuslocked
  // There's a prop to go on modal, 'autofocus' that will auto focus on a table element inside, but this defaults to the close button when active
  // 'autofocus' also doesn't seem to work when delayed from focusLockDelay
  useEffect(() => {
    manageFocus(focusLocked);
  }, [focusLocked]);
  const paddingB = paddingBottom || 'pb-10';
  // if we have aria label by, apply aria labeled by
  // else use the passed in aria label or default aria label
  const ariaLabelProps = {
    'role': 'dialog',
    'tabIndex': -1,
    'aria-modal': true,
    'aria-labelledby': '',
    'aria-label': '',
  };
  if (ariaLabelledBy) {
    ariaLabelProps['aria-labelledby'] = ariaLabelledBy;
  } else {
    ariaLabelProps['aria-label'] = ariaLabel || 'Modal Dialog';
  }
  const bgColor = getBackgroundColor(transparentBg, bgBlack);
  const sizeStyles = getSizeStyles(size, sizeClasses);
  const margin = omitMargin ? '' : 'mb-16 mx-auto';
  const rounded = omitRounded ? '' : 'rounded-lg';
  const defaultWithoutPosition = !positionStyles ? 'md:mt-10 mt-5' : '';
  const modalContentClassName = `z-30 overflow-auto w-full h-auto ${bgColor} ${sizeStyles} ${defaultWithoutPosition} ${margin} ${rounded} ${className}`;
  return (
    <>
      {trigger}
      {open && (
        // if autoFocus is set to true will set focus on first focusable element in module - Focus being handled above when focusLocked is true
        createPortal(
            <FocusLock autoFocus={false} disabled={!focusLocked} returnFocus>
              <div
                onClick={toggle}
                className={`${open ? '' : 'hidden'} fixed top-0 left-0 w-full`}
                style={{backgroundColor: 'rgba(0, 0, 0, 0.69)', zIndex: '2000'}}
                id="modal-container"
              >
                <div className={`z-20 px-5 overflow-scroll h-screen ${positionStyles}`}>
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className={modalContentClassName}
                    style={{maxHeight: '80vh'}}
                    {...ariaLabelProps}
                  >
                    {header && (
                      <div className={`${transparentBg ? '' : 'border-b-xs border-gray-400'} flex justify-between items-center px-6 py-1 md:py-2`}>
                        <h5 className="text-xl inline-block">{header}</h5>
                        <CloseX toggle={toggle} omitCloseX={omitCloseX} color={closeIconColor} />
                      </div>
                    )}
                    <div className={`${bgColor} relative ${paddingB} ${header ? 'pt-5' : 'pt-0'}`}>
                      {!header && (
                        <div className={`absolute top-0 right-0 text-center block ${closeXClassName || 'pr-3 -mt-1'}`}>
                          <CloseX toggle={toggle} omitCloseX={omitCloseX} color={closeIconColor} />
                        </div>
                      )}
                      {children}
                    </div>
                  </div>
                </div>
              </div>
            </FocusLock>,
            document.body,
        )
      )}
    </>
  );
};
export default Modal;
//  Argument of type '(e: KeyboardEvent<Element>) => void' is not assignable to parameter of type '(this: Window, ev: KeyboardEvent) => any'.\n      Types of parameters 'e' and 'ev' are incompatible.\n        Type 'KeyboardEvent' is missing the following properties from type 'KeyboardEvent<Element>': locale, nativeEvent, isDefaultPrevented, isPropagationStopped, persist\n  Overload 2 of 2, '(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void', gave the following error.\n    Argument of type '(e: KeyboardEvent<Element>) => void' is not assignable to parameter of type 'EventListenerOrEventListenerObject'.\n      Type '(e: KeyboardEvent<Element>) => void' is not assignable to type 'EventListener'.\n        Types of parameters 'e' and 'evt' are incompatible.\n          Type 'Event' is missing the following properties from type 'KeyboardEvent<Element>': altKey, charCode, ctrlKey, code, and 15 more.",
