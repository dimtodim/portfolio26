import LogoNavSvg from "./svg/logo-nav";
import ThemeSwitcher from "@/_components/ThemeSwitcher";

export default function Nav() {
  return (
    <>
      <nav className="w-full flex items-center justify-between mt-1 p-1 lg:p-2 rounded-sm border-2 border-(--border-muted)">
        <LogoNavSvg className="text-(--text-muted) w-fit h-3 lg:h-4" />
        <ThemeSwitcher className="text-(--primary) hover:text-(--text) transition-colors duration-200" />
      </nav>
    </>
  );
}
