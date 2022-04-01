import React, {useState} from 'react';
import Collapsible from '../UI/Collapsible';
import Icon from '../UI/Icon';

const Faq = ({question, answer, id}: {question:string, answer: string, id:number}) => {
  const [open, setOpen] = useState(false);
  const chevronDisplayClasses = open ? 'transform rotate-180' : '';
  return (
    <>
      <Collapsible
        collapsibleId={`faq-${id}-`}
        trigger={
          <div className="bg-primary-400 dark:bg-primary-dark-400 rounded flex justify-between">
            <div>
              <h3 className="font-bold text-lg px-6 py-5">{question}</h3>
            </div>
            <div className="flex items-center mr-7">
              <Icon name="chevron-down" size="medium" color="black" className={`${chevronDisplayClasses}`} />
            </div>
          </div>
        }
        onOpening={() => setOpen(true)}
        onClosing={() => setOpen(false)}
        open={open}
        ariaLabel={`FAQ Collapsible for ${question}`}
      >
        <div className="bg-primary-400 dark:bg-primary-dark-400 rounded">
          <p className="text-sm font-normal px-6 py-5">{answer}</p>
        </div>
      </Collapsible>
    </>
  );
};

const Faqs = ({faqs, className}: { faqs: {
    id: number;
    question: string;
    answer: string;
  }[], className?: string}) =>{
  if (!faqs || !faqs.length) {
    return null;
  }
  return (
    <div className={className || ''}>
      <h2 className="text-2xl font-black mb-6">Frequently Asked Questions</h2>
      {faqs.map((faq) => {
        const {question, answer, id} = faq;
        return (
          <div className="my-4" key={id}>
            <Faq question={question} answer={answer} id={id} />
          </div>
        );
      })}
    </div>
  );
};
export default Faqs;
