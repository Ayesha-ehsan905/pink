import { PricingPlansSection } from "./sections/PricingPlansSection/PricingPlansSection";
import { ProblemSolutionsOverviewSection } from "./sections/ProblemSolutionsOverviewSection/ProblemSolutionsOverviewSection";
import { ProductBenefitsSection } from "./sections/ProductBenefitsSection";
import { SalesHeroSection } from "./sections/SalesHeroSection";
import { UserTestimonialsSection } from "./sections/UserTestimonialsSection/UserTestimonialsSection";
import { LandingHeader } from "./LandingHeader";
import { FrequentlyAskedQuestionsSection } from "./sections/FrequentlyAskedQuestionsSection/FrequentlyAskedQuestionsSection";
import { TrialOfferSection } from "./sections/TrialOfferSection/TrialOfferSection";

export const LandingPage = () => {
  return (
    <>
      <main className="flex flex-col w-full">
        <LandingHeader />
        <SalesHeroSection />
        <UserTestimonialsSection />
        <ProblemSolutionsOverviewSection />
        <ProductBenefitsSection />
        <PricingPlansSection />
       <FrequentlyAskedQuestionsSection />
       <TrialOfferSection />
      {/*<SiteFooterSection /> */}
      </main>
    </>
  );
};
