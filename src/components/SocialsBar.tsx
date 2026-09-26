import mail from "../img/icons/mail.svg";
import facebook from "../img/icons/facebook.svg";
import tiktock from "../img/icons/tiktok-icon.svg";
import instagram from "../img/icons/instagram.svg";
import phone from "../img/icons/phone.svg";
import arrowLeft from "../img/icons/arrow-back-ios.svg";
import arrowRight from "../img/icons/arrow-forward-ios.svg";
import { useState } from "react";
import { PhonePopup } from "./PhonePopup";

export const SocialsBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [phonePopupOpen, setPhonePopupOpen] = useState<boolean>(false);

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`fixed ${
        isOpen ? "right-1 sm:right-2" : "-right-11 sm:-right-13"
      } transition-[right] delay-150 duration-300 bottom-32 sm:bottom-48 flex flex-row items-center z-100`}
    >
      {/* Przycisk "<" */}
      <div
        className="z-200 rounded-l-md bg-linear-to-r from-cyan-600 to-cyan-950 p-0.5 pr-0 cursor-pointer"
        onClick={handleIsOpen}
      >
        <div className="px-1.5 py-2.5 sm:px-2 sm:py-3 rounded-l-md bg-cyan-900">
          <img
            src={!isOpen ? arrowLeft : arrowRight}
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
        </div>
      </div>

      {/* Lista ikon */}
      <div className="z-100 rounded-full bg-linear-to-r from-cyan-600 to-cyan-950 p-0.5">
        <div className="flex flex-col items-center pt-3 pb-3 p-2.5 sm:pt-4 sm:pb-4 sm:p-3 rounded-full bg-cyan-900">
          <div className="font-bold mb-5 sm:mb-7 cursor-pointer">
            <img
              src={phone}
              alt="phone"
              className="w-5 h-5 sm:w-6 sm:h-6"
              onClick={() => setPhonePopupOpen((prev) => !prev)}
            />

            <PhonePopup
              isOpen={phonePopupOpen}
              onClose={() => setPhonePopupOpen(false)}
              numbers={[
                { label: "Biuro", number: "+48 730 265 338" },
                { label: "Detailing", number: "+48 452 562 314" },
              ]}
            />
          </div>

          <div className="font-bold mb-5 sm:mb-7 cursor-pointer">
            <a
              href="mailto:autodetailing.norbertjarosz@gmail.com"
              target="_blank"
            >
              <img src={mail} alt="mail" className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>

          <div className="font-bold cursor-pointer">
            <a
              href="https://www.instagram.com/auto_detailing_norbert_jarosz/"
              target="_blank"
            >
              <img
                src={instagram}
                alt="instagram"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </a>
          </div>

          <div className="font-bold mb-4 cursor-pointer hidden">
            <a href="#" target="_blank">
              <img
                src={tiktock}
                alt="tiktok"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </a>
          </div>
          <div className="font-bold mb-4 cursor-pointer hidden">
            <a href="#" target="_blank">
              <img
                src={facebook}
                alt="facebook"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
