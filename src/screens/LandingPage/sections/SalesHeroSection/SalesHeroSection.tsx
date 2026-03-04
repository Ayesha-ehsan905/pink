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
        className="absolute top-[-60px] left-0 w-full h-auto object-cover"
        alt="Eclipses"
        src="/images/Ellipse.png"
      />

      <img
        className="absolute top-[calc(50%-347px)] left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-[636px] object-cover"
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
                    <span className=" text-white font-medium text-[18px] leading-[28px]  ">
                      {item.label}
                    </span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            variant="ctaPink"
            size="ctaSm"
            className="group inline-flex items-center justify-center gap-2"
          >
            <span className=" font-semibold text-base leading-[24px] text-center whitespace-nowrap ">
              Start Free Trial
            </span>
          </Button>
        </div>
      </header>

      <div className="relative flex flex-col gap-8 md:gap-14 px-4 md:px-8 lg:px-[120px] py-0 w-full items-center">
        <div className="flex flex-col items-center justify-center gap-12 md:gap-[72px]  px-0 w-full">
          <div className="inline-flex flex-col items-center gap-6 md:gap-8  pt-8 md:pt-20 lg:pt-[220px] " >
            <div className="inline-flex items-center justify-center pb-0 px-0">
              <h1 className="flex items-center justify-center max-w-[970px] px-4 text-3xl md:text-5xl lg:text-6xl  font-bold  text-white text-center leading-[82px] tracking-[-0.002em] ">
                Close More Deals, Faster &amp; Have Less Deal Slippage
              </h1>
            </div>

            <p className="flex items-center justify-center max-w-[766px] py-8 text-sm md:text-base  text-secondary text-center leading-relaxed md:leading-[26px] ">
              Pink3 helps Web3 Businesses make their BD process significantly
              faster, cheaper more efficient and effective. We are using AI and
              years of human experience in BD process building to help you never
              lose leads again, and focus on the leads with the highest
              conversion probability.
            </p>
          </div>
        </div>

        <Button
          variant="ctaPink"
          size="ctaLg"
          className="group flex w-fit items-center justify-center gap-2"
        >
          <span className="flex items-center justify-center flex-1 text-xl font-bold text-center tracking-[-0.01em] leading-[36px] ">
            Try Pink3 Now For Free
          </span>
        </Button>
      </div>
    </section>
  );
};
