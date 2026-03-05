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
    answer:
      "No credit card is required to start your 14-day free trial. When the trial ends, you can choose a plan and add billing details if you want to continue.",
  },
  {
    question: "What's the difference between the AI and non-AI pricing?",
    answer:
      "AI plans include automation features like smart follow-ups, risk detection, and deal recommendations. Non-AI plans focus on core CRM workflows without AI-driven suggestions.",
  },
  {
    question: "Can Pink3 integrate with my existing tools?",
    answer:
      "Yes. Pink3 connects with tools like Slack, Discord, email, and popular automation platforms so your BD activity stays in sync across your stack.",
  },
  {
    question: "Is Pink3 suitable for solo BD professionals or just teams?",
    answer:
      "Pink3 is designed for both. The Solopreneur plan is ideal for founder-led or solo BD, while Growth and Enterprise tiers support larger teams and complex workflows.",
  },
  {
    question: "How quickly can I get started?",
    answer:
      "Most teams are up and running in under an hour. You can import contacts, configure your pipeline, and start logging deals right away.",
  },
  {
    question: "What happens to my data if I don't continue after the trial?",
    answer:
      "If you decide not to continue, your workspace will be paused. We retain your data for a limited period so you can come back or request an export.",
  },
  {
    question: "Do you offer support during the trial?",
    answer:
      "Yes. During your trial you’ll have access to product support and onboarding resources so you can get the most out of Pink3.",
  },
];

export const FrequentlyAskedQuestionsSection = () => {
  return (
    <section className="flex flex-col items-center gap-8 md:gap-12 px-4 containerSection">
      <div className="flex flex-col items-center gap-4 md:gap-6 w-full max-w-[844px]">
        <h2 className="text-3xl md:text-[40px] font-bold text-white text-center tracking-[-0.002em] leading-[48px]">
          Frequently Asked Questions
        </h2>

        <p className="max-w-[634px] text-sm md:text-[16px] text-secondary text-center leading-relaxed md:leading-[24px] tracking-[-0.002em]">
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
            className="border-b border-card-border"
          >
            <AccordionTrigger className="px-0 py-3 md:py-4">
              <span className="flex-1 text-left text-base md:text-[24px] font-semibold text-white tracking-[-0.002em] leading-[32px]">
                {faq.question}
              </span>
            </AccordionTrigger>

            <AccordionContent className="px-0 md:px-5 pb-4 md:pb-6 pt-2">
              <p className="mt-1 text-sm md:text-base font-normal text-secondary tracking-[-0.002em] leading-relaxed md:leading-[24px]">
                {faq.answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};