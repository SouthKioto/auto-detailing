import mail from "../img/icons/mail.svg";
import facebook from "../img/icons/facebook.svg";
import tiktock from "../img/icons/tiktok-icon.svg";
import instagram from "../img/icons/instagram.svg";
import phone from "../img/icons/phone.svg";

export const SocialsBar = () => {
  return (
    <>
      <div className="fixed right-4 bottom-5 flex flex-col gap-5 z-100">
        <div className="rounded-md bg-linear-to-r from-cyan-600 to-cyan-950 p-0.5 mx-4">
          <div className="p-5 rounded-md bg-linear-to-bl from-gray-600 to-gray-400 ">
            <div className="font-bold mb-4 cursor-pointer">
              <img src={phone} alt="phone" className="w-6" />
            </div>

            <div className="font-bold mb-4 cursor-pointer ">
              <img src={mail} alt="mail" className="w-6" />
            </div>

            <div className="font-bold  cursor-pointer">
              <a
                href="https://www.instagram.com/auto_detailing_norbert_jarosz/"
                target="_blank"
              >
                <img src={instagram} alt="instagram" className="w-6" />
              </a>
            </div>

            <div className="font-bold mb-4 cursor-pointer hidden">
              <a href="#" target="_blank">
                <img src={tiktock} alt="instagram" className="w-6" />
              </a>
            </div>
            <div className="font-bold mb-4 cursor-pointer hidden">
              <a href="#" target="_blank">
                <img src={facebook} alt="instagram" className="w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
