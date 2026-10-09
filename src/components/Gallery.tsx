import type { imagesProps } from "@/interfaces/imagesProps";

interface galleryProps {
  images: imagesProps[];
  elemHeight?: number;
}

export const Gallery = ({ images, elemHeight }: galleryProps) => {
  return (
    <section className="flex justify-center">
      <div className="w-full max-w-5xl p-5 sm:p-8 md:p-10 text-gray-400">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={image.imageName}
              className="bg-transparent border border-cyan-600/60 rounded-lg p-2 sm:p-4 md:p-6"
            >
              <img
                className={`w-full object-cover rounded-md ${
                  elemHeight ? "" : "h-40 sm:h-52 md:h-64"
                }`}
                style={
                  elemHeight ? { height: `${elemHeight * 0.25}rem` } : undefined
                }
                src={image.imagePath}
                alt={image.imageName}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
