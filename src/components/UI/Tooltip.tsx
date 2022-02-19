import React, {useEffect, useState, useRef} from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import TooltipInterface from '../../interfaces/TooltipInterface';
/**
Tippy needs the ref of the children it is attaching to. An easy way around that is to just wrap the children in an element (span)
To get around this, you need to forward the children refs into tippy, which would need to be done always and everywhere used
To get around ref forwarding, a hidden sibling is placed, the ref is found, then the ref is changed to the sibling (the actual child) and passed to Tippy
For keyboard focus, the element needs a tabindex (which span doesn't have), so we need to add tabindex as well
When using keyboard, if the child element is already interactive, this results in a tab to show the tooltip, then another to highlight the interactive element
So if the child is already interactive, we should omitTabIndex so it doesn't double focus for keyboard users
 */
const Tooltip = ({theme, arrow, content, triggerContent, children, position, disabled, trigger, omitTabIndex, interactive = false, maxWidth, useOnShow, padded, delay}: TooltipInterface) => {
  const spanRef = useRef<any>();
  const [childRef, setChildRef] = useState(null);
  useEffect(() => {
    if (spanRef.current) {
      setChildRef(spanRef.current.previousElementSibling);
    }
    return () => setChildRef(null);
  }, []);
  let tipTrigger = trigger || 'mouseenter focus';
  if (disabled) {
    tipTrigger = 'manual';
  }
  const omitContentTabIndex = !!omitTabIndex || (!content);
  const childContent = triggerContent || children;
  // useOnShowProp allows tippy to display for three seconds then hide itself
  const useOnShowProp = {
    onShow: (instance: any) => {
      setTimeout(() => {
        instance.hide();
      }, 3000);
    },
  };
  const onShowProp = useOnShow ? {...useOnShowProp} : null;
  const tabIndex = omitContentTabIndex ? {} : {tabIndex: 0};
  return (
    <>
      <style>{`.tippy-box {border-radius: 2px;} ${padded ? '.tippy-content {padding: 1rem}' : ''}`}</style>
      {omitContentTabIndex ? childContent : <span {...tabIndex}>{childContent}</span>}
      {childRef ? (
        <Tippy
          theme={theme || 'light'}
          arrow={arrow || true}
          content={content}
          placement={position || 'top'}
          trigger={tipTrigger}
          reference={childRef}
          interactive={interactive}
          // 350 is the default tippy maxWidth
          maxWidth={maxWidth || 350}
          delay={delay}
          {...onShowProp}
        />
      ) : (
        <span ref={spanRef} className="hidden" />
      )}
    </>
  );
};
export default Tooltip;
