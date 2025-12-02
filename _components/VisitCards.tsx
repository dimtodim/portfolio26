import PhysiotherapistFront from "./svg/visit_cards/physiotherapist_front";
import PhysiotherapistBack from "./svg/visit_cards/physiotherapist_back";
import NamaskarFront from "./svg/visit_cards/namaskar_front";
import NamaskarBack from "./svg/visit_cards/namaskar_back";
import TexasFront from "./svg/visit_cards/texas_front";
import MotoFront from "./svg/visit_cards/moto_front";
import MotoBack from "./svg/visit_cards/moto_back";
import GraysVintageFront from "./svg/visit_cards/graysvintage_front";
import GraysVintageBack from "./svg/visit_cards/graysvintage_back";
import ExoticDeliveryFront from "./svg/visit_cards/exoticdelivery_front";
import ExoticDeliveryBack from "./svg/visit_cards/exoticdelivery_back";

const visitCards = [
  { component: PhysiotherapistFront, className: "physiotherapist_front" },
  { component: PhysiotherapistBack, className: "physiotherapist_back" },
  { component: NamaskarFront, className: "namaskar_front" },
  { component: NamaskarBack, className: "namaskar_back" },
  { component: MotoFront, className: "moto_front" },
  { component: MotoBack, className: "moto_back" },
  { component: GraysVintageFront, className: "graysvintage_front" },
  { component: GraysVintageBack, className: "graysvintage_back" },
  { component: ExoticDeliveryFront, className: "exoticdelivery_front" },
  { component: ExoticDeliveryBack, className: "exoticdelivery_back" },

  { component: TexasFront, className: "texas_front" },

  // dodaj još
];

export default function VisitCards() {
  return (
    <div className="print_gallery rounded-sm border-2 border-(--border-muted) grid grid-cols-1 md:grid-cols-2 gap-1 lg:gap-2 p-1 lg:p-2 mb-1 lg:mb-2">
      {visitCards.map(({ component: VisitCardComponent, className }, index) => (
        <div
          key={index}
          className={`visit_card ${className} hover:cursor-pointer`}
        >
          <VisitCardComponent className={`${className} w-full h-full`} />
        </div>
      ))}
    </div>
  );
}
