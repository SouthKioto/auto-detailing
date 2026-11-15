import { Modal } from "@/components/Modal";
import logo from "../img/LogoSm_Opacity.png";
import { useEffect, useState } from "react";

const PHONE_MAIN = "+48730265338";
const PHONE_MAIN_LABEL = "730 265 338";
const EMAIL = "autodetailing.norbertjarosz@gmail.com";
const INSTAGRAM = "https://www.instagram.com/auto_detailing_norbert_jarosz/";

const PhoneIcon = ({ size = 18 }: { size?: number }) => (
  <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25 1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z" />
  </svg>
);

export const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);

/** Gradientowa linia pod headerem / nad footerem */
export const GlowLine = () => (
  <div
    aria-hidden="true"
    className="h-0.5 bg-[linear-gradient(90deg,rgba(8,145,178,0),#22D3EE_30%,#0891B2_55%,#083344_80%,rgba(8,51,68,0))]"
  />
);

type NavItem = { label: string; href?: string; pricing?: boolean };

const NAV: NavItem[] = [
  { label: "Strona główna", href: "/" },
  { label: "Galeria", href: "/gallery" },
  { label: "Cennik", pricing: true },
  { label: "Dojazd", href: "/#dojazd" },
];

// Desktop: link z podkreśleniem aktywnej strony
const deskLink =
  "relative inline-flex min-h-11 cursor-pointer items-center px-0.5 text-[15px] font-semibold text-[#C7D2DC] transition-colors hover:text-primary-300 aria-[current=page]:text-primary-300 aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-0 aria-[current=page]:after:bottom-1 aria-[current=page]:after:h-[3px] aria-[current=page]:after:-skew-x-30 aria-[current=page]:after:rounded-sm aria-[current=page]:after:bg-[linear-gradient(90deg,#22D3EE,#0891B2)] aria-[current=page]:after:content-['']";

// Mobile: skośne kafelki
const mobLink =
  "flex min-h-13 w-full cursor-pointer items-center rounded-[5px] bg-navy px-5 text-left text-[17px] font-semibold text-primary-500 [text-shadow:0_1.2px_1.2px_rgba(0,0,0,.8)] transition-colors hover:bg-[#16293B] hover:text-primary-300 aria-[current=page]:bg-[linear-gradient(90deg,#0891B2,#0E7490)] aria-[current=page]:text-[#ECFEFF]";

export const Header = () => {
  const [pricingOpen, setPricingOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const path = typeof window !== "undefined" ? window.location.pathname : "/";

  // Zamknij menu klawiszem Esc i po przejściu na szeroki ekran
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    const mq = window.matchMedia("(min-width: 900px)");
    const onMq = () => mq.matches && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [menuOpen]);

  const isCurrent = (item: NavItem) =>
    item.href === path ? ("page" as const) : undefined;

  const openPricing = () => {
    setMenuOpen(false);
    setPricingOpen(true);
  };

  return (
    <>
      <header
        id="top"
        // z-150: nad sliderem (slajdy mają z-index do 100) i SocialsBar (z-100),
        // ale pod modalem cennika (z-200) i PhonePopup (z-300)
        className="sticky top-0 z-150 bg-[rgba(10,16,22,0.9)] backdrop-blur-md"
      >
        {/* Górny pasek z adresem i godzinami – tylko desktop */}
        <div className="hidden border-b border-primary-600/20 min-[900px]:block">
          <div className="mx-auto flex min-h-9 max-w-[1180px] items-center justify-between gap-4 px-6 text-[13px] text-[#8FA0AF]">
            <p className="m-0 flex items-center gap-2.5">
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Stryszów 142, 34-146
              <span aria-hidden="true" className="text-[#2B4A5C]">|</span>
              Pn–Pt 8:00–18:00 · Sob 9:00–14:00
            </p>
            <p className="m-0 flex items-center gap-3.5">
              <a href={`mailto:${EMAIL}`} className="text-[#8FA0AF] no-underline hover:text-primary-300">
                {EMAIL}
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid size-7 place-items-center text-[#8FA0AF] hover:text-primary-300">
                <InstagramIcon />
              </a>
            </p>
          </div>
        </div>

        {/* Główny pasek */}
        <div className="mx-auto flex min-h-16 max-w-[1180px] items-center justify-between gap-5 px-4 sm:px-6 min-[900px]:min-h-20">
          <a href="/" aria-label="Auto Detailing Jarosz – strona główna" className="flex mix-blend-screen">
            <img src={logo} alt="Auto Detailing Jarosz" className="h-[clamp(38px,5vw,54px)] w-auto" />
          </a>

          <nav aria-label="Główna" className="hidden min-[900px]:block">
            <ul className="m-0 flex list-none items-center gap-7.5 p-0">
              {NAV.map((item) => (
                <li key={item.label}>
                  {item.pricing ? (
                    <button type="button" className={`${deskLink} border-0 bg-transparent`} onClick={openPricing}>
                      {item.label}
                    </button>
                  ) : (
                    <a className={deskLink} href={item.href} aria-current={isCurrent(item)}>
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2.5">
            {/* Przycisk "zadzwoń" – na telefonie sama ikona */}
            <div className="-skew-x-12 rounded-md bg-[linear-gradient(90deg,#22D3EE,#0891B2)] shadow-[0_6px_22px_rgba(34,211,238,.22)]">
              <a
                href={`tel:${PHONE_MAIN}`}
                aria-label={`Zadzwoń: ${PHONE_MAIN_LABEL}`}
                className="flex min-h-12 items-center justify-center px-4 text-[15px] font-extrabold tracking-wide text-[#04212A] no-underline hover:brightness-110 min-[900px]:px-5.5"
              >
                <span className="inline-flex skew-x-12 items-center gap-2.5">
                  <PhoneIcon size={20} />
                  <span className="hidden min-[900px]:inline">{PHONE_MAIN_LABEL}</span>
                </span>
              </a>
            </div>

            {/* Hamburger – tylko mobile */}
            <div className="-skew-x-12 rounded-md bg-gradient-primary p-0.5 min-[900px]:hidden">
              <button
                type="button"
                onClick={() => setMenuOpen((o) => !o)}
                aria-expanded={menuOpen}
                aria-controls="menu-mob"
                aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
                className="flex min-h-11 cursor-pointer items-center justify-center rounded-[5px] border-0 bg-navy px-3.5 text-primary-500 transition-colors hover:bg-[#16293B] hover:text-primary-300"
              >
                <span className="inline-flex skew-x-12">
                  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                    <path d={menuOpen ? "M6 6l12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"} />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        <GlowLine />

        {/* Menu mobilne */}
        {menuOpen && (
          <nav
            id="menu-mob"
            aria-label="Menu"
            className="absolute inset-x-0 top-full flex max-h-[calc(100dvh-66px)] flex-col gap-5 overflow-y-auto border-b border-primary-600/30 bg-navy-dark px-4 pt-5 pb-6 shadow-[0_20px_40px_rgba(0,0,0,.5)] min-[900px]:hidden"
          >
            <ul className="m-0 flex list-none flex-col gap-2.5 px-1.5 py-0">
              {NAV.map((item) => (
                <li key={item.label} className="-skew-x-12 rounded-md bg-gradient-primary p-0.5">
                  {item.pricing ? (
                    <button type="button" className={`${mobLink} border-0`} onClick={openPricing}>
                      <span className="skew-x-12">{item.label}</span>
                    </button>
                  ) : (
                    <a className={`${mobLink} no-underline`} href={item.href} aria-current={isCurrent(item)} onClick={() => setMenuOpen(false)}>
                      <span className="skew-x-12">{item.label}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 gap-3 rounded-[10px] border border-primary-600/25 bg-primary-600/8 p-4 text-sm">
              <a href="tel:+48730265338" className="flex flex-col font-bold text-[#E2E8EE] no-underline">
                +48 730 265 338
                <span className="text-xs font-normal text-[#8FA0AF]">Biuro</span>
              </a>
              <a href="tel:+48452562314" className="flex flex-col font-bold text-[#E2E8EE] no-underline">
                +48 452 562 314
                <span className="text-xs font-normal text-[#8FA0AF]">Detailing</span>
              </a>
              <p className="col-span-2 m-0 text-[#8FA0AF]">Pn–Pt 8:00–18:00 · Sob 9:00–14:00</p>
            </div>
          </nav>
        )}
      </header>

      <Modal isOpen={pricingOpen} onClose={() => setPricingOpen(false)} title="Cennik" />
    </>
  );
};
