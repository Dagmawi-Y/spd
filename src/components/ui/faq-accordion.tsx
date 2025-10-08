import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion';

interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: AccordionItemData[];
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  className = '',
}) => {
  return (
    <Accordion 
      type="multiple" 
      className={className}
    >
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger className="text-left">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};