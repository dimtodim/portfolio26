import CreativeEye from "./svg/logo_gallery/creative_eye";
import Az from "./svg/logo_gallery/az";
import Bmitch from "./svg/logo_gallery/b_mitch";
import DjCat from "./svg/logo_gallery/dj_cat";
import EvansMoto from "./svg/logo_gallery/evans_moto";
import SacconesPizza from "./svg/logo_gallery/pizza";
import FutureClassic from "./svg/logo_gallery/future_classic";
import Weyh from "./svg/logo_gallery/weyh";
import Larsen from "./svg/logo_gallery/larsen";
import HappyVet from "./svg/logo_gallery/happy_vet";
import GreenMarket from "./svg/logo_gallery/green_market";
import LemonSoftware from "./svg/logo_gallery/lemon_software";
import LyftLogo from "./svg/logo_gallery/lyft_logo";
import Panneteria from "./svg/logo_gallery/panetteria";
import SmallHouse from "./svg/logo_gallery/small_house";
import Swm_logo from "./svg/logo_gallery/smw";
import PalmsLogo from "./svg/logo_gallery/palms_logo";

const logos = [
  { component: CreativeEye, className: "creative_eye" },
  { component: Panneteria, className: "panetteria" },
  { component: Bmitch, className: "b_mitch" },
  { component: SmallHouse, className: "small_house" },
  { component: LemonSoftware, className: "lemon_software" },
  { component: Larsen, className: "larsen" },
  { component: GreenMarket, className: "green_market" },
  { component: LyftLogo, className: "lyft_logo" },
  { component: Weyh, className: "weyh" },
  { component: SacconesPizza, className: "saccones_pizza" },
  { component: HappyVet, className: "happy_vet" },
  { component: PalmsLogo, className: "palms_logo" },
  { component: Az, className: "az" },
  { component: DjCat, className: "dj_cat" },
  { component: Swm_logo, className: "swm_logo" },
  { component: FutureClassic, className: "future_classic" },
  { component: EvansMoto, className: "evans_moto" },

  // dodaj još
];

export default function LostLogosGallery() {
  return (
    <div className="w-full rounded-sm border-2 border-(--border-muted) grid grid-cols-3 gap-1 lg:gap-2 p-1 lg:p-2">
      {logos.map(({ component: LogoComponent, className }, index) => (
        <div key={index} className={`logo ${className} hover:cursor-pointer`}>
          <LogoComponent className={`${className} w-full h-full`} />
        </div>
      ))}
    </div>
  );
}
