import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FaqItem {
  question: string;
  answer: string;
  id?: string;
}

interface FaqProps {
  items: FaqItem[];
}

export function Faq({ items }: FaqProps) {
  return (
    <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
      {items.map((item, index) => {
        const value = item.id ?? `faq-${index}`;
        return (
          <AccordionItem
            key={value}
            value={value}
            id={item.id}
            data-testid={`faq-item-${value}`}
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-foreground py-5">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-5">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
