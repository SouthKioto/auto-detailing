import type { imagesProps } from "@/interfaces/imagesProps";

interface AdditionalGalleryListProps {
  image: imagesProps;
}

export const AdditionalGalleryList = ({
  image,
}: AdditionalGalleryListProps) => {
  const title = image.title ?? image.imageName;

  return (
    <li className="group rounded-[10px] bg-gradient-primary p-0.5">
      <div className="relative aspect-3/4 overflow-hidden rounded-lg bg-navy-dark">
        <img
          src={image.imagePath}
          alt={title}
          loading="lazy"
          className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute inset-x-0 bottom-0 bg-gradient-caption px-3.5 pt-7.5 pb-3 text-[15px] font-semibold text-white">
          {title}
        </span>
      </div>
    </li>
  );
};
