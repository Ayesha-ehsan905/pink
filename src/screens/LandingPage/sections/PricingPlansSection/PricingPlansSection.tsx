import {
  CircleCheck as CheckCircle2Icon,
  Circle as XCircleIcon,
} from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const pricingPlans = [
  {
    name: "Solopreneur",
    description: "Built for solo BD operators and founder-led sales",
    price: "£49",
    period: "/ month",
    annualPrice: "or £ 39/month, billed annually",
    tagline: "All core CRM features to manage your sales & BD workflow",
    features: [
      { text: "Single, customizable pipeline", included: true },
      { text: "Lightweight deal + contact management", included: true },
      { text: "Email sync to centralise BD activity", included: true },
      { text: "Basic deal health scoring", included: true },
      { text: "Automated follow-up reminders", included: true },
      { text: "Activity timelines and task tracking", included: true },
      { text: "Wallet-to-contact mapping", included: true },
      { text: "Token holdings visibility", included: true },
      { text: "Multi-chain address support", included: true },
      { text: "Discord & Telegram handles", included: true },
      { text: "AI-driven stall & risk detection", included: false },
      { text: "Deal velocity benchmarks", included: false },
      { text: "Multi-pipeline support", included: false },
      { text: "Team collaboration", included: false },
    ],
    buttonText: "Start your 14 Days FreeTrial",
    buttonVariant: "outline" as const,
    highlighted: false,
    borderClass: "border-[#24242c]",
  },
  {
    name: "Growth",
    description:
      "For BD teams managing multiple high-value partnership motions",
    price: "£149",
    period: "/ month",
    annualPrice: "or £ 119/month, billed annually",
    tagline: "Enterprise-ready structure without enterprise bloat",
    features: [
      { text: "Unlimited deals & multi-pipeline", included: true },
      { text: "Deal rooms with collaboration", included: true },
      { text: "Advanced data models & custom fields", included: true },
      { text: "API access for extensibility", included: true },
      { text: "AI-driven stall & risk detection", included: true },
      { text: "Deal velocity benchmarks", included: true },
      { text: "Smart follow-ups & alerts", included: true },
      { text: "Wallet enrichment & mapping", included: true },
      { text: "On-chain activity alerts", included: true },
      { text: "Token vesting & SAFT tracking", included: true },
      { text: "Up to 10 users with permissions", included: true },
      { text: "Slack & Discord notifications", included: true },
      { text: "Zapier / Make + 500+ integrations", included: true },
      { text: "Priority support (24h SLA)", included: true },
    ],
    buttonText: "Start your 14 Days FreeTrial",
    buttonVariant: "default" as const,
    highlighted: true,
    borderClass: "border-[#ff2f92] border-4",
  },
  {
    name: "Enterpriser",
    description: "For BD teams managing complex Web3 ecosystems",
    price: "Custom Price",
    period: "/ month",
    annualPrice: "Bespoke Pricing Available",
    tagline: "Enterprise-grade BD assurance and execution layer",
    features: [
      { text: "Unlimited users & workspaces", included: true },
      { text: "Multi-entity deal structures", included: true },
      { text: "Custom deal templates & playbooks", included: true },
      { text: "Predictive deal modeling (ML)", included: true },
      { text: "Automated stakeholder mapping", included: true },
      { text: "Smart contract event tracking", included: true },
      { text: "DAO governance visibility", included: true },
      { text: "Token economics & treasury", included: true },
      { text: "Compliance & KYC workflows", included: true },
      { text: "SAML/OIDC SSO", included: true },
      { text: "Audit logs & compliance tooling", included: true },
      { text: "24/7 dedicated support", included: true },
      { text: "Custom onboarding & training", included: true },
      { text: "Quarterly business reviews", included: true },
    ],
    buttonText: "Start your 14 Days FreeTrial",
    buttonVariant: "outline" as const,
    highlighted: false,
    borderClass: "border-[#24242c]",
  },
];

export const PricingPlansSection = () => {
  return (
    <section className="flex flex-col items-center gap-8 md:gap-16 px-4 containerSection">
      <div className="flex flex-col items-center gap-4 md:gap-6 w-full max-w-[844px] px-4">
        <h2 className="text-3xl md:text-[length:var(--heading-bold40-font-size)] font-heading-bold40 font-[number:var(--heading-bold40-font-weight)] text-white text-center tracking-[var(--heading-bold40-letter-spacing)] leading-tight md:leading-[var(--heading-bold40-line-height)] [font-style:var(--heading-bold40-font-style)]">
          Simple, Transparent Pricing
        </h2>

        <p className="max-w-[518px] text-sm md:text-[length:var(--body-reg16-font-size)] text-[#b3b3c0] text-center leading-relaxed md:leading-[var(--body-reg16-line-height)] font-body-reg16 font-[number:var(--body-reg16-font-weight)] tracking-[var(--body-reg16-letter-spacing)] [font-style:var(--body-reg16-font-style)]">
          Choose the plan that fits your needs. All plans include a 14-day free
          trial with full access.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 w-full">
        {pricingPlans.map((plan, index) => (
          <Card
            key={index}
            className={`flex flex-col gap-6 md:gap-8 p-6 md:p-8 rounded-xl border border-solid ${plan.borderClass} bg-[linear-gradient(180deg,rgba(132,135,142,0.08)_1%,rgba(94,94,94,0.08)_100%)] relative`}
          >
            {plan.highlighted && (
              <Badge className="absolute top-[-14px] md:top-[-18px] left-1/2 -translate-x-1/2 bg-[#ff077d] hover:bg-[#ff077d] px-4 md:px-6 py-1.5 md:py-2 rounded-[999px]">
                <span className="text-xs md:text-[length:var(--heading-bold16-font-size)] font-heading-bold16 font-[number:var(--heading-bold16-font-weight)] text-white tracking-[var(--heading-bold16-letter-spacing)] leading-[var(--heading-bold16-line-height)] [font-style:var(--heading-bold16-font-style)]">
                  MOST POPULAR
                </span>
              </Badge>
            )}

            <CardContent className="flex flex-col gap-3 md:gap-4 p-0 pt-2 md:pt-3">
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl md:text-[length:var(--heading-bold32-font-size)] font-heading-bold32 font-[number:var(--heading-bold32-font-weight)] text-white tracking-[var(--heading-bold32-letter-spacing)] leading-tight md:leading-[var(--heading-bold32-line-height)] [font-style:var(--heading-bold32-font-style)]">
                  {plan.name}
                </h3>

                <p className="text-sm md:text-[length:var(--body-reg16-font-size)] font-body-reg16 font-[number:var(--body-reg16-font-weight)] text-[#b3b3c0] tracking-[var(--body-reg16-letter-spacing)] leading-relaxed md:leading-[var(--body-reg16-line-height)] [font-style:var(--body-reg16-font-style)]">
                  {plan.description}
                </p>
              </div>

              <Separator className="bg-[#24242c] h-0.5" />

              <div className="flex flex-col gap-1">
                <div className="flex items-end gap-2">
                  <span className="text-3xl md:text-[length:var(--display-semibold40-font-size)] font-display-semibold40 font-[number:var(--display-semibold40-font-weight)] text-white text-center tracking-[var(--display-semibold40-letter-spacing)] leading-[var(--display-semibold40-line-height)] whitespace-nowrap [font-style:var(--display-semibold40-font-style)]">
                    {plan.price}
                  </span>

                  <span className="text-sm md:text-[length:var(--body-reg16-font-size)] font-body-reg16 font-[number:var(--body-reg16-font-weight)] text-[#b3b3c0] text-center tracking-[var(--body-reg16-letter-spacing)] leading-[var(--body-reg16-line-height)] whitespace-nowrap [font-style:var(--body-reg16-font-style)]">
                    {plan.period}
                  </span>
                </div>

                <p className="text-sm md:text-[length:var(--body-reg16-font-size)] font-body-reg16 font-[number:var(--body-reg16-font-weight)] text-[#ff2f92] tracking-[var(--body-reg16-letter-spacing)] leading-[var(--body-reg16-line-height)] [font-style:var(--body-reg16-font-style)]">
                  {plan.annualPrice}
                </p>
              </div>

              <Separator className="bg-[#24242c] h-0.5" />

              <p className="text-sm md:text-[length:var(--body-reg16-font-size)] font-body-reg16 font-[number:var(--body-reg16-font-weight)] text-white tracking-[var(--body-reg16-letter-spacing)] leading-relaxed md:leading-[var(--body-reg16-line-height)] [font-style:var(--body-reg16-font-style)]">
                {plan.tagline}
              </p>

              <Separator className="bg-[#24242c] h-0.5" />
            </CardContent>

            <div className="flex flex-col gap-3 md:gap-4">
              {plan.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="flex items-start gap-2 md:gap-3"
                >
                  {feature.included ? (
                    <CheckCircle2Icon className="w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircleIcon className="w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0 mt-0.5" />
                  )}

                  <span className="flex-1 text-sm md:text-[length:var(--body-reg16-font-size)] font-body-reg16 font-[number:var(--body-reg16-font-weight)] text-white tracking-[var(--body-reg16-letter-spacing)] leading-relaxed md:leading-[var(--body-reg16-line-height)] [font-style:var(--body-reg16-font-style)]">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <Button
              variant={plan.buttonVariant}
              className={`w-full px-4 md:px-6 py-3 md:py-4 rounded-[999px] ${
                plan.buttonVariant === "default"
                  ? "bg-[#ff2f92] hover:bg-[#ff2f92]/90 text-white"
                  : "border-[#ff2f92] text-[#ff2f92] hover:bg-[#ff2f92]/10"
              }`}
            >
              <span className="text-sm md:text-[length:var(--body-semibold18-font-size)] font-body-semibold18 font-[number:var(--body-semibold18-font-weight)] text-center tracking-[var(--body-semibold18-letter-spacing)] leading-[var(--body-semibold18-line-height)] [font-style:var(--body-semibold18-font-style)]">
                {plan.buttonText}
              </span>
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
};
