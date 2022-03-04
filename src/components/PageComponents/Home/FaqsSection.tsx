import React from 'react';
import Faqs from '../../Components/Faqs';

const FaqsSection = () => {
  return (
    <section id='faqs-section' className='px-12 md:px-36 py-8 bg-white dark:bg-primary-dark-500'>
      <Faqs faqs={[{
        id: 1,
        question: 'Is programming easy?',
        answer: 'No',
      }, {
        id: 2,
        question: 'How long did this take?',
        answer: 'Too Long',
      },
      {
        id: 3,
        question: 'How are you feeling today?',
        answer: 'Been coding for 12 hours... i am tired',
      }]}
      className='text-black dark:text-white'
      />
    </section>
  );
};
export default FaqsSection;
