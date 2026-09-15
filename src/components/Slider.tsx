import type { imagesProps } from "@/interfaces/imagesProps";

interface sliderProps {
  images: imagesProps[];
}

export const Slider = ({ images }: sliderProps) => {
  return (
    <>
      <h1>Slider</h1>

      <div className="gallery grid grid-cols-1 grid-rows-1">
        {images.map((image, index) => (
          <div className="slides" key={index}>
            <div className="p-2 m-3">
              <h1>{image.imageName}</h1>
              <img src={image.imagePath} alt={image.imageName}></img>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
