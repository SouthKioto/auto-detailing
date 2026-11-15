import { useEffect } from "react";
import { TitleBar } from "@/components/TitleBar";

import przed_po1_1 from "../img/przed_po/przed_po1_1.webp";
import przed_po1_2 from "../img/przed_po/przed_po1_2.webp";
import przed_po2_1 from "../img/przed_po/przed_po2_1.webp";
import przed_po2_2 from "../img/przed_po/przed_po2_2.webp";
import przed_po3_1 from "../img/przed_po/przed_po3_1.webp";
import przed_po3_2 from "../img/przed_po/przed_po3_2.webp";
import przed_po4_1 from "../img/przed_po/przed_po4_1.webp";
import przed_po4_2 from "../img/przed_po/przed_po4_2.webp";
import przed_po5_1 from "../img/przed_po/przed_po5_1.webp";
import przed_po5_2 from "../img/przed_po/przed_po5_2.webp";
import przed_po6_1 from "../img/przed_po/przed_po6_1.webp";
import przed_po6_2 from "../img/przed_po/przed_po6_2.webp";

import bmw1 from "../img/photos/bmw1.webp";
import bmw2 from "../img/photos/bmw2.webp";
import bmw3 from "../img/photos/bmw3.webp";
import seat from "../img/photos/seat.webp";
import volkswagen1 from "../img/photos/volkswagen1.webp";
import volkswagen2 from "../img/photos/volkswagen2.webp";
import volkswagen3 from "../img/photos/volkswagen3.webp";

import { GalleryContainer } from "@/components/GalleryContainer";
import type { imagesProps } from "@/interfaces/imagesProps";

// Pary: najpierw zdjęcie "przed" (_1), potem "po" (_2).
// Tytuł pary jest w pierwszym zdjęciu.
const galleryImages: imagesProps[] = [
  { imageName: "przed_po1_1", imagePath: przed_po1_1, title: "Škoda Fabia I" },
  { imageName: "przed_po1_2", imagePath: przed_po1_2 },
  { imageName: "przed_po2_1", imagePath: przed_po2_1, title: "Seat Ibiza IV" },
  { imageName: "przed_po2_2", imagePath: przed_po2_2 },
  { imageName: "przed_po3_1", imagePath: przed_po3_1, title: "Seat Leon II" },
  { imageName: "przed_po3_2", imagePath: przed_po3_2 },
  { imageName: "przed_po4_1", imagePath: przed_po4_1, title: "Seat Altea" },
  { imageName: "przed_po4_2", imagePath: przed_po4_2 },
  { imageName: "przed_po5_1", imagePath: przed_po5_1, title: "Audi A3 8P" },
  { imageName: "przed_po5_2", imagePath: przed_po5_2 },
  { imageName: "przed_po6_1", imagePath: przed_po6_1, title: "Opel Astra H" },
  { imageName: "przed_po6_2", imagePath: przed_po6_2 },
];

const additionalGalleryImages: imagesProps[] = [
  { imageName: "bmw1", imagePath: bmw1, title: "BMW serii 1" },
  { imageName: "bmw2", imagePath: bmw2, title: "BMW serii 1 – przód" },
  { imageName: "bmw3", imagePath: bmw3, title: "BMW serii 1 – tył" },
  { imageName: "volkswagen1", imagePath: volkswagen1, title: "Volkswagen Golf II" },
  { imageName: "volkswagen2", imagePath: volkswagen2, title: "Volkswagen Golf II – przód" },
  { imageName: "volkswagen3", imagePath: volkswagen3, title: "Volkswagen Golf IV" },
  { imageName: "seat", imagePath: seat, title: "Seat Leon" },
];

export const Gallery = () => {
  useEffect(() => {
    document.title = "Galeria realizacji – Auto Detailing Jarosz";
  }, []);

  return (
    <main>
      <TitleBar title="Galeria" marginTop="mt-14" />

      <p className="mx-auto mt-4.5 max-w-[620px] px-6 text-center text-[17px] leading-relaxed text-muted-light">
        Prawdziwe auta naszych klientów. Przy parach{" "}
        <span className="font-bold text-primary-300">przed / po</span>{" "}
        przeciągnij suwak, żeby zobaczyć różnicę.
      </p>

      <GalleryContainer
        images={galleryImages}
        additionalImages={additionalGalleryImages}
      />
    </main>
  );
};
