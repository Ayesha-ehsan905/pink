import { useState } from "react";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "Home" },
  { label: "Client Reviews" },
  { label: "Overview" },
  { label: "Why Pink3" },
  { label: "Pricing" },
  { label: "FAQ's" },
  { label: "Privacy Policy" },
  { label: "Terms of Service" },
];

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="relative flex w-full justify-center px-4 py-4 lg:hidden z-30">
        <div className="flex w-full max-w-[360px] items-center justify-between rounded-full border border-white/80 bg-black/50 px-4 py-2">
          <div className="inline-flex items-center gap-2">
            <img
              className=" rounded-full border border-pink bg-black/60 p-1"
              alt="Pink3 Logo"
              src="/images/MbLogo.png"
            />
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent text-pink"
          >
            <span className="sr-only">
              {isOpen ? "Close navigation" : "Open navigation"}
            </span>
            <div className="flex flex-col items-center justify-center gap-[3px]">
              <span
                className={`h-[2px] w-4 rounded-full bg-pink transition-transform ${
                  isOpen ? "translate-y-[4px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-4 rounded-full bg-pink transition-opacity ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-[2px] w-4 rounded-full bg-pink transition-transform ${
                  isOpen ? "-translate-y-[4px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <div className="fixed inset-y-0 left-0 z-50 w-[80%] max-w-xs bg-[#050509]/95 shadow-xl flex flex-col">
            <div className="flex items-center justify-between px-4 pt-4 pb-2">
              <img
                className="h-6 w-auto"
                alt="Pink3 Logo"
                src="/images/Logo.png"
              />

              <button
                type="button"
                aria-label="Close navigation"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-pink"
              >
                <span className="sr-only">Close navigation</span>
                <div className="relative h-3 w-3">
                  <span className="absolute inset-0 h-[2px] w-full rotate-45 bg-pink" />
                  <span className="absolute inset-0 h-[2px] w-full -rotate-45 bg-pink" />
                </div>
              </button>
            </div>

            <div className="px-4">
              <div className="h-px w-full bg-white/10" />
            </div>

            <nav className="flex-1 px-4 pt-6 space-y-3 text-sm text-white/80">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  className={`flex w-full items-center justify-between rounded-full px-4 py-3 text-left transition-colors ${
                    item.label === "Home"
                      ? "bg-pink text-white"
                      : "hover:bg-white/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="px-4 pb-6">
              <Button
                variant="ctaPink"
                size="ctaLg"
                className="w-full justify-center"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-base font-semibold leading-[24px]">
                  Try Pink3 Now For Free
                </span>
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

