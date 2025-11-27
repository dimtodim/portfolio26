import ContestSvg from "./svg/contest-svg";
import LostLogosSvg from "./svg/lost-logos-svg";
import ArrowDownSvg from "./svg/arrow-down-svg";

export default function DesignContest() {
  return (
    <div className="w-full h-270 rounded-sm border-2 border-(--border-muted) flex flex-col justify-between mb-1 lg:mb-2">
      <div className="h-92 w-full">
        <div className="design_cotest h-92 rounded-sm border-b-2 border-(--border-muted) bg-(--bg-light) p-1 lg:p-2 flex items-center">
          <ContestSvg className="max-h-full text-(--text-muted)" />
        </div>
      </div>
      <div className="h-fit w-full">
        <div className="w-full h-auto flex justify-between p-1 lg:p-2">
          <p className="font-manrope max-w-[42ch] text-base text-(--text)">
            Welcome to my logo gallery created for various design contests.
            These projects were developed in fast-paced environments that
            required quick thinking, adaptability, and strong visual
            decision-making. Each logo was crafted based on specific briefs,
            research, sketching, and iterative refinement — with the goal of
            creating identities that are memorable, functional, and visually
            balanced. This selection includes works that were shortlisted,
            recognized, or stood out among hundreds of submissions.
            <ArrowDownSvg className="h-4 text-(--text-muted) mt-4" />
          </p>

          <div className="relative">
            <LostLogosSvg className="absolute h-full text-(--text) right-0 z-0 opacity-60" />
          </div>
        </div>
      </div>
    </div>
  );
}
