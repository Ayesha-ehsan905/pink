import { useState } from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { MoveLeft, MoveRight } from "lucide-react";

type Testimonial = {
  name: string;
  title: string;
  avatar: string;
  before: string;
  after: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    title: "Founder, DeFi Protocol",
    avatar: "/images/avatar1.png",
    before:
      "Before Pink3, tracking ROI and pipeline visibility was nearly impossible",
    after:
      "Now I have crystal clear insights into which leads convert and where to focus",
  },
  {
    name: "Esther Howard",
    title: "CEO, Tech Start",
    avatar: "/images/avatar2.png",
    before:
      "Before Pink3, good leads were falling through the cracks due to manual follow-ups",
    after: "Now AI keeps every lead warm and engaged automatically",
  },
  {
    name: "Jenny Wilson",
    title: "CEO, Marketing Firm",
    avatar: "/images/avatar3.png",
    before:
      "Before Pink3, I was managing leads across multiple spreadsheets and messaging platforms",
    after:
      "Now everything is centralized and automated. I've recovered 15+ hours per week",
  },
  {
    name: "Liam Carter",
    title: "Founder, DeFi Protocol",
    avatar: "/images/avatar1.png",
    before:
      "Before Pink3, tracking ROI and pipeline visibility was nearly impossible",
    after:
      "Now I have crystal clear insights into which leads convert and where to focus",
  },
  {
    name: "Ava Rodriguez",
    title: "CEO, Tech Start",
    avatar: "/images/avatar2.png",
    before:
      "Before Pink3, good leads were falling through the cracks due to manual follow-ups",
    after: "Now AI keeps every lead warm and engaged automatically",
  },
  {
    name: "Noah Patel",
    title: "CEO, Marketing Firm",
    avatar: "/images/avatar3.png",
    before:
      "Before Pink3, I was managing leads across multiple spreadsheets and messaging platforms",
    after:
      "Now everything is centralized and automated. I've recovered 15+ hours per week",
  },
  {
    name: "Olivia Kim",
    title: "Founder, DeFi Protocol",
    avatar: "/images/avatar1.png",
    before:
      "Before Pink3, tracking ROI and pipeline visibility was nearly impossible",
    after:
      "Now I have crystal clear insights into which leads convert and where to focus",
  },
  {
    name: "Mason Lee",
    title: "CEO, Tech Start",
    avatar: "/images/avatar2.png",
    before:
      "Before Pink3, good leads were falling through the cracks due to manual follow-ups",
    after: "Now AI keeps every lead warm and engaged automatically",
  },
  {
    name: "Sophia Turner",
    title: "CEO, Marketing Firm",
    avatar: "/images/avatar3.png",
    before:
      "Before Pink3, I was managing leads across multiple spreadsheets and messaging platforms",
    after:
      "Now everything is centralized and automated. I've recovered 15+ hours per week",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <Card className="flex-1 border-card-border bg-linear-(--card-gradient) rounded-xl">
    <CardContent className="flex flex-col gap-6 md:gap-8 p-4 md:p-5 h-full">
      <div className="flex items-center gap-3">
        <Avatar className="w-12 h-12 border-2 border-pink">
          <AvatarImage
            src={testimonial.avatar}
            alt={testimonial.name}
            className="object-cover"
          />
        </Avatar>

        <div className="flex flex-col flex-1 min-w-0">
          <div className="text-base md:text-[18px] font-semibold text-primary leading-[28px] font-body-semibold truncate">
            {testimonial.name}
          </div>

          <div className="text-sm md:text-base text-secondary leading-[26px] font-body-reg16 truncate">
            {testimonial.title}
          </div>
        </div>
      </div>

      <Separator className="h-0.5 bg-card-border" />

      <div className="flex flex-col gap-2 pt-4 md:pt-5 pb-2 px-4 md:px-5 bg-[#fb2c3614] rounded border-r-4 border-[#ff4d4f]">
        <div className="text-sm md:text-base font-semibold text-[#ff4d4f] leading-[24px]">
          Before
        </div>

        <p className="text-sm md:text-base text-secondary leading-[26px] ">
          {testimonial.before.split("Pink3").map((part, i, arr) =>
            i < arr.length - 1 ? (
              <span key={i}>
                {part}
                <span className="text-pink">Pink3</span>
              </span>
            ) : (
              part
            ),
          )}
        </p>
      </div>

      <div className="flex flex-col gap-2 pt-4 md:pt-5 pb-2 px-4 md:px-5 bg-pink/10 rounded border-l-4 border-pink">
        <div className="text-sm md:text-base font-semibold leading-[24px] text-pink font-heading-bold16">
          After
        </div>

        <p className="text-sm md:text-base text-primary leading-relaxed md:leading-[26px]">
          {testimonial.after}
        </p>
      </div>
    </CardContent>
  </Card>
);

export const UserTestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const VISIBLE_COUNT = 3;
  const maxIndex = Math.max(0, testimonials.length - VISIBLE_COUNT);
  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < maxIndex;

  const visibleTestimonials = testimonials.slice(
    activeIndex,
    activeIndex + VISIBLE_COUNT,
  );

  return (
    <section className="flex flex-col items-center gap-8 md:gap-12 p-4 md:p-8 lg:p-[120px] w-full bg-background">
      <div className="flex flex-col items-center gap-6 md:gap-8 w-full max-w-[844px] px-4">
        <h2 className="text-3xl md:text-[40px] font-bold text-primary text-center leading-tight md:leading-[56px]">
          What Our Users Say
        </h2>

        <p className="max-w-[590px] text-sm md:text-base text-secondary text-center leading-relaxed md:leading-[26px]">
          From solo consultants&nbsp;&nbsp;and innovative projects to growing
          agencies and leading businesses, see how Pink3 helps teams win more
          deals
        </p>
      </div>

      {/* Slider: shows up to three cards, with arrows */}
      <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-8 pt-6 md:pt-8 w-full">
        {visibleTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.name}-${activeIndex + index}`}
            testimonial={testimonial}
          />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-7">
        <button
          type="button"
          onClick={() =>
            setActiveIndex((current) => Math.max(0, current - 1))
          }
          disabled={!canGoPrev}
          className={`flex h-[64px] w-[64px] items-center justify-center rounded-full border border-white text-white transition-colors ${
            !canGoPrev
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-white/5 hover:text-primary"
          }`}
          aria-label="Previous testimonial"
        >
          <MoveLeft className="h-7 w-7 text-white" />
        </button>

        <button
          type="button"
          onClick={() =>
            setActiveIndex((current) => Math.min(maxIndex, current + 1))
          }
          disabled={!canGoNext}
          className={`flex h-[64px] w-[64px] items-center justify-center rounded-full border border-white text-white transition-colors ${
            !canGoNext
              ? "opacity-40 cursor-not-allowed"
              : "bg-white/5 text-primary hover:bg-white/10"
          }`}
          aria-label="Next testimonial"
        >
          <MoveRight className="h-7 w-7  " />
        </button>
      </div>

     
    </section>
  );
};
