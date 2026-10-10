import logo from "../img/LogoSm_Opacity.png";

export const Footer = () => {
  return (
    <div className="p-1 border-s w-full rounded-tl rounded-tr shadow">
      <footer className="lg:px-16 px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 mix-blend-screen">
          <img src={logo} alt="logo" className="h-10 sm:h-12 md:h-14 w-auto" />
          <p className="max-w-xs text-sm text-cyan-600">
            Chcesz zobaczyć taką zmianę u siebie? Napisz lub zadzwoń, chętnie
            doradzimy.
          </p>
        </div>

        <nav className="w-full md:w-auto">
          <ul className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-base">
            <li className="w-full md:w-auto">
              <div className="-skew-x-12 rounded-md bg-linear-to-r from-cyan-600 to-cyan-950 p-0.5">
                <a
                  href="tel:+48 730 265 338"
                  className="block text-center rounded-md bg-[#122130] text-cyan-500 px-4 py-2 md:p-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] transition hover:text-cyan-300"
                >
                  Zadzwoń
                </a>
              </div>
            </li>
            <li className="w-full md:w-auto">
              <div className="-skew-x-12 rounded-md bg-linear-to-r from-cyan-600 to-cyan-950 p-0.5">
                <a
                  href="mailto:autodetailing.norbertjarosz@gmail.com"
                  className="block text-center rounded-md bg-[#122130] text-cyan-500 px-4 py-2 md:p-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] transition hover:text-cyan-300"
                >
                  Napisz
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </footer>

      <div className="lg:px-16 px-4 pb-4 flex flex-col sm:flex-row items-center justify-between gap-1 text-xs text-cyan-700">
        <p>Pn–Pt 8:00–18:00 · Sob 9:00–14:00</p>
        <p>Odpowiadamy zwykle w ciągu jednego dnia roboczego.</p>
      </div>
    </div>
  );
};
