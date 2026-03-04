import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const TrialOfferSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-8 md:gap-12 py-12 md:py-[120px] px-4 md:px-8 lg:px-[120px] w-full bg-[#0b0b0f]">
      <Card className="relative w-full max-w-[1280px] bg-[#ff2f92] rounded-2xl overflow-hidden border-0">
        <CardContent className="relative min-h-[300px] md:min-h-[412px] p-8 md:p-0">
          <div className="flex flex-col items-start gap-6 md:gap-10 relative md:absolute md:top-1/2 md:-translate-y-1/2 md:left-[100px] w-full md:w-[521px] z-10">
            <div className="flex flex-col items-start gap-3 md:gap-4 w-full">
              <h2 className="text-2xl md:text-[length:var(--heading-bold32-font-size)] font-heading-bold32 font-[number:var(--heading-bold32-font-weight)] text-white tracking-[var(--heading-bold32-letter-spacing)] leading-tight md:leading-[var(--heading-bold32-line-height)] [font-style:var(--heading-bold32-font-style)]">
                Ready to Transform Your BD Process?
              </h2>

              <p className="text-sm md:text-[length:var(--body-medi18-font-size)] font-body-medi18 font-[number:var(--body-medi18-font-weight)] text-white tracking-[var(--body-medi18-letter-spacing)] leading-relaxed md:leading-[var(--body-medi18-line-height)] [font-style:var(--body-medi18-font-style)]">
                Pink3 brings leads, conversations, documents, delivery, and
                feedback into a single AI-powered workflow. Move faster, stay
                organised, and scale without breaking your process.
              </p>
            </div>

            <Button className="bg-white hover:bg-white/90 rounded-[999px] px-6 py-3 h-auto w-full md:w-auto">
              <span className="text-lg md:text-[length:var(--button-bold-24-font-size)] font-button-bold-24 font-[number:var(--button-bold-24-font-weight)] text-[#ff2f92] tracking-[var(--button-bold-24-letter-spacing)] leading-[var(--button-bold-24-line-height)] [font-style:var(--button-bold-24-font-style)]">
                Start your 14 Days FreeTrial
              </span>
            </Button>
          </div>

          <div className="hidden md:block absolute -top-52 left-[735px] w-[948px] h-[828px] pointer-events-none">
            <div className="absolute top-0 left-[calc(50%_-_474px)] w-[828px] h-[828px] bg-[#ffffff26] rounded-[414px]" />
            <div className="absolute top-0 left-[calc(50%_-_354px)] w-[828px] h-[828px] bg-[#ffffff26] rounded-[414px]" />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
