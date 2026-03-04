import { Separator } from "../../../../components/ui/separator";

const footerLinks = {
  product: [
    { label: "Start Free Trial", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Why Pink3", href: "#" },
    { label: "FAQ's", href: "#" },
  ],
  support: [
    { label: "Help & Support", href: "#" },
    { label: "Feedback & Rewards", href: "#" },
    { label: "Ambassador Programs", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export const SiteFooterSection = (): JSX.Element => {
  return (
    <footer className="relative flex flex-col w-full items-start gap-2.5 pt-12 md:pt-20 pb-8 bg-[#0b0b0f] border-t border-[#ffffff26]">
      <img
        className="absolute left-0 bottom-[-452px] w-full h-[116px]"
        alt="Eclipses"
        src="/eclipses-1.svg"
      />

      <div className="flex flex-col items-center gap-8 md:gap-12 px-4 md:px-8 lg:px-[120px] py-0 relative w-full">
        <div className="flex flex-col lg:flex-row w-full max-w-[1280px] items-start gap-8 lg:gap-20">
          <div className="flex flex-col w-full lg:w-[330px] items-start gap-3">
            <div className="flex items-center gap-2 w-full">
              <img
                className="w-9 h-8 md:w-11 md:h-10"
                alt="Vectors"
                src="/vectors-1.svg"
              />
              <h2 className="text-2xl md:text-[length:var(--heading-bold32-font-size)] font-heading-bold32 font-[number:var(--heading-bold32-font-weight)] text-[#ff2f92] tracking-[var(--heading-bold32-letter-spacing)] leading-[var(--heading-bold32-line-height)] whitespace-nowrap [font-style:var(--heading-bold32-font-style)]">
                Pink3
              </h2>
            </div>

            <p className="w-full lg:w-[300px] text-xs md:text-[length:var(--body-reg14-font-size)] text-[#b3b3c0] leading-relaxed md:leading-[var(--body-reg14-line-height)] font-body-reg14 font-[number:var(--body-reg14-font-weight)] tracking-[var(--body-reg14-letter-spacing)] [font-style:var(--body-reg14-font-style)]">
              Pink3 is the all-in-one BD CRM for Web3 teams, built to centralize
              workflows, automate follow-ups, and close more deals — faster.
            </p>

            <Separator className="w-full bg-[#ffffff26]" />

            <p className="w-full text-sm md:text-[length:var(--body-reg16-font-size)] leading-[var(--body-reg16-line-height)] font-body-reg16 font-[number:var(--body-reg16-font-weight)] tracking-[var(--body-reg16-letter-spacing)] [font-style:var(--body-reg16-font-style)]">
              <span className="text-white">Email : </span>
              <span className="text-[#ff2f92]">Pink3</span>
              <span className="text-white">@outlook.com</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-[72px] w-full lg:flex-1">
            <nav className="flex flex-col items-start gap-3 md:gap-4">
              <h3 className="w-full text-lg md:text-[length:var(--heading-semibold24-font-size)] font-heading-semibold24 font-[number:var(--heading-semibold24-font-weight)] text-white tracking-[var(--heading-semibold24-letter-spacing)] leading-[var(--heading-semibold24-line-height)] [font-style:var(--heading-semibold24-font-style)]">
                Product
              </h3>
              {footerLinks.product.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-full text-sm md:text-[length:var(--body-reg16-font-size)] font-body-reg16 font-[number:var(--body-reg16-font-weight)] text-[#b3b3c0] tracking-[var(--body-reg16-letter-spacing)] leading-[var(--body-reg16-line-height)] [font-style:var(--body-reg16-font-style)] hover:text-[#ff2f92] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <nav className="flex flex-col items-start gap-3 md:gap-4">
              <h3 className="w-full text-lg md:text-[length:var(--heading-semibold24-font-size)] font-heading-semibold24 font-[number:var(--heading-semibold24-font-weight)] text-white tracking-[var(--heading-semibold24-letter-spacing)] leading-[var(--heading-semibold24-line-height)] [font-style:var(--heading-semibold24-font-style)]">
                Support &amp; Programs
              </h3>
              {footerLinks.support.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-full text-sm md:text-[length:var(--body-reg16-font-size)] font-body-reg16 font-[number:var(--body-reg16-font-weight)] text-[#b3b3c0] tracking-[var(--body-reg16-letter-spacing)] leading-[var(--body-reg16-line-height)] [font-style:var(--body-reg16-font-style)] hover:text-[#ff2f92] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <nav className="flex flex-col items-start gap-3 md:gap-4">
              <h3 className="w-full text-lg md:text-[length:var(--heading-semibold24-font-size)] font-heading-semibold24 font-[number:var(--heading-semibold24-font-weight)] text-white tracking-[var(--heading-semibold24-letter-spacing)] leading-[var(--heading-semibold24-line-height)] [font-style:var(--heading-semibold24-font-style)]">
                Legal
              </h3>
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-full text-sm md:text-[length:var(--body-reg16-font-size)] font-body-reg16 font-[number:var(--body-reg16-font-weight)] text-[#b3b3c0] tracking-[var(--body-reg16-letter-spacing)] leading-[var(--body-reg16-line-height)] [font-style:var(--body-reg16-font-style)] hover:text-[#ff2f92] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-[1280px] items-start pt-4 md:pt-6 border-t border-[#ffffff26]">
          <p className="w-full text-xs md:text-[length:var(--body-reg14-font-size)] font-body-reg14 font-[number:var(--body-reg14-font-weight)] text-white text-center tracking-[var(--body-reg14-letter-spacing)] leading-[var(--body-reg14-line-height)] [font-style:var(--body-reg14-font-style)]">
            © 2026 Pink3. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
