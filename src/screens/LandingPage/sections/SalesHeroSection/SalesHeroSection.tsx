import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

const navigationItems = [
  { label: "Client Reviews" },
  { label: "Overview" },
  { label: "Why Pink3" },
  { label: "Pricing" },
  { label: "FAQ's" },
];

export const SalesHeroSection = () => {
  return (
    <section className="relative flex flex-col items-start gap-2.5 pt-0 pb-10 px-0 w-full ">
      <img
        className="absolute top-[-40px] left-0 w-full h-[262px] object-cover"
        alt="Eclipses"
        src="/images/Ellipse.png"
      />

      <img
        className="absolute top-[calc(50.00%_-_347px)] left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-[636px] object-cover"
        alt="Pattern"
        src="/images/HeroSectionBg.png"
      />

      <header className="relative flex flex-col w-full justify-center gap-2.5 px-4 md:px-8 lg:px-[120px] py-3 border-b [border-bottom-style:solid] border-transparent [border-image:linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_50%,rgba(255,255,255,0)_100%)_1]">
        <div className="flex w-full items-center justify-between gap-4 md:gap-8 lg:gap-12 px-0 py-3 md:py-5">
          <div className="inline-flex items-center gap-2 md:gap-3">
            <img
              className="w-full h-full"
              alt="Pink3 Logo"
              src="/images/Logo.png"
            />
            
          </div>

          <NavigationMenu className="hidden lg:flex flex-1">
            <NavigationMenuList className="flex items-center justify-center gap-7">
              {navigationItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink className="inline-flex items-center justify-center gap-1 px-4 py-2 rounded-[999px] cursor-pointer hover:bg-white/10 transition-colors">
                    <span className="font-body-medi18 font-[number:var(--body-medi18-font-weight)] text-white text-[length:var(--body-medi18-font-size)] tracking-[var(--body-medi18-letter-spacing)] leading-[var(--body-medi18-line-height)] whitespace-nowrap [font-style:var(--body-medi18-font-style)]">
                      {item.label}
                    </span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button className="inline-flex items-center justify-center gap-2 px-4 md:px-5 py-2 md:py-3 bg-[#ff2f92] hover:bg-[#ff2f92]/90 rounded-[999px] text-sm md:text-base">
            <span className="font-button-semibold16 font-[number:var(--button-semibold16-font-weight)] text-white text-center tracking-[var(--button-semibold16-letter-spacing)] leading-[var(--button-semibold16-line-height)] whitespace-nowrap [font-style:var(--button-semibold16-font-style)]">
              Start Free Trial
            </span>
          </Button>
        </div>
      </header>

      <div className="relative flex flex-col gap-8 md:gap-14 px-4 md:px-8 lg:px-[120px] py-0 w-full items-center">
        <div className="flex flex-col items-center justify-center gap-12 md:gap-[72px] pt-12 md:pt-20 pb-6 px-0 w-full">
          <div className="inline-flex flex-col items-center gap-6 md:gap-8">
            <div className="inline-flex items-center justify-center gap-2.5 pt-8 md:pt-20 lg:pt-[120px] pb-0 px-0">
              <h1 className="flex items-center justify-center max-w-[970px] px-4 text-3xl md:text-5xl lg:text-[length:var(--display-bold64-font-size)] font-display-bold64 font-[number:var(--display-bold64-font-weight)] text-white text-center tracking-[var(--display-bold64-letter-spacing)] leading-tight md:leading-[var(--display-bold64-line-height)] [font-style:var(--display-bold64-font-style)]">
                Close More Deals, Faster &amp; Have Less Deal Slippage
              </h1>
            </div>

            <p className="flex items-center justify-center max-w-[766px] px-4 text-sm md:text-[length:var(--body-reg16-font-size)] font-body-reg16 font-[number:var(--body-reg16-font-weight)] text-[#b3b3c0] text-center tracking-[var(--body-reg16-letter-spacing)] leading-relaxed md:leading-[var(--body-reg16-line-height)] [font-style:var(--body-reg16-font-style)]">
              Pink3 helps Web3 Businesses make their BD process significantly
              faster, cheaper more efficient and effective. We are using AI and
              years of human experience in BD process building to help you never
              lose leads again, and focus on the leads with the highest
              conversion probability.
            </p>
          </div>
        </div>

        <Button className="flex w-full max-w-[350px] items-center justify-center gap-2 px-6 py-3 bg-[#ff2f92] hover:bg-[#ff2f92]/90 rounded-[999px]">
          <span className="flex items-center justify-center flex-1 text-lg md:text-[length:var(--button-bold-24-font-size)] font-button-bold-24 font-[number:var(--button-bold-24-font-weight)] text-white text-center tracking-[var(--button-bold-24-letter-spacing)] leading-[var(--button-bold-24-line-height)] [font-style:var(--button-bold-24-font-style)]">
            Try Pink3 Now For Free
          </span>
        </Button>
      </div>
    </section>
  );
};
