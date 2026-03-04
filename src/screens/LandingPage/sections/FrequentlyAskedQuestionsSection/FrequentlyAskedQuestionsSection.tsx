import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

const faqData = [
  {
    question: "How does the 14-day free trial work?",
    answer:
      "Simply enter your name and email, and you'll get instant access to Pink3 for 14 days. No credit card required. You can explore all features and see how Pink3 transforms your BD workflow.",
  },
  {
    question: "Do I need to provide credit card details to start my trial?",
    answer: "",
  },
  {
    question: "What's the difference between the AI and non-AI pricing?",
    answer: "",
  },
  {
    question: "Can Pink3 integrate with my existing tools?",
    answer: "",
  },
  {
    question: "Is Pink3 suitable for solo BD professionals or just teams?",
    answer: "",
  },
  {
    question: "How quickly can I get started?",
    answer: "",
  },
  {
    question: "What happens to my data if I don't continue after the trial?",
    answer: "",
  },
  {
    question: "Do you offer support during the trial?",
    answer: "",
  },
  {
    question: "What is the Ambassadors Program?",
    answer: "",
  },
  {
    question: "Can I give feedback or suggest features?",
    answer: "",
  },
];

export const FrequentlyAskedQuestionsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-8 md:gap-12 px-4 md:px-8 lg:px-[180px] py-12 md:py-[120px] w-full bg-[#0b0b0f]">
      <div className="flex flex-col items-center gap-4 md:gap-6 w-full max-w-[844px]">
        <h2 className="text-3xl md:text-[length:var(--heading-bold40-font-size)] font-heading-bold40 font-[number:var(--heading-bold40-font-weight)] text-white text-center tracking-[var(--heading-bold40-letter-spacing)] leading-tight md:leading-[var(--heading-bold40-line-height)] [font-style:var(--heading-bold40-font-style)]">
          Frequently Asked Questions
        </h2>

        <p className="max-w-[634px] text-sm md:text-[length:var(--body-reg16-font-size)] text-[#b3b3c0] text-center leading-relaxed md:leading-[var(--body-reg16-line-height)] font-body-reg16 font-[number:var(--body-reg16-font-weight)] tracking-[var(--body-reg16-letter-spacing)] [font-style:var(--body-reg16-font-style)]">
          Everything you need to know about Pink3
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        defaultValue="item-0"
        className="w-full"
      >
        {faqData.map((faq, index) => (
          <AccordionItem
            key={`faq-${index}`}
            value={`item-${index}`}
            className="border-b border-[#24242c]"
          >
            <AccordionTrigger className="px-0 py-3 md:py-4 hover:no-underline [&[data-state=open]>svg]:rotate-45">
              <span className="flex items-center text-left text-base md:text-[length:var(--heading-semibold24-font-size)] font-heading-semibold24 font-[number:var(--heading-semibold24-font-weight)] text-white tracking-[var(--heading-semibold24-letter-spacing)] leading-tight md:leading-[var(--heading-semibold24-line-height)] [font-style:var(--heading-semibold24-font-style)]">
                {faq.question}
              </span>
            </AccordionTrigger>
            {faq.answer && (
              <AccordionContent className="px-0 md:px-5 pb-4 md:pb-6 pt-0">
                <p className="text-sm md:text-[length:var(--body-reg16-font-size)] font-body-reg16 font-[number:var(--body-reg16-font-weight)] text-[#b3b3c0] tracking-[var(--body-reg16-letter-spacing)] leading-relaxed md:leading-[var(--body-reg16-line-height)] [font-style:var(--body-reg16-font-style)]">
                  {faq.answer}
                </p>
              </AccordionContent>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
