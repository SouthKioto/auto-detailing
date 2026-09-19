import ReactModal from "react-modal";
import type { ReactNode } from "react";
import closeIco from "../img/icons/close.svg";
import { Pricing } from "./Pricing";

ReactModal.setAppElement("#root");

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
};

export const Modal = ({ isOpen, onClose, title, children }: Props) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={onClose}
    contentLabel={title}
    className="mx-2 mt-10 max-w-lg rounded-xl bg-linear-to-r from-cyan-600 to-cyan-950 p-0.5 text-white shadow-2xl outline-none sm:mx-auto"
    overlayClassName="fixed inset-0 z-200 bg-black/60 backdrop-blur-sm"
  >
    <div className="flex max-h-[85vh] flex-col rounded-[10px] bg-[#122130]">
      {/* nagłówek: stała szerokość po bokach = tytuł jest idealnie wycentrowany */}
      <div className="grid shrink-0 grid-cols-[3rem_1fr_3rem] items-center border-b border-white/10 py-2">
        <div />
        <h2 className="-skew-x-12 text-center text-xl font-bold">{title}</h2>
        <button
          className="grid size-10 cursor-pointer place-items-center rounded-full transition hover:bg-white/10"
          onClick={onClose}
          aria-label="Zamknij"
        >
          <img src={closeIco} alt="" className="w-6" />
        </button>
      </div>

      <div className="overflow-y-auto pt-2">{children ?? <Pricing />}</div>
    </div>
  </ReactModal>
);
