import type { imagesProps } from "@/interfaces/imagesProps";
import { useEffect, useRef } from "react";

interface sliderProps {
  images: imagesProps[];
  speed?: number;
}

const IMAGE_WIDTH = 500;
const ASPECT_RATIO = 16 / 10;
const IMAGE_HEIGHT = IMAGE_WIDTH / ASPECT_RATIO;
const STEP = IMAGE_WIDTH * 0.8;
const RANGE = 2.5;
const SCALE_DROP = 0.25;

export const Slider = ({ images, speed = 0.1 }: sliderProps) => {
  const total = images.length;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const positionRef = useRef<number>(0);

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
          offset * STEP
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
  }, [total, speed]);

  return (
    <div
      ref={containerRef}
      className="relative w-full mt-20 overflow-hidden"
      style={{ height: IMAGE_HEIGHT + 100 }}
    >
      {images.map((image, index) => (
        <div
          key={image.imageName ?? index}
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
          className="absolute top-1/2 left-1/2 rounded-lg bg-linear-to-r from-cyan-600 to-cyan-950 p-0.5"
          style={{
            width: IMAGE_WIDTH,
            height: IMAGE_HEIGHT,
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
