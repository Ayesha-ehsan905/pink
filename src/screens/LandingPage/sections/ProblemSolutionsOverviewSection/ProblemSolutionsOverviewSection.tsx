import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const problemsData = [
  {
    icon: "/icon-3.svg",
    title: "Fragmented workflows",
    description:
      "Juggling multiple tools just to manage your leads and clients",
    problemTitle: "Your Current Chaos",
    problemDescription:
      "Managing leads across Google Sheets, Discord, Telegram, and multiple tools is messy, time-consuming, and leads to missed opportunities.",
    tags: ["Sheets", "Discord", "Telegram", "Calendar", "Email", "Looker"],
    metric: "+12 Tools To Manage",
    solutionDescription: "One unified platform for your entire BD process",
    divIcon: "/div.svg",
  },
  {
    icon: "/icon-4.svg",
    title: "Manual Process",
    description: "Tracking everything by hand - time-consuming and error-prone",
    problemTitle: "Your Current Chaos",
    problemDescription:
      "You're constantly updating leads, chasing follow-ups, and building reports — burning hours on work that should be automated.",
    tags: ["Update leads", "Copy Data", "Check Followups", "Send Reports"],
    metric: "03 To 04 Hrs Daily",
    solutionDescription: "AI-powered automation that eliminates manual work",
    divIcon: "/div.svg",
  },
  {
    icon: "/icon.svg",
    title: "No ROI Visibility",
    description:
      "No visibility into what's working and what's costing you conversions",
    problemTitle: "Your Current Chaos",
    problemDescription:
      "You're flying blind on conversions and pipeline value, making it hard to know where to focus.",
    tags: ["Conversion Rate", "Pipeline Worth", "Priority"],
    metric: "Flying Blindly",
    solutionDescription: "Clear analytics and performance insights",
    divIcon: "/div.svg",
  },
  {
    icon: "/icon-1.svg",
    title: "No Time For Real BD",
    description: "Spending more time on admin than building partnerships",
    problemTitle: "Your Current Chaos",
    problemDescription:
      "Admin work eats most of your week, leaving minimal time for high-value BD.",
    tags: ["40 hrs per week"],
    metric: "No Time For What Actually Matters",
    solutionDescription: "Save 15+ hours per week for strategic work",
    divIcon: "/div-1.svg",
  },
  {
    icon: "/icon-2.svg",
    title: "Losing Leads Unnecessarily",
    description: "Good leads falling through due to lack of timely follow-up",
    problemTitle: "Leads You Lost",
    problemDescription:
      "High-value deals go cold without nurturing, quietly draining your revenue.",
    tags: ["Enterprise A $50 k", "Protocol B $ 80 k", "Agency C $ 120 k"],
    metric: "$ 180 K + Lost",
    solutionDescription: "AI keeps leads warm with intelligent nurturing",
    divIcon: "/div-1.svg",
  },
];

const CornerDecoration = ({ position }: { position: string }) => {
  const rotationClass =
    position === "top-right"
      ? ""
      : position === "top-left"
        ? "rotate-180"
        : position === "bottom-left"
          ? "rotate-90"
          : "rotate-90";

  const positionClass =
    position === "top-right"
      ? "top-px left-[707px]"
      : position === "top-left"
        ? "top-px left-px"
        : position === "bottom-left"
          ? "top-[493px] left-px"
          : "top-[493px] left-[708px]";

  return (
    <div
      className={`absolute ${positionClass} w-[19px] h-[19px] flex flex-col gap-1 overflow-hidden ${rotationClass}`}
    >
      <div className="ml-[0.1px] h-1 mt-[0.3px] bg-[#ff2f92] rounded-[0px_18.09px_0px_0px]" />
      <div className="ml-[7.1px] w-5 h-1 bg-[#ff2f92] rounded-[18.09px_0px_0px_0px] rotate-90" />
    </div>
  );
};

export const ProblemSolutionsOverviewSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-8 md:gap-12 p-4 md:p-8 lg:p-[120px] w-full bg-[#0b0b0f]">
      <header className="flex flex-col items-center gap-4 md:gap-6 pb-4 md:pb-8 w-full max-w-[844px] px-4">
        <h2 className="text-3xl md:text-[length:var(--heading-bold40-font-size)] font-heading-bold40 font-[number:var(--heading-bold40-font-weight)] text-white text-center tracking-[var(--heading-bold40-letter-spacing)] leading-tight md:leading-[var(--heading-bold40-line-height)] [font-style:var(--heading-bold40-font-style)]">
          Do These Problems Sounds Familiar ?
        </h2>

        <p className="max-w-[430px] text-sm md:text-[length:var(--body-reg16-font-size)] text-[#b3b3c0] text-center leading-relaxed md:leading-[var(--body-reg16-line-height)] font-body-reg16 font-[number:var(--body-reg16-font-weight)] tracking-[var(--body-reg16-letter-spacing)] [font-style:var(--body-reg16-font-style)]">
          See yourself in these scenarios? Here&#39;s how Pink3 transforms your
          daily struggle.
        </p>
      </header>

      {problemsData.map((problem, index) => (
        <div key={index} className="flex flex-col gap-8 md:gap-20 pb-6 md:pb-10 w-full">
          <Separator className="h-0.5 bg-white/10" />

          <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-10 py-0.5 w-full">
            <div className="flex items-start gap-4 md:gap-6 flex-1 w-full lg:w-auto">
              <img
                className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0"
                alt="Problem icon"
                src={problem.icon}
              />

              <div className="flex flex-col items-start gap-2 md:gap-3 flex-1">
                <h3 className="text-lg md:text-[length:var(--heading-semibold24-font-size)] font-[number:var(--heading-semibold24-font-weight)] text-white leading-tight md:leading-[var(--heading-semibold24-line-height)] font-heading-semibold24 tracking-[var(--heading-semibold24-letter-spacing)] [font-style:var(--heading-semibold24-font-style)]">
                  {problem.title}
                </h3>

                <p className="text-sm md:text-[length:var(--body-reg16-font-size)] text-[#b3b3c0] leading-relaxed md:leading-[var(--body-reg16-line-height)] font-body-reg16 font-[number:var(--body-reg16-font-weight)] tracking-[var(--body-reg16-letter-spacing)] [font-style:var(--body-reg16-font-style)]">
                  {problem.description}
                </p>
              </div>
            </div>

            <div className="relative w-full lg:w-[726.13px] lg:h-[512.11px] overflow-hidden lg:flex-shrink-0">
              <div className="lg:absolute lg:top-0.5 lg:left-0.5 w-full lg:w-[723px] lg:h-[509px] flex items-center lg:border lg:border-solid lg:border-[#8a8a9a4c]">
                <Card className="w-full lg:w-[664px] lg:h-[442px] lg:ml-[29px] rounded-xl overflow-hidden border border-solid border-[#24242c] bg-[linear-gradient(180deg,rgba(132,135,142,0.08)_1%,rgba(94,94,94,0.08)_100%)]">
                  <CardContent className="p-4 md:p-0 flex flex-col">
                    <div className="flex flex-col items-start gap-4 md:gap-[21px] w-full md:w-[626px] md:mx-auto md:mt-5">
                      <div className="flex flex-col items-start justify-center gap-2 md:gap-[7.24px] w-full">
                        <span className="text-xs md:text-[length:var(--button-bold14-font-size)] font-[number:var(--button-bold14-font-weight)] text-[#ff4d4f] leading-[var(--button-bold14-line-height)] font-button-bold14 tracking-[var(--button-bold14-letter-spacing)] [font-style:var(--button-bold14-font-style)]">
                          Problem
                        </span>

                        <Separator className="h-px bg-white/10" />

                        <h4 className="text-base md:text-[length:var(--body-semibold18-font-size)] font-[number:var(--body-semibold18-font-weight)] text-white leading-[var(--body-semibold18-line-height)] font-body-semibold18 tracking-[var(--body-semibold18-letter-spacing)] [font-style:var(--body-semibold18-font-style)]">
                          {problem.problemTitle}
                        </h4>

                        <p className="text-xs md:text-[length:var(--body-reg14-font-size)] text-[#b3b3c0] leading-relaxed md:leading-[var(--body-reg14-line-height)] font-body-reg14 font-[number:var(--body-reg14-font-weight)] tracking-[var(--body-reg14-letter-spacing)] [font-style:var(--body-reg14-font-style)]">
                          {problem.problemDescription}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 md:gap-3 flex-wrap w-full">
                        {problem.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="outline"
                            className="inline-flex items-center justify-center gap-1 md:gap-[3.62px] px-3 md:px-[21.71px] py-1 md:py-[7.24px] bg-[#280000] rounded-[903.74px] border-[0.9px] border-solid border-[#ff4d4f]"
                          >
                            <img
                              className="w-3 h-3 md:w-[12.67px] md:h-[12.67px]"
                              alt="Danger"
                              src="/danger.svg"
                            />
                            <span className="text-[8px] md:text-[length:var(--body-reg10-font-size)] font-body-reg10 font-[number:var(--body-reg10-font-weight)] text-[#ff4d4f] tracking-[var(--body-reg10-letter-spacing)] leading-[var(--body-reg10-line-height)] whitespace-nowrap [font-style:var(--body-reg10-font-style)]">
                              {tag}
                            </span>
                          </Badge>
                        ))}
                      </div>

                      <p className="w-full text-[10px] md:text-[length:var(--label-medi12-font-size)] font-[number:var(--label-medi12-font-weight)] text-[#ffc857] text-center leading-[var(--label-medi12-line-height)] font-label-medi12 tracking-[var(--label-medi12-letter-spacing)] [font-style:var(--label-medi12-font-style)]">
                        {problem.metric}
                      </p>
                    </div>

                    <Separator className="md:ml-[28.4px] w-full md:w-[617px] h-px mt-4 md:mt-[19.7px] bg-white/10" />

                    <div className="flex flex-col items-start gap-2 p-4 md:p-[22px] md:ml-[19.3px] w-full md:w-[626px] mt-4 md:mt-[19.9px] rounded-lg border-l-4 md:border-l-[7.24px] [border-left-style:solid] border-[#ff2f92] bg-[linear-gradient(180deg,rgba(132,135,142,0.08)_1%,rgba(94,94,94,0.08)_100%)]">
                      <span className="text-xs md:text-[length:var(--button-bold14-font-size)] font-[number:var(--button-bold14-font-weight)] text-[#ff2f92] leading-[var(--button-bold14-line-height)] font-button-bold14 tracking-[var(--button-bold14-letter-spacing)] [font-style:var(--button-bold14-font-style)]">
                        Solution
                      </span>

                      <Separator className="h-px bg-white/10 w-full" />

                      <div className="flex flex-col items-start justify-center gap-2 md:gap-[10.86px] md:pl-[10.86px] md:pt-[3.62px] w-full">
                        <div className="flex items-center justify-center gap-2 md:gap-[9.05px] pt-2 md:pt-[7.24px] w-full">
                          <p className="flex-1 font-normal text-transparent text-base md:text-2xl leading-tight md:leading-6 [font-family:'DM_Sans',Helvetica] tracking-[0]">
                            <span className="text-sm md:text-[length:var(--heading-semibold24-font-size)] font-[number:var(--heading-semibold24-font-weight)] text-white leading-[var(--heading-semibold24-line-height)] font-heading-semibold24 [font-style:var(--heading-semibold24-font-style)] tracking-[var(--heading-semibold24-letter-spacing)]">
                              Single Solution Tailored for You -&nbsp;&nbsp;
                            </span>
                            <span className="text-sm md:text-[length:var(--heading-semibold24-font-size)] font-[number:var(--heading-semibold24-font-weight)] text-[#ff2f92] leading-[var(--heading-semibold24-line-height)] font-heading-semibold24 [font-style:var(--heading-semibold24-font-style)] tracking-[var(--heading-semibold24-letter-spacing)]">
                              Pink3
                            </span>
                          </p>
                        </div>

                        <div className="flex items-center gap-2 md:gap-[10.86px] w-full">
                          <img
                            className="flex-[0_0_auto] w-4 h-4 md:w-auto md:h-auto"
                            alt="Checkmark"
                            src={problem.divIcon}
                          />
                          <p className="flex-1 text-sm md:text-[length:var(--body-reg16-font-size)] text-white leading-relaxed md:leading-[var(--body-reg16-line-height)] font-body-reg16 font-[number:var(--body-reg16-font-weight)] tracking-[var(--body-reg16-letter-spacing)] [font-style:var(--body-reg16-font-style)]">
                            {problem.solutionDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="hidden lg:block">
                <CornerDecoration position="top-right" />
                <CornerDecoration position="top-left" />
                <CornerDecoration position="bottom-left" />
                <CornerDecoration position="bottom-right" />
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="flex flex-col items-center justify-center gap-2.5 pt-6 md:pt-8 w-full">
        <Button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#ff2f92] rounded-[999px] hover:bg-[#ff2f92]/90 w-full max-w-[350px]">
          <span className="text-lg md:text-[length:var(--button-bold-24-font-size)] font-button-bold-24 font-[number:var(--button-bold-24-font-weight)] text-white text-center tracking-[var(--button-bold-24-letter-spacing)] leading-[var(--button-bold-24-line-height)] whitespace-nowrap [font-style:var(--button-bold-24-font-style)]">
            Start your 14 Days FreeTrial
          </span>
        </Button>
      </div>
    </section>
  );
};
