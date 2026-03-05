import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../../components/ui/navigation-menu";
import { MobileHeader } from "./sections/SalesHeroSection/MobileHeader";
import { Button } from "../../components/ui/button";
import { useEffect, useState } from "react";
const navigationItems = [
  { label: "Client Reviews" },
  { label: "Overview" },
  { label: "Why Pink3" },
  { label: "Pricing" },
  { label: "FAQ's" },
];

export const LandingHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <MobileHeader />

      <header
        className={`sticky top-0 z-50 hidden lg:flex flex-col w-full justify-center gap-2.5 px-4 md:px-8 lg:px-[120px] py-3 border-b transition-colors duration-300 ${
          isScrolled
            ? "border-[#262636] bg-[#10101733] backdrop-blur-[30px]"
            : "py-3 border-b [border-bottom-style:solid] border-transparent [border-image:linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_50%,rgba(255,255,255,0)_100%)_1]"
        }`}
      >
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
                  <NavigationMenuLink className="inline-flex items-center justify-center gap-1 px-4 py-2 rounded-[999px] cursor-pointer hover:bg-pink transition-colors">
                    <span className="text-white font-medium text-[18px] leading-[28px]">
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
            className={`group inline-flex items-center justify-center gap-2 transition-colors duration-300 ${
              isScrolled
                ? "border border-pink bg-transparent text-pink hover:bg-pink/10"
                : ""
            }`}
          >
            <span
              className={`font-semibold text-base leading-[24px] text-center whitespace-nowrap transition-colors duration-300 ${
                isScrolled ? "text-pink" : ""
              }`}
            >
              Start Free Trial
            </span>
          </Button>
        </div>
      </header>
    </>
  );
};
