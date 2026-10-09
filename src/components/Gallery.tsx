import type { imagesProps } from "@/interfaces/imagesProps";

interface galleryProps {
  images: imagesProps[];
  elemHeight?: number;
}

export const Gallery = ({ images, elemHeight }: galleryProps) => {
  return (
    <section className="flex justify-center">
      <div className="w-full max-w-5xl p-4 sm:p-8 md:p-10 text-gray-400">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:gap-6">
          {images.map((image) => (
            <div
              key={image.imageName}
              className="overflow-hidden rounded-lg border border-cyan-600/60 bg-transparent p-1.5 sm:p-4 md:p-6"
            >
              <img
                className={`w-full rounded-md object-cover ${
                  elemHeight
                    ? "aspect-[4/3] sm:aspect-auto"
                    : "aspect-[4/3] sm:h-52 sm:aspect-auto md:h-64"
                }`}
                style={
                  elemHeight
                    ? { ["--elem-h" as string]: `${elemHeight * 0.25}rem` }
                    : undefined
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
