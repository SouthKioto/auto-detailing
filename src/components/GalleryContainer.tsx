import type { imagesProps } from "@/interfaces/imagesProps";
import { DraggableGalleryElement } from "./DraggableGalleryElement";
import { AdditionalGalleryList } from "./AdditionalGalleryList";

interface galleryProps {
  images: imagesProps[];
  additionalImages?: imagesProps[];
}

const SectionHeading = ({
  id,
  title,
  note,
}: {
  id: string;
  title: string;
  note?: string;
}) => (
  <div className="mb-5.5 flex items-center gap-3.5">
    <h2
      id={id}
      className="-skew-x-12 text-xl font-extrabold text-white whitespace-nowrap"
    >
      {title}
    </h2>
    <span aria-hidden="true" className="h-0.5 flex-1 bg-gradient-line"></span>
    {note && (
      <span className="hidden sm:inline text-sm text-muted">{note}</span>
    )}
  </div>
);

export const GalleryContainer = ({ images, additionalImages }: galleryProps) => {
  // [przed, po, przed, po, ...] -> [[przed, po], [przed, po], ...]
  const pairs = images.reduce<imagesProps[][]>((acc, image, index) => {
    if (index % 2 === 0) return [...acc, [image]];
    acc[acc.length - 1]!.push(image);
    return acc;
  }, []);

  return (
    <div className="mx-auto max-w-[1180px] px-6">
      <section aria-labelledby="h-pary" className="pt-12">
        <SectionHeading
          id="h-pary"
          title="Przed i po"
          note="Polerowanie reflektorów"
        />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(320px,100%),1fr))] gap-6">
          {pairs
            .filter((pair) => pair.length === 2)
            .map(([before, after], index) => (
              <DraggableGalleryElement
                key={before!.imageName}
                topImage={before!}
                bottomImage={after!}
                title={before!.title ?? `Realizacja ${index + 1}`}
                number={index + 1}
              />
            ))}
        </div>
      </section>

      {additionalImages && additionalImages.length > 0 && (
        <section aria-labelledby="h-auta" className="pt-16">
          <SectionHeading id="h-auta" title="Nasze realizacje" />
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(min(240px,100%),1fr))] gap-4.5">
            {additionalImages.map((image) => (
              <AdditionalGalleryList key={image.imageName} image={image} />
            ))}
          </ul>

          <div className="mt-9 flex justify-center">
            <div className="-skew-x-12 rounded-md bg-gradient-primary p-0.5">
              <a
                href="https://www.instagram.com/auto_detailing_norbert_jarosz/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center justify-center rounded-[5px] bg-navy px-5.5 font-semibold text-primary-500 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] transition hover:text-primary-300"
              >
                <span className="skew-x-12">Więcej na Instagramie</span>
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
