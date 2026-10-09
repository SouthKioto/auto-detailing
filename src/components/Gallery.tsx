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
      <div className="w-full max-w-5xl p-4 sm:p-8 md:p-10 text-gray-400">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
          {images.map((image) => (
            <div
              key={image.imageName}
              className="overflow-hidden rounded-lg border border-cyan-600/60 bg-transparent p-1.5 sm:p-4 md:p-6"
            >
              <img
                className="w-full rounded-md object-cover"
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
          ))}
        </div>
      </div>
    </section>
  );
};
