import type { imagesProps } from "@/interfaces/imagesProps";
import { useEffect, useState } from "react";

interface sliderProps {
  images: imagesProps[];
}

export const Slider = ({ images }: sliderProps) => {
  const [activeSlides, setActiveSlides] = useState<imagesProps[]>([...images]);
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSetZIndex = (index: number) => {};

  const handleSelectAtiveSlides = () => {
    // tutaj beda wybierane zdjecia do pokazania max
  };

  setInterval(handleSelectAtiveSlides, 1000);

  return (
    <>
      <div className="gallery flex w-full items-center ">
        {activeSlides.map((slides, index) => (
          <div className="slides w-full" key={index}>
            <div className={`p-2 m-3 z-${index * 10}`}>
              <img
                className="w-400"
                src={slides.imagePath}
                alt={slides.imageName}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
