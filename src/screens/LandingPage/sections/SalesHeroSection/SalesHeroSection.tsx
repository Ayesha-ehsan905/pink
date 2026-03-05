import { Button } from "../../../../components/ui/button";
import { useNavigate } from "react-router-dom";

export const SalesHeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative flex flex-col items-start gap-2.5 pt-0 pb-10 px-0 w-full ">
      <img
        className="absolute top-[-160px] left-0 w-full h-auto object-cover"
        alt="Eclipses"
        src="/images/Ellipse.png"
      />

      <img
        className="absolute top-[calc(50%-347px)] left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-[636px] object-cover"
        alt="Pattern"
        src="/images/HeroSectionBg.png"
      />

      <div className="relative flex flex-col gap-8 md:gap-14 px-4 md:px-8 lg:px-[120px] py-0 w-full items-center">
        <div className="flex flex-col items-center justify-center gap-12 md:gap-[72px]  px-0 w-full">
          <div className="inline-flex flex-col items-center gap-6 md:gap-8  pt-8 md:pt-20 lg:pt-[220px] ">
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
          onClick={() => navigate("/create-account")}
        >
          <span className="flex items-center justify-center flex-1 text-xl font-bold text-center tracking-[-0.01em] leading-[36px] ">
            Try Pink3 Now For Free
          </span>
        </Button>
      </div>
    </section>
  );
};
