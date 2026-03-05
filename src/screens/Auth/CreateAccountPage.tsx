import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { ChevronLeftIcon} from "lucide-react";

export const CreateAccountPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col lg:flex-row">
      {/* Left brand panel */}
      <div className="relative flex w-full lg:w-1/2 flex-col bg-pink text-white px-6 py-6 lg:px-12 lg:py-10">
        <div className="flex items-center justify-between">
          <Button
            size="ctaSm"
            className="inline-flex items-center gap-2 rounded-full border border-[#FFCAE3] bg-transparent px-10 py-3 text-xs font-medium hover:bg-white/20"
            onClick={() => navigate(-1)}
          >
            <ChevronLeftIcon className="w-4 h-4" />
            <span className="text-[14px] font-medium text-white">Back</span>
          </Button>

          
        </div>

        <div className="flex flex-1 flex-col items-center justify-center text-center px-4">
          <div className="mb-6 flex items-center gap-3">
            <img src="/images/LoginLogo.png" alt="Pink3" className="w-10 h-10" />
            <span className="text-4xl font-bold tracking-[-0.01em] leading-[48px]">Pink3</span>
          </div>

          <p className="max-w-xs text-[24px] font-normal leading-relaxed">
            All-in-one BD CRM for Web3 teams
          </p>
        </div>

        {/* <div className="mt-6 flex items-center justify-center gap-6 text-[11px] font-medium uppercase tracking-[0.18em] text-white/80">
          <span>No Credit Card Required</span>
          <span>Instant Access</span>
          <span>Cancel Anytime</span>
        </div> */}
      </div>
      {/* border-top-left-radius: 32px;
      border-bottom-left-radius: 32px; */}

      {/* Right form panel */}
      <div className="relative flex w-full lg:w-1/2 items-center justify-center bg-[#050509] px-6 py-10 lg:px-16 lg:py-0 ">
        {/* Top curved highlight */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-black via-black/60 to-transparent rounded-b-[48px]" />

        <div className="relative z-10 w-full max-w-md space-y-8">
          <header className="space-y-3">
            <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight">
              Create an Account
            </h1>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              Just your name and email — we’ll set everything up automatically so you can
              start closing deals faster.
            </p>
          </header>

          <form
            className="space-y-6"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="block text-xs font-semibold uppercase tracking-[0.16em] text-white/70"
              >
                Your Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter Your Full Name"
                className="h-11 w-full rounded-full border border-white/10 bg-transparent px-4 text-sm text-white placeholder:text-white/30 outline-none focus:border-pink focus:ring-1 focus:ring-pink"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="workEmail"
                className="block text-xs font-semibold uppercase tracking-[0.16em] text-white/70"
              >
                Your Work Email
              </label>
              <input
                id="workEmail"
                type="email"
                placeholder="Enter Your Work Email"
                className="h-11 w-full rounded-full border border-white/10 bg-transparent px-4 text-sm text-white placeholder:text-white/30 outline-none focus:border-pink focus:ring-1 focus:ring-pink"
              />
            </div>

            <Button
              type="submit"
              variant="ctaPink"
              size="ctaLg"
              className="mt-2 w-full justify-center text-base font-semibold"
            >
              Start Free Trial Now
            </Button>
          </form>

          <p className="text-[11px] text-center text-white/50 leading-relaxed">
            By continuing, you agree to Pink3&apos;s{" "}
            <button
              type="button"
              className="underline underline-offset-4 hover:text-white"
            >
              Terms of Service
            </button>{" "}
            and{" "}
            <button
              type="button"
              className="underline underline-offset-4 hover:text-white"
            >
              Privacy Policy
            </button>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

