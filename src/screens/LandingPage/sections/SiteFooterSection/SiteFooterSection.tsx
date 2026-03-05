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

export const SiteFooterSection = ()=> {
  return (
    <footer className="relative flex flex-col w-full items-start gap-2.5 pb-8  border-t border-[#ffffff26] md:mt-[120px]">
      <img
        className="absolute left-0 bottom-[-02px] w-full h-[116px]"
        alt="Eclipses"
        src="/images/Ellipse2.png"
      />

      <div className="flex flex-col items-center gap-8 md:gap-12 px-4 md:px-8 lg:px-[120px] md:pt-[80px] py-0 relative w-full">
        <div className="flex flex-col lg:flex-row w-full  items-start gap-8 lg:gap-20">
          <div className="flex flex-col w-full lg:w-[330px] items-start gap-3">
            <div className="flex items-center gap-2 w-full">
              <img
                className=""
                alt="Vectors"
                src="/images/Logo.png"
              />
              
            </div>

            <p className="w-full lg:w-[300px] text-xs md:text-sm text-secondary leading-relaxed md:leading-[24px] tracking-[-0.002em]">
              Pink3 is the all-in-one BD CRM for Web3 teams, built to centralize
              workflows, automate follow-ups, and close more deals — faster.
            </p>

            <Separator className="w-full bg-[#ffffff26]" />

            <p className="w-full text-sm md:text-base leading-[24px] font-normal tracking-[-0.002em]">
              <span className="text-white">Email : </span>
              <span className="text-pink">Pink3</span>
              <span className="text-white">@outlook.com</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-[72px] w-full lg:flex-1">
            <nav className="flex flex-col items-start gap-3 md:gap-4">
              <h3 className="w-full text-lg md:text-[24px] font-semibold text-white tracking-[-0.002em] leading-[32px]">
                Product
              </h3>
              {footerLinks.product.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-full text-sm md:text-base font-normal text-secondary tracking-[-0.002em] leading-relaxed md:leading-[24px] hover:text-pink transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <nav className="flex flex-col items-start gap-3 md:gap-4">
              <h3 className="w-full text-lg md:text-[24px] font-semibold text-white tracking-[-0.002em] leading-[32px]">
                Support &amp; Programs
              </h3>
              {footerLinks.support.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-full text-sm md:text-base font-normal text-secondary tracking-[-0.002em] leading-relaxed md:leading-[24px] hover:text-pink transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <nav className="flex flex-col items-start gap-3 md:gap-4">
              <h3 className="w-full text-lg md:text-[24px] font-semibold text-white tracking-[-0.002em] leading-[32px]">
                Legal
              </h3>
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-full text-sm md:text-base font-normal text-secondary tracking-[-0.002em] leading-relaxed md:leading-[24px] hover:text-pink transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col w-full  items-start pt-4 md:pt-6 border-t border-[#ffffff26]">
          <p className="w-full text-xs md:text-[length:var(--body-reg14-font-size)] font-body-reg14 font-[number:var(--body-reg14-font-weight)] text-white text-center tracking-[var(--body-reg14-letter-spacing)] leading-[var(--body-reg14-line-height)] [font-style:var(--body-reg14-font-style)]">
            © 2026 Pink3. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
