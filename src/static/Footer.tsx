import logo from "../img/LogoSm_Opacity.png";
import { GlowLine, InstagramIcon } from "./Header";

const EMAIL = "autodetailing.norbertjarosz@gmail.com";
const INSTAGRAM = "https://www.instagram.com/auto_detailing_norbert_jarosz/";
const MAPS = "https://maps.app.goo.gl/9DZGFR5u6A3zMkY87";

const heading = "m-0 mb-3.5 text-xs font-extrabold tracking-[.16em] uppercase text-primary-300";
const list = "m-0 flex list-none flex-col gap-3 p-0 text-[15px] leading-snug text-[#A9B4C0]";
const link = "text-[#E2E8EE] no-underline hover:text-primary-300";
const sub = "block text-xs text-[#7F92A3]";

export const Footer = () => {
  return (
    <footer className="mt-24 bg-[linear-gradient(180deg,rgba(11,22,32,0.6)_0%,#05080B_40%)] text-[#E2E8EE]">
      <GlowLine />

      {/* Baner CTA */}
      <div className="mx-auto max-w-[1180px] px-4 pt-12 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-[14px] border border-primary-400/35 bg-[linear-gradient(110deg,rgba(8,145,178,0.24),rgba(8,51,68,0.28)_55%,rgba(18,33,48,0.5))] px-[clamp(20px,4vw,40px)] py-8">
          <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-2">
            <h2 className="m-0 text-[clamp(24px,3vw,32px)] leading-tight font-extrabold italic">
              Chcesz zobaczyć taką zmianę{" "}
              <span className="text-primary-300">u siebie?</span>
            </h2>
            <p className="m-0 text-base text-[#A9B4C0]">
              Napisz lub zadzwoń, chętnie doradzimy.
            </p>
          </div>

          <ul className="m-0 flex w-full list-none flex-col gap-3.5 px-1.5 py-0 sm:w-auto sm:flex-row sm:flex-wrap">
            <li className="-skew-x-12 rounded-md bg-[linear-gradient(90deg,#22D3EE,#0891B2)] shadow-[0_6px_22px_rgba(34,211,238,.22)]">
              <a
                href="tel:+48730265338"
                className="flex min-h-12 items-center justify-center px-5.5 text-[15px] font-extrabold tracking-wide text-[#04212A] no-underline hover:brightness-110"
              >
                <span className="inline-flex skew-x-12 items-center gap-2.5">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25 1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z" />
                  </svg>
                  Zadzwoń
                </span>
              </a>
            </li>
            <li className="-skew-x-12 rounded-md bg-gradient-primary p-0.5">
              <a
                href={`mailto:${EMAIL}`}
                className="flex min-h-11 items-center justify-center rounded-[5px] bg-navy px-5.5 text-base font-semibold text-primary-500 no-underline [text-shadow:0_1.2px_1.2px_rgba(0,0,0,.8)] transition-colors hover:bg-[#16293B] hover:text-primary-300"
              >
                <span className="inline-flex skew-x-12 items-center gap-2">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 20q-.8 0-1.4-.6T2 18V6q0-.8.6-1.4T4 4h16q.8 0 1.4.6T22 6v12q0 .8-.6 1.4T20 20zm8-7 8-5V6l-8 5-8-5v2z" />
                  </svg>
                  Napisz
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Kolumny z informacjami */}
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-x-8 gap-y-9 px-4 pt-13 pb-11 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div className="flex flex-col items-start gap-4">
          <img src={logo} alt="Auto Detailing Jarosz" className="h-12.5 w-auto mix-blend-screen" />
          <p className="m-0 max-w-65 text-sm leading-relaxed text-[#8FA0AF]">
            Profesjonalna pielęgnacja, czyszczenie i zabezpieczanie samochodów.
          </p>
          <a
            href={INSTAGRAM}
            aria-label="Instagram"
            className="grid size-11 place-items-center rounded-[10px] border border-primary-600/40 text-[#E2E8EE] transition-colors hover:border-primary-400 hover:text-primary-300"
          >
            <InstagramIcon size={20} />
          </a>
        </div>

        <div>
          <h3 className={heading}>Kontakt</h3>
          <ul className={list}>
            <li>
              <a href="tel:+48730265338" className={link}>+48 730 265 338</a>
              <span className={sub}>Biuro</span>
            </li>
            <li>
              <a href="tel:+48452562314" className={link}>+48 452 562 314</a>
              <span className={sub}>Detailing</span>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className={`${link} break-all`}>{EMAIL}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={heading}>Godziny otwarcia</h3>
          <ul className={list}>
            <li className="flex max-w-60 justify-between gap-3">
              <span>Pn–Pt</span>
              <span className="text-[#E2E8EE]">8:00–18:00</span>
            </li>
            <li className="flex max-w-60 justify-between gap-3">
              <span>Sobota</span>
              <span className="text-[#E2E8EE]">9:00–14:00</span>
            </li>
            <li className="text-[13px] text-[#7F92A3]">
              Odpowiadamy zwykle w ciągu jednego dnia roboczego.
            </li>
          </ul>
        </div>

        <div>
          <h3 className={heading}>Dojazd</h3>
          <ul className={list}>
            <li>Stryszów 142, 34-146</li>
            <li>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="font-bold text-primary-400 no-underline hover:text-primary-300">
                Wyznacz trasę →
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Dolny pasek */}
      <div className="border-t border-primary-600/20">
        <div className="mx-auto flex min-h-15 max-w-[1180px] flex-wrap items-center justify-between gap-x-5 gap-y-1 px-4 text-[13px] text-[#7F92A3] sm:px-6">
          <p className="m-0">© {new Date().getFullYear()} Auto Detailing Norbert Jarosz</p>
          <a href="#top" className="inline-flex min-h-11 items-center gap-1.5 text-[#8FA0AF] no-underline hover:text-primary-300">
            Do góry
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="m18 15-6-6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};
