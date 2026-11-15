import { useRef, useEffect } from "react";
import type { RefObject } from "react";

export const PhonePopup = ({
  id,
  isOpen,
  onClose,
  numbers,
  anchorRef,
}: {
  id?: string;
  isOpen: boolean;
  onClose: () => void;
  numbers: { label: string; number: string }[];
  /** Przycisk otwierający popup – kliknięcie w niego nie liczy się jako "poza" */
  anchorRef?: RefObject<HTMLElement | null>;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (ref.current?.contains(target)) return;
      if (anchorRef?.current?.contains(target)) return;
      onClose();
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose, anchorRef]);

  if (!isOpen) return null;

  return (
    <div
      id={id}
      ref={ref}
      className="absolute right-full top-1/2 -translate-y-1/2 mr-2 sm:mr-3 z-300 animate-in fade-in slide-in-from-right-2 duration-200"
    >
      <div className="relative rounded-lg bg-gradient-primary-vertical p-0.5 shadow-lg">
        <div className="rounded-md bg-primary-900 px-3 py-2.5 sm:px-4 sm:py-3 w-40 sm:w-48">
          <p className="text-[10px] sm:text-xs text-primary-400 font-semibold mb-2 uppercase tracking-wide">
            Zadzwoń do nas
          </p>
          <div className="flex flex-col gap-2">
            {numbers.map(({ label, number }) => (
              <a
                key={number}
                href={`tel:${number.replace(/\s/g, "")}`}
                className="flex flex-col text-white hover:text-primary-300 transition-colors"
              >
                <span className="text-xs sm:text-sm font-medium">{number}</span>
                <span className="text-[10px] sm:text-xs text-primary-500">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-primary-900 rotate-45 border-r border-b border-primary-700" />
      </div>
    </div>
  );
};
