import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef, type JSX } from "react";

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

const AnimatedBenefitsVector = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <div ref={ref} className="absolute top-[10px] left-0 w-[1130px] h-[469px]">
      <motion.svg
        viewBox="0 0 1130 469"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <filter
            id="benefits-vector-shadow"
            x="-26.498"
            y="0"
            width="1156"
            height="469"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="24" />
            <feGaussianBlur stdDeviation="12" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.215686 0 0 0 0 0.203922 0 0 0 0 0.662745 0 0 0 0.3 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_344_54091"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_344_54091"
              result="shape"
            />
          </filter>
        </defs>

        <g filter="url(#benefits-vector-shadow)">
          <motion.path
            d="M0.00195312 326.451C52.0609 363.288 173.315 432.751 241.859 415.912C327.54 394.862 348.689 286.456 481.005 261.197C613.322 235.937 710.39 323.82 812.881 196.995C915.373 70.1712 965.263 -12.975 1103 4.91722"
            fill="none"
            stroke="#FF2F92"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={pathVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
        </g>
      </motion.svg>
    </div>
  );
};

export const ProductBenefitsSection = (): JSX.Element => {
  return (
    <section className="containerSection">
      {/* Mobile */}
      <div className="flex flex-col lg:hidden w-full gap-8 px-4">
        <div className="flex flex-col items-start gap-6">
          <h2 className="text-3xl md:text-[40px] font-bold tracking-[-0.01em] leading-[56px]">
            <span className="text-white">That's Why We Have Built </span>
            <span className="text-pink">Pink3</span>
          </h2>

          <p className="text-sm md:text-[length:var(--body-reg16-font-size)] text-[#b3b3c0] leading-relaxed md:leading-[var(--body-reg16-line-height)] font-body-reg16 font-[number:var(--body-reg16-font-weight)] tracking-[var(--body-reg16-letter-spacing)] [font-style:var(--body-reg16-font-style)]">
            A comprehensive solution designed specifically for Web3 BD teams
          </p>

          <Button className="px-5 py-3 bg-pink hover:bg-pink/90 rounded-full font-button-semibold16 font-[number:var(--button-semibold16-font-weight)] text-white text-[length:var(--button-semibold16-font-size)] tracking-[var(--button-semibold16-letter-spacing)] leading-[var(--button-semibold16-line-height)] [font-style:var(--button-semibold16-font-style)]">
            Start Free Trial
          </Button>
        </div>

        {benefitCards.map((card, index) => (
          <Card key={index} className="bg-transparent border-none shadow-none">
            <CardContent className="p-0 relative flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#262636] rounded-full">
                <div className="w-[18px] h-[18px] bg-pink rounded-[8px]" />
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
        <AnimatedBenefitsVector />

        <motion.div
          className="w-full h-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.25,
                delayChildren: 0.4,
              },
            },
          }}
        >
          {benefitCards.map((card, index) => (
            <motion.div
              key={index}
              className={`absolute ${card.position.top} ${card.position.left} w-[279px]`}
              variants={{
                hidden: { opacity: 0, scale: 0.96 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <Card className="bg-transparent border-none shadow-none">
                <CardContent className="p-0 relative">
                  <motion.div
                    className={`absolute ${
                      index === 0 ? "top-0" : index === 1 ? "top-4" : "top-0"
                    }
                       left-[194px] w-[85px] opacity-[0.16] [font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-[#E33E90] text-[182px] tracking-[-3.64px] leading-[204px]`}
                    initial={{  scale: 0.9 }}
                    animate={{  scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 160,
                      damping: 20,
                      delay: 0.2 + index * 0.15,
                    }}
                  >
                    {card.number}
                  </motion.div>
                  <div
                    className={`flex flex-col w-[277px] items-start gap-4 absolute ${
                      index === 0
                        ? "top-[104px]"
                        : index === 1
                          ? "top-[121px]"
                          : "top-[105px]"
                    } left-px`}
                  >
                    <h3 className="font-bold text-white text-[16px] leading-[24px] tracking-[-0.01em]">
                      {card.title}
                    </h3>

                    <p className="self-stretch text-secondary text-sm md:text-[16px] leading-[24px]">
                      {card.description}
                    </p>
                  </div>

                  <motion.div
                    className={`absolute ${
                      index === 0
                        ? "top-0.5"
                        : index === 1
                          ? "top-px"
                          : "top-[7px]"
                    } left-px w-16 h-16 flex items-center justify-center bg-[#262636] rounded-full`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 18,
                      delay: 0.25 + index * 0.15,
                    }}
                  >
                    <div className="w-[22.87px] h-[23px] bg-pink rounded-[10px]" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="absolute top-0 left-px w-[406px] overflow-hidden">
          <div className="flex flex-col items-start gap-8">
            <div className="flex flex-col items-start gap-8 w-full">
              <h2 className="w-[405px] text-[40px] font-bold tracking-[-0.01em] leading-[56px]">
                <span className="text-white font-heading-bold40 [font-style:var(--heading-bold40-font-style)] font-[number:var(--heading-bold40-font-weight)] tracking-[var(--heading-bold40-letter-spacing)] leading-[var(--heading-bold40-line-height)] text-[length:var(--heading-bold40-font-size)]">
                  That's Why We Have Built{" "}
                </span>
                <span className="text-pink font-heading-bold40 [font-style:var(--heading-bold40-font-style)] font-[number:var(--heading-bold40-font-weight)] tracking-[var(--heading-bold40-letter-spacing)] leading-[var(--heading-bold40-line-height)] text-[length:var(--heading-bold40-font-size)]">
                  Pink3
                </span>
              </h2>

              <p className="self-stretch text-secondary text-sm md:text-[16px] leading-[24px]">
                A comprehensive solution designed specifically for Web3 BD teams
              </p>
            </div>

            <Button
              variant="ctaPink"
              size="ctaSm"
              className="group flex w-fit items-center justify-center gap-2"
            >
              <span className="font-semibold text-base leading-[24px] text-center whitespace-nowrap ">
                Start Free Trial
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
