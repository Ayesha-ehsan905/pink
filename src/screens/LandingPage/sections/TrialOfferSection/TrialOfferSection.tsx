import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const TrialOfferSection = () => {
  return (
    <section
      id="why-pink3"
      className="flex flex-col items-center gap-8 md:gap-12 containerSection"
    >
      <Card className="relative w-full  bg-pink rounded-2xl overflow-hidden border-0">
        <CardContent className="relative min-h-[300px] md:min-h-[412px] p-8 md:p-0">
          <div className="flex flex-col items-start gap-6 md:gap-10 relative md:absolute md:top-1/2 md:-translate-y-1/2 md:left-[100px] w-full md:w-[521px] z-10">
            <div className="flex flex-col items-start gap-3 md:gap-4 w-full">
              <h2 className="text-sm md:text-[32px] font-bold text-white tracking-[-0.002em] leading-[40px]">
                Ready to Transform Your BD Process?
              </h2>

              <p className="text-sm md:text-[18px] font-medium text-white tracking-[-0.002em] leading-[28px]">
                Pink3 brings leads, conversations, documents, delivery, and
                feedback into a single AI-powered workflow. Move faster, stay
                organised, and scale without breaking your process.
              </p>
            </div>

            <Button
              size="ctaLg"
              className="bg-white hover:bg-white/90 rounded-full px-6 py-3 h-auto w-full md:w-auto"
            >
              <span className="text-lg md:text-[20px] font-bold text-pink tracking-[-0.01em] leading-[28px]">
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
