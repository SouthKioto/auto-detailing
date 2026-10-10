import { useEffect, useState } from "react";
import type { imagesProps } from "@/interfaces/imagesProps";

interface galleryProps {
  images: imagesProps[];
  elemHeight?: number;
}

const DEFAULT_RATIO = 4 / 3;
const MAX_RATIO = 2;

export const Gallery = ({ images, elemHeight }: galleryProps) => {
  const [ratio, setRatio] = useState(DEFAULT_RATIO);

  useEffect(() => {
    if (elemHeight || images.length === 0) return;

    let cancelled = false;
    let loaded = 0;
    const ratios: number[] = [];

    const done = () => {
      loaded++;
      if (loaded === images.length && !cancelled && ratios.length > 0) {
        setRatio(Math.min(Math.max(...ratios), MAX_RATIO));
      }
    };

    images.forEach((image) => {
      const img = new Image();
      img.onload = () => {
        if (img.naturalHeight)
          ratios.push(img.naturalWidth / img.naturalHeight);
        done();
      };
      img.onerror = done;
      img.src = image.imagePath;
    });

    return () => {
      cancelled = true;
    };
  }, [images, elemHeight]);

  return (
    <section className="flex justify-center">
      <div className="w-full max-w-5xl px-4 py-6 sm:px-8 sm:py-10 md:px-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-8">
          {images.map((image, index) => {
            const isBefore = index % 2 === 0;

            return (
              <figure
                key={image.imageName}
                className="group relative overflow-hidden rounded-2xl border border-cyan-600/40 bg-gradient-to-b from-white/[0.04] to-transparent p-2 shadow-lg shadow-black/20 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/70 hover:shadow-xl hover:shadow-cyan-500/10 sm:p-3 md:p-4"
              >
                <figcaption className="mb-2 flex items-center gap-2 px-1 sm:mb-3">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-0.5 text-xs font-semibold uppercase tracking-widest ${
                      isBefore
                        ? "bg-gray-500/20 text-gray-300 ring-1 ring-gray-500/40"
                        : "bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-400/50"
                    }`}
                  >
                    {isBefore ? "Przed" : "Po"}
                  </span>
                  <span
                    className={`h-px flex-1 ${
                      isBefore ? "bg-gray-500/30" : "bg-cyan-500/30"
                    }`}
                  />
                </figcaption>

                <div className="overflow-hidden rounded-xl">
                  <img
                    className="w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                    style={
                      elemHeight
                        ? { height: `${elemHeight * 0.25}rem` }
                        : { aspectRatio: ratio }
                    }
                    src={image.imagePath}
                    alt={image.imageName}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};
