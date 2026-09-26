import type { imagesProps } from "@/interfaces/imagesProps";
import { useEffect, useRef, useState } from "react";

interface sliderProps {
  images: imagesProps[];
  speed?: number;
}

const ASPECT_RATIO = 16 / 10;
const RANGE = 2.5;
const SCALE_DROP = 0.25;

const getImageWidth = (viewportWidth: number) => {
  if (viewportWidth < 480) return viewportWidth * 0.7; // telefony
  if (viewportWidth < 768) return viewportWidth * 0.55; // małe tablety
  if (viewportWidth < 1024) return 380; // tablety
  return 500;
};

export const Slider = ({ images, speed = 0.1 }: sliderProps) => {
  const total = images.length;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const positionRef = useRef<number>(0);

  const [imageWidth, setImageWidth] = useState<number>(() =>
    typeof window !== "undefined" ? getImageWidth(window.innerWidth) : 500,
  );

  const imageHeight = imageWidth / ASPECT_RATIO;
  const step = imageWidth * 0.8;

  // Przelicz rozmiary przy zmianie szerokości ekranu
  useEffect(() => {
    const handleResize = () => {
      setImageWidth(getImageWidth(window.innerWidth));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (total === 0 || !container) return;

    const render = () => {
      itemRefs.current.forEach((el, index) => {
        if (!el) return;

        let offset = (index - positionRef.current) % total;
        if (offset < 0) offset += total;
        if (offset > total / 2) offset -= total;

        const distance = Math.abs(offset);
        const scale = Math.max(1 - distance * SCALE_DROP, 0.3);
        const opacity = Math.max(0, 1 - distance / RANGE);

        el.style.transform = `translate(-50%, -50%) translateX(${
          offset * step
        }px) scale(${scale})`;
        el.style.opacity = String(opacity);
        el.style.zIndex = String(Math.round(100 - distance * 10));
        el.style.visibility = opacity === 0 ? "hidden" : "visible";
        el.style.pointerEvents = opacity > 0.5 ? "auto" : "none";
      });
    };

    render();

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    let frameId = 0;
    let last: number | null = null;

    const tick = (time: number) => {
      if (last !== null) {
        const delta = Math.min((time - last) / 1000, 0.1);
        positionRef.current = (positionRef.current + delta * speed) % total;
        render();
      }
      last = time;
      frameId = requestAnimationFrame(tick);
    };

    const start = () => {
      if (frameId === 0) frameId = requestAnimationFrame(tick);
    };

    const stop = () => {
      cancelAnimationFrame(frameId);
      frameId = 0;
      last = null;
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) start();
      else stop();
    });
    observer.observe(container);

    return () => {
      observer.disconnect();
      stop();
    };
  }, [total, speed, step]);

  return (
    <div
      ref={containerRef}
      className="relative w-full mt-12 sm:mt-16 md:mt-20 overflow-hidden"
      style={{ height: imageHeight + 60 }}
    >
      {images.map((image, index) => (
        <div
          key={image.imageName ?? index}
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
          className="absolute top-1/2 left-1/2 rounded-lg bg-linear-to-r from-cyan-600 to-cyan-950 p-0.5"
          style={{
            width: imageWidth,
            height: imageHeight,
            willChange: "transform, opacity",
          }}
        >
          <img
            className="w-full h-full object-cover rounded-lg shadow-lg"
            src={image.imagePath}
            alt={image.imageName}
            decoding="async"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
};
