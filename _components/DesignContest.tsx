import ContestSvg from "./svg/contest-svg";
import LostLogosSvg from "./svg/lost-logos-svg";
import ArrowDownSvg from "./svg/arrow-down-svg";

export default function DesignContest() {
  return (
    <div className="design_contest w-full h-270 rounded-sm border-2 border-(--border-muted) flex flex-col justify-between mb-1 lg:mb-2">
      <div className="h-92 w-full">
        <div className="design_cotest h-92 rounded-sm border-b-2 border-(--border-muted) bg-(--bg-light) p-1 lg:p-2 flex items-center">
          <ContestSvg className="max-h-full text-(--text-muted)" />
        </div>
      </div>
      <div className="h-fit w-full">
        <div className="w-full h-auto flex justify-between p-1 lg:p-2">
          <p className="font-manrope max-w-[36ch] text-base text-(--text)">
            This gallery features logos created for design competitions,
            developed under fast-paced conditions that demanded quick thinking
            and adaptability. Each concept was carefully researched, sketched,
            and refined to create unique, functional, and recognizable
            identities. Many of these logos were shortlisted or awarded among
            thousands of submissions.
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
