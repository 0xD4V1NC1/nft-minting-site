import React from 'react';

// we only accept rightToLeft as direction b/c by default we will go left to right.
const Marquee = ({reverse, marqueeText}:{reverse?: boolean, marqueeText: string}) => {
  let animationClass = 'motion-safe:animate-marquee';
  if (reverse) {
    animationClass = 'motion-safe:animate-marquee-reverse';
  }
  return (
    <div className="font-fatfrank text-outline-marquee bg-primary-400 py-2 text-3xl text-primary-500">
      <div id='marquee-container' className="flex flex-row overflow-x-hidden relative w-full">
        <div id='marquee' className={`flex flex-0-0-auto flex-row items-center min-w-full ${animationClass}`} >
          {[...Array(10)].map((e, i) => <span key={i}>{marqueeText}&nbsp;</span>)}
        </div>
        <div id='marquee-2' className={`flex flex-0-0-auto flex-row items-center min-w-full ${animationClass}-2`} >
          {[...Array(10)].map((e, i) => <span key={i}>{marqueeText}&nbsp;</span>)}
        </div>
      </div>
    </div>
  );
};
// .hover\:YOOOOOO:hover{background-size:400% 200%;background-image:linear-gradient(90deg,#32fe31,#33f7f5,#4779ed,#9263d2,#ff0b00,#9263d2,#4779ed,#33f7f5);-webkit-animation:rainbow 5s linear infinite;animation:rainbow 5s linear infinite}
export default Marquee;
