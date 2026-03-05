import { FrequentlyAskedQuestionsSection } from "./sections/FrequentlyAskedQuestionsSection/FrequentlyAskedQuestionsSection";
import { PricingPlansSection } from "./sections/PricingPlansSection/PricingPlansSection";
import { ProblemSolutionsOverviewSection } from "./sections/ProblemSolutionsOverviewSection/ProblemSolutionsOverviewSection";
import { ProductBenefitsSection } from "./sections/ProductBenefitsSection";
import { SalesHeroSection } from "./sections/SalesHeroSection";
import { SiteFooterSection } from "./sections/SiteFooterSection/SiteFooterSection";
import { TrialOfferSection } from "./sections/TrialOfferSection/TrialOfferSection";
import { UserTestimonialsSection } from "./sections/UserTestimonialsSection/UserTestimonialsSection";

export const LandingPage = () => {
  return (
    <>
      <main className="flex flex-col w-full">
        <SalesHeroSection />
        <UserTestimonialsSection />
        <ProblemSolutionsOverviewSection />
        <ProductBenefitsSection />
        {/* <PricingPlansSection />
      <FrequentlyAskedQuestionsSection />
      <TrialOfferSection />
      <SiteFooterSection /> */}
      </main>
    </>
  );
};
