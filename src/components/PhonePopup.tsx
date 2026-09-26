import { useState, useRef, useEffect } from "react";

export const PhonePopup = ({
  isOpen,
  onClose,
  numbers,
}: {
  isOpen: boolean;
  onClose: () => void;
  numbers: { label: string; number: string }[];
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={ref}
      className="absolute right-full top-1/2 -translate-y-1/2 mr-3 z-300 animate-in fade-in slide-in-from-right-2 duration-200"
    >
      <div className="relative rounded-lg bg-linear-to-b from-cyan-600 to-cyan-950 p-0.5 shadow-lg">
        <div className="rounded-md bg-cyan-900 px-4 py-3 min-w-48">
          <p className="text-xs text-cyan-400 font-semibold mb-2 uppercase tracking-wide">
            Zadzwoń do nas
          </p>
          <div className="flex flex-col gap-2">
            {numbers.map(({ label, number }) => (
              <a
                key={number}
                href={`tel:${number}`}
                className="flex flex-col text-white hover:text-cyan-300 transition-colors"
              >
                <span className="text-sm font-medium">{number}</span>
                <span className="text-xs text-cyan-500">{label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-cyan-900 rotate-45 border-r border-b border-cyan-700" />
      </div>
    </div>
  );
};
