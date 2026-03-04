import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const testimonials = [
  {
    name: "Sarah Chen",
    title: "Founder, DeFi Protocol",
    avatar: "/container.png",
    before:
      "Before Pink3, tracking ROI and pipeline visibility was nearly impossible",
    after:
      "Now I have crystal clear insights into which leads convert and where to focus",
  },
  {
    name: "Esther Howard",
    title: "CEO, Tech Start",
    avatar: "/ellipse-5769.png",
    before:
      "Before Pink3, good leads were falling through the cracks due to manual follow-ups",
    after: "Now AI keeps every lead warm and engaged automatically",
  },
  {
    name: "Jenny Wilson",
    title: "CEO, Marketing Firm",
    avatar: "/ellipse-5769-1.png",
    before:
      "Before Pink3, I was managing leads across multiple spreadsheets and messaging platforms",
    after:
      "Now everything is centralized and automated. I've recovered 15+ hours per week",
  },
];

export const UserTestimonialsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-8 md:gap-12 p-4 md:p-8 lg:p-[120px] w-full bg-[#0b0b0f]">
      <div className="flex flex-col items-center gap-6 md:gap-8 w-full max-w-[844px] px-4">
        <h2 className="text-3xl md:text-[length:var(--heading-bold40-font-size)] font-heading-bold40 font-[number:var(--heading-bold40-font-weight)] text-white text-center tracking-[var(--heading-bold40-letter-spacing)] leading-tight md:leading-[var(--heading-bold40-line-height)] [font-style:var(--heading-bold40-font-style)]">
          What Our Users Say
        </h2>

        <p className="max-w-[590px] text-sm md:text-[length:var(--body-reg16-font-size)] text-[#b3b3c0] text-center leading-relaxed md:leading-[var(--body-reg16-line-height)] font-body-reg16 font-[number:var(--body-reg16-font-weight)] tracking-[var(--body-reg16-letter-spacing)] [font-style:var(--body-reg16-font-style)]">
          From solo consultants&nbsp;&nbsp;and innovative projects to growing
          agencies and leading businesses, see how Pink3 helps teams win more
          deals
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-8 pt-6 md:pt-8 w-full">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="flex-1 border-[#24242c] bg-[linear-gradient(180deg,rgba(132,135,142,0.08)_31%,rgba(37,38,40,0.08)_72%)] rounded-xl"
          >
            <CardContent className="flex flex-col gap-6 md:gap-8 p-4 md:p-5 h-full">
              <div className="flex items-center gap-3">
                <Avatar className="w-[52px] h-[52px] border-2 border-[#ff2f92] flex-shrink-0">
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="object-cover"
                  />
                </Avatar>

                <div className="flex flex-col flex-1 min-w-0">
                  <div className="text-base md:text-[length:var(--body-semibold18-font-size)] font-[number:var(--body-semibold18-font-weight)] text-white leading-[var(--body-semibold18-line-height)] font-body-semibold18 tracking-[var(--body-semibold18-letter-spacing)] [font-style:var(--body-semibold18-font-style)] truncate">
                    {testimonial.name}
                  </div>

                  <div className="text-sm md:text-[length:var(--body-reg16-font-size)] text-[#b3b3c0] leading-[var(--body-reg16-line-height)] font-body-reg16 font-[number:var(--body-reg16-font-weight)] tracking-[var(--body-reg16-letter-spacing)] [font-style:var(--body-reg16-font-style)] truncate">
                    {testimonial.title}
                  </div>
                </div>
              </div>

              <Separator className="h-0.5 bg-[#24242c]" />

              <div className="flex flex-col gap-2 pt-4 md:pt-5 pb-2 px-4 md:px-5 bg-[#fb2c3614] rounded border-r-4 border-[#ff4d4f]">
                <div className="text-sm md:text-[length:var(--heading-bold16-font-size)] font-[number:var(--heading-bold16-font-weight)] text-[#ff4d4f] leading-[var(--heading-bold16-line-height)] font-heading-bold16 tracking-[var(--heading-bold16-letter-spacing)] [font-style:var(--heading-bold16-font-style)]">
                  Before
                </div>

                <p className="text-sm md:text-[length:var(--body-reg16-font-size)] text-[#b3b3c0] leading-relaxed md:leading-[var(--body-reg16-line-height)] font-body-reg16 font-[number:var(--body-reg16-font-weight)] tracking-[var(--body-reg16-letter-spacing)] [font-style:var(--body-reg16-font-style)]">
                  {testimonial.before.split("Pink3").map((part, i, arr) =>
                    i < arr.length - 1 ? (
                      <span key={i}>
                        {part}
                        <span className="text-[#ff2f92]">Pink3</span>
                      </span>
                    ) : (
                      part
                    ),
                  )}
                </p>
              </div>

              <div className="flex flex-col gap-2 pt-4 md:pt-5 pb-2 px-4 md:px-5 bg-[#ff2f9214] rounded border-l-4 border-[#ff2f92]">
                <div className="text-sm md:text-[length:var(--heading-bold16-font-size)] font-[number:var(--heading-bold16-font-weight)] text-[#ff2f92] leading-[var(--heading-bold16-line-height)] font-heading-bold16 tracking-[var(--heading-bold16-letter-spacing)] [font-style:var(--heading-bold16-font-style)]">
                  After
                </div>

                <p className="text-sm md:text-[length:var(--body-reg16-font-size)] text-white leading-relaxed md:leading-[var(--body-reg16-line-height)] font-body-reg16 font-[number:var(--body-reg16-font-weight)] tracking-[var(--body-reg16-letter-spacing)] [font-style:var(--body-reg16-font-style)]">
                  {testimonial.after}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <img className="w-full max-w-[800px] px-4" alt="Company logos" src="/icons.svg" />
    </section>
  );
};
