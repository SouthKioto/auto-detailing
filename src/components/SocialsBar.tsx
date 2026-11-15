import mail from "../img/icons/mail.svg";
import instagram from "../img/icons/instagram.svg";
import phone from "../img/icons/phone.svg";
import arrowLeft from "../img/icons/arrow-back-ios.svg";
import arrowRight from "../img/icons/arrow-forward-ios.svg";
import { useCallback, useRef, useState } from "react";
import { PhonePopup } from "./PhonePopup";

const iconBtn =
  "grid cursor-pointer place-items-center rounded-full border-0 bg-transparent p-1 transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-primary-300";

export const SocialsBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [phonePopupOpen, setPhonePopupOpen] = useState<boolean>(false);
  const phoneBtnRef = useRef<HTMLButtonElement>(null);

  const closePhonePopup = useCallback(() => setPhonePopupOpen(false), []);

  return (
    <div
      className={`fixed ${
        isOpen ? "right-1 sm:right-2" : "-right-11 sm:-right-13"
      } transition-[right] delay-150 duration-300 bottom-32 sm:bottom-48 flex flex-row items-center z-100`}
    >
      {/* Przycisk "<" */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="socials-list"
        aria-label={isOpen ? "Schowaj szybki kontakt" : "Pokaż szybki kontakt"}
        className="z-200 cursor-pointer rounded-l-md border-0 bg-gradient-primary p-0.5 pr-0"
      >
        <span className="block rounded-l-md bg-primary-900 px-1.5 py-2.5 sm:px-2 sm:py-3">
          <img
            src={!isOpen ? arrowLeft : arrowRight}
            alt=""
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
        </span>
      </button>

      {/* Lista ikon */}
      <div id="socials-list" className="z-100 rounded-full bg-gradient-primary p-0.5">
        <div className="flex flex-col items-center gap-4 sm:gap-6 py-2.5 px-1.5 sm:py-3 sm:px-2 rounded-full bg-primary-900">
          <div className="relative">
            <button
              ref={phoneBtnRef}
              type="button"
              onClick={() => setPhonePopupOpen((prev) => !prev)}
              aria-expanded={phonePopupOpen}
              aria-controls="phone-popup"
              aria-label="Numery telefonów"
              tabIndex={isOpen ? 0 : -1}
              className={iconBtn}
            >
              <img src={phone} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <PhonePopup
              id="phone-popup"
              isOpen={phonePopupOpen}
              onClose={closePhonePopup}
              anchorRef={phoneBtnRef}
              numbers={[
                { label: "Biuro", number: "+48 730 265 338" },
                { label: "Detailing", number: "+48 452 562 314" },
              ]}
            />
          </div>

          <a
            href="mailto:autodetailing.norbertjarosz@gmail.com"
            aria-label="Napisz e-mail"
            tabIndex={isOpen ? 0 : -1}
            className={iconBtn}
          >
            <img src={mail} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>

          <a
            href="https://www.instagram.com/auto_detailing_norbert_jarosz/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            tabIndex={isOpen ? 0 : -1}
            className={iconBtn}
          >
            <img src={instagram} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};
