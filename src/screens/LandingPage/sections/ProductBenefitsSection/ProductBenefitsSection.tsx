import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const benefitCards = [
  {
    number: "1",
    title: "No.1 BD CRM For Web3 Business",
    description:
      "Pink3 centralizes your leads, guides your sales process, and turns client data into smarter, targeted content.",
    position: {
      top: "top-[370px]",
      left: "left-[93px]",
    },
  },
  {
    number: "2",
    title: "AI Automated Workflow & Tracking",
    description:
      "Pink3's AI removes manual admin, reduces errors, and acts like a dedicated PA—so your team focuses on closing and executing deals, not spreadsheets.",
    position: {
      top: "top-[232px]",
      left: "left-[523px]",
    },
  },
  {
    number: "3",
    title: "Attribution & Performance Analysis",
    description:
      "Pink3 gives you clear follow-up visibility, helps prioritize the right leads, and enables data-backed decisions instead of guesswork.",
    position: {
      top: "top-[13px]",
      left: "left-[913px]",
    },
  },
];

export const ProductBenefitsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-8 md:gap-16 p-4 md:p-8 lg:p-[120px] w-full bg-[#0b0b0f]">
      <div className="flex flex-col lg:hidden w-full gap-8 px-4">
        <div className="flex flex-col items-start gap-6">
          <h2 className="text-3xl md:text-[length:var(--heading-bold40-font-size)] font-heading-bold40 font-[number:var(--heading-bold40-font-weight)] tracking-[var(--heading-bold40-letter-spacing)] leading-tight md:leading-[var(--heading-bold40-line-height)] [font-style:var(--heading-bold40-font-style)]">
            <span className="text-white">That's Why We Have Built </span>
            <span className="text-[#ff2f92]">Pink3</span>
          </h2>

          <p className="text-sm md:text-[length:var(--body-reg16-font-size)] text-[#b3b3c0] leading-relaxed md:leading-[var(--body-reg16-line-height)] font-body-reg16 font-[number:var(--body-reg16-font-weight)] tracking-[var(--body-reg16-letter-spacing)] [font-style:var(--body-reg16-font-style)]">
            A comprehensive solution designed specifically for Web3 BD teams
          </p>

          <Button className="px-5 py-3 bg-[#ff2f92] hover:bg-[#ff2f92]/90 rounded-full font-button-semibold16 font-[number:var(--button-semibold16-font-weight)] text-white text-[length:var(--button-semibold16-font-size)] tracking-[var(--button-semibold16-letter-spacing)] leading-[var(--button-semibold16-line-height)] [font-style:var(--button-semibold16-font-style)]">
            Start Free Trial
          </Button>
        </div>

        {benefitCards.map((card, index) => (
          <Card key={index} className="bg-transparent border-none shadow-none">
            <CardContent className="p-0 relative flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#262636] rounded-full">
                <div className="w-[18px] h-[18px] bg-[#ff2f92] rounded-[8px]" />
              </div>

              <div className="flex flex-col items-start gap-2 flex-1">
                <div className="text-5xl font-bold text-[#e33e90] opacity-[0.16] [font-family:'Gilroy-Bold-Bold',Helvetica] tracking-[-2px] leading-none">
                  {card.number}
                </div>

                <h3 className="text-sm md:text-[length:var(--heading-bold16-font-size)] font-[number:var(--heading-bold16-font-weight)] text-white leading-tight md:leading-[var(--heading-bold16-line-height)] font-heading-bold16 tracking-[var(--heading-bold16-letter-spacing)] [font-style:var(--heading-bold16-font-style)]">
                  {card.title}
                </h3>

                <p className="text-sm md:text-[length:var(--body-reg16-font-size)] text-[#b3b3c0] leading-relaxed md:leading-[var(--body-reg16-line-height)] font-body-reg16 font-[number:var(--body-reg16-font-weight)] tracking-[var(--body-reg16-letter-spacing)] [font-style:var(--body-reg16-font-style)]">
                  {card.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="hidden lg:block relative w-full max-w-[1200px] h-[658px] overflow-hidden">
        <img
          className="absolute top-11 left-0 w-[1130px] h-[469px]"
          alt="Vector"
          src="/vector-335.svg"
        />

        {benefitCards.map((card, index) => (
          <Card
            key={index}
            className={`absolute ${card.position.top} ${card.position.left} w-[279px] bg-transparent border-none shadow-none`}
          >
            <CardContent className="p-0 relative">
              <div
                className={`absolute ${index === 0 ? "top-0" : index === 1 ? "top-4" : "top-0"} left-[194px] w-[85px] opacity-[0.16] [font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-[#e33e90] text-[182px] tracking-[-3.64px] leading-[204px]`}
              >
                {card.number}
              </div>

              <div
                className={`flex flex-col w-[277px] items-start gap-4 absolute ${index === 0 ? "top-[104px]" : index === 1 ? "top-[121px]" : "top-[105px]"} left-px`}
              >
                <h3 className="mt-[-1.00px] font-[number:var(--heading-bold16-font-weight)] text-white text-[length:var(--heading-bold16-font-size)] leading-[var(--heading-bold16-line-height)] font-heading-bold16 tracking-[var(--heading-bold16-letter-spacing)] [font-style:var(--heading-bold16-font-style)]">
                  {card.title}
                </h3>

                <p className="self-stretch text-[#b3b3c0] text-[length:var(--body-reg16-font-size)] leading-[var(--body-reg16-line-height)] font-body-reg16 font-[number:var(--body-reg16-font-weight)] tracking-[var(--body-reg16-letter-spacing)] [font-style:var(--body-reg16-font-style)]">
                  {card.description}
                </p>
              </div>

              <div
                className={`absolute ${index === 0 ? "top-0.5" : index === 1 ? "top-px" : "top-[7px]"} left-px w-16 h-16 flex items-center justify-center bg-[#262636] rounded-full`}
              >
                <div className="w-[22.87px] h-[23px] bg-[#ff2f92] rounded-[10px]" />
              </div>
            </CardContent>
          </Card>
        ))}

        <div className="absolute top-0 left-px w-[406px] overflow-hidden">
          <div className="flex flex-col items-start gap-8">
            <div className="flex flex-col items-start gap-8 w-full">
              <h2 className="w-[405px] mt-[-1.00px] font-heading-bold40 font-[number:var(--heading-bold40-font-weight)] text-[length:var(--heading-bold40-font-size)] tracking-[var(--heading-bold40-letter-spacing)] leading-[var(--heading-bold40-line-height)] [font-style:var(--heading-bold40-font-style)]">
                <span className="text-white font-heading-bold40 [font-style:var(--heading-bold40-font-style)] font-[number:var(--heading-bold40-font-weight)] tracking-[var(--heading-bold40-letter-spacing)] leading-[var(--heading-bold40-line-height)] text-[length:var(--heading-bold40-font-size)]">
                  That's Why We Have Built{" "}
                </span>
                <span className="text-[#ff2f92] font-heading-bold40 [font-style:var(--heading-bold40-font-style)] font-[number:var(--heading-bold40-font-weight)] tracking-[var(--heading-bold40-letter-spacing)] leading-[var(--heading-bold40-line-height)] text-[length:var(--heading-bold40-font-size)]">
                  Pink3
                </span>
              </h2>

              <p className="self-stretch text-[#b3b3c0] text-[length:var(--body-reg16-font-size)] leading-[var(--body-reg16-line-height)] font-body-reg16 font-[number:var(--body-reg16-font-weight)] tracking-[var(--body-reg16-letter-spacing)] [font-style:var(--body-reg16-font-style)]">
                A comprehensive solution designed specifically for Web3 BD teams
              </p>
            </div>

            <Button className="px-5 py-3 bg-[#ff2f92] hover:bg-[#ff2f92]/90 rounded-full font-button-semibold16 font-[number:var(--button-semibold16-font-weight)] text-white text-[length:var(--button-semibold16-font-size)] tracking-[var(--button-semibold16-letter-spacing)] leading-[var(--button-semibold16-line-height)] [font-style:var(--button-semibold16-font-style)]">
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
