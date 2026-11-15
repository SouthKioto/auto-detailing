import type { ReactNode } from "react";

import fotelIco from "../img/icons/fotel.svg";
import skoraIco from "../img/icons/skora.svg";
import fotel2Ico from "../img/icons/fotel2.svg";
import autoIco from "../img/icons/auto.svg";
import szlifierkaIco from "../img/icons/szlifierka.svg";
import woskiIco from "../img/icons/woski.svg";
import powlokiIco from "../img/icons/powloki.svg";
import lampaIco from "../img/icons/lampa.svg";
import odkurzaczIco from "../img/icons/odkurzacz.svg";

type CarSize = "small" | "medium" | "large";
type PricePerCar = Partial<Record<CarSize, number>>;

interface PricingItem {
  icon: string;
  title: string;
  price: number | PricePerCar;
}

const CAR_LABELS: Record<CarSize, string> = {
  small: "Małe",
  medium: "Średnie",
  large: "Duże",
};

const pricingArr: PricingItem[] = [
  { icon: fotelIco, title: "Detailing wnętrza", price: 350 },
  { icon: skoraIco, title: "Czyszczenie oraz impregnacja skór", price: 200 },
  { icon: fotel2Ico, title: "Pranie tapicerki materiałowej", price: 150 },
  { icon: autoIco, title: "Detailing zewnętrzny", price: 400 },
  {
    icon: szlifierkaIco,
    title: "Korekta lakieru",
    price: { small: 700, medium: 900, large: 1100 },
  },
  { icon: woskiIco, title: "Woski", price: 250 },
  { icon: powlokiIco, title: "Powłoki ceramiczne", price: 700 },
  { icon: lampaIco, title: "Polerowanie lamp", price: 150 },
  { icon: odkurzaczIco, title: "Odkurzanie wnętrza", price: 120 },
];

const SIZES = Object.keys(CAR_LABELS) as CarSize[];

const SinglePrice = ({ value }: { value: number }) => (
  <div className="whitespace-nowrap text-right">
    <span className="text-xs text-white/50">od </span>
    <span className="text-lg font-semibold tabular-nums text-cyan-300">
      {value}
    </span>
    <span className="text-sm text-white/70"> zł</span>
  </div>
);

const CarPrices = ({ prices }: { prices: PricePerCar }) => (
  <div className="mt-2 grid grid-cols-3 gap-2">
    {SIZES.filter((size) => prices[size] !== undefined).map((size) => (
      <div
        key={size}
        className="rounded-md bg-white/5 px-2 py-1.5 text-center ring-1 ring-white/10"
      >
        <div className="text-xs text-white/50">{CAR_LABELS[size]}</div>
        <div className="text-sm font-semibold tabular-nums text-cyan-300">
          od {prices[size]} zł
        </div>
      </div>
    ))}
  </div>
);

export const Pricing = () => {
  return (
    <ul className="divide-y divide-white/10 px-6 pb-4">
      {pricingArr.map(({ icon, title, price }) => {
        const isSingle = typeof price === "number";

        return (
          <li key={title} className="flex items-start gap-4 py-4">
            <div className="grid size-11 shrink-0 place-items-center rounded-lg bg-cyan-600/15 text-cyan-400 ring-1 ring-cyan-600/30">
              <img src={icon} />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="font-medium leading-snug">{title}</h3>
              {!isSingle && <CarPrices prices={price} />}
            </div>

            {isSingle && (
              <div className="pt-0.5">
                <SinglePrice value={price} />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};
