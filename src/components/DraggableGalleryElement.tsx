import { useCallback, useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";
import type { imagesProps } from "@/interfaces/imagesProps";

interface DraggableGalleryElementProps {
  topImage: imagesProps;
  bottomImage: imagesProps;
  title: string;
  number: number;
}

const clamp = (value: number) => Math.min(100, Math.max(0, value));

export const DraggableGalleryElement = ({
  topImage,
  bottomImage,
  title,
  number,
}: DraggableGalleryElementProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return;
    setPosition(clamp(((clientX - rect.left) / rect.width) * 100));
  }, []);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    updateFromClientX(e.clientX);
  };

  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    setDragging(false);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const step = e.shiftKey ? 10 : 2;
    if (e.key === "ArrowLeft") setPosition((p) => clamp(p - step));
    else if (e.key === "ArrowRight") setPosition((p) => clamp(p + step));
    else if (e.key === "Home") setPosition(0);
    else if (e.key === "End") setPosition(100);
    else return;
    e.preventDefault();
  };

  return (
    <figure className="m-0 flex flex-col gap-3">
      <div className="rounded-[10px] bg-gradient-primary p-0.5">
        <div
          ref={containerRef}
          className="relative aspect-3/4 overflow-hidden rounded-lg bg-navy-dark select-none touch-pan-y cursor-ew-resize"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <img
            src={bottomImage.imagePath}
            alt={`${title} – po`}
            draggable={false}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover pointer-events-none"
          />

          <img
            src={topImage.imagePath}
            alt={`${title} – przed`}
            draggable={false}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          />

          {/* Etykiety */}
          <span className="absolute top-3 left-3 z-20 -skew-x-12 rounded border border-white/20 bg-navy/90 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.12em] text-muted-light pointer-events-none">
            Przed
          </span>
          <span className="absolute top-3 right-3 z-20 -skew-x-12 rounded bg-linear-to-r from-primary-600 to-primary-700 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.12em] text-white pointer-events-none">
            Po
          </span>

          <div
            role="slider"
            tabIndex={0}
            aria-label={`Porównanie przed i po: ${title}`}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(position)}
            onKeyDown={onKeyDown}
            className="absolute top-0 bottom-0 z-30 w-0 outline-none group"
            style={{ left: `${position}%` }}
          >
            <div className="absolute inset-y-0 w-0.5 -translate-x-1/2 bg-primary-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
            <div className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary-400 bg-navy text-primary-300 shadow-[0_0_0_4px_rgba(34,211,238,0.25),0_4px_14px_rgba(0,0,0,0.6)] group-focus-visible:ring-4 group-focus-visible:ring-primary-300">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.4}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <figcaption className="flex justify-between gap-3 text-[15px]">
        <span className="font-semibold text-white">{title}</span>
        <span className="text-muted">Realizacja {number}</span>
      </figcaption>
    </figure>
  );
};
