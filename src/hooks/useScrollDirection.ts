import {useState, useEffect} from 'react';

const SCROLL_UP = 'up';
const SCROLL_DOWN = 'down';

/*
  initialDirection - we use this if we have a case where we want to render an item on logic based on a particular direction,
  but the scroll direction isn't that direction yet. ex: StickyContentTabs

  thresholdPixels - are just the sensitivity of the scroll direction hook... i.e. if the threshold is 10,
  a 10 pixel swipe would be needed to trigger the hook to change scroll direction
 */
export default function useScrollDirection({initialDirection = SCROLL_DOWN, thresholdPixels = 10} = {}) {
  const [scrollDirection, setScrollDirection] = useState<string>(initialDirection);

  useEffect(() => {
    // we do this b/c scrolling is handled on the cyb-router class @TODO change this
    const el = document.querySelector('.cyb-router');
    const elementExists = el && el.scrollTop;
    let lastScrollY = elementExists ? el.scrollTop - 1 : 0;
    const updateScrollDirection = () => {
      const scrollY = elementExists ? el.scrollTop : 0;
      const direction = scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP;
      if (direction !== scrollDirection && (scrollY - lastScrollY > thresholdPixels || scrollY - lastScrollY < -thresholdPixels)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    el?.addEventListener('scroll', updateScrollDirection); // add event listener
    return () => {
      el?.removeEventListener('scroll', updateScrollDirection); // clean up
    };
  }, [scrollDirection]);
  return scrollDirection;
}
