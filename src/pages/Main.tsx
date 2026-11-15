import { AboutUs } from "@/components/AboutUs";
import { Map } from "@/components/Map";
import { Slider } from "@/components/Slider";
import { TitleBar } from "@/components/TitleBar";
import type { imagesProps } from "@/interfaces/imagesProps";

import bmw1 from "../img/photos/bmw1.webp";
import bmw2 from "../img/photos/bmw2.webp";
import bmw3 from "../img/photos/bmw3.webp";
import volkswagen1 from "../img/photos/volkswagen1.webp";
import volkswagen2 from "../img/photos/volkswagen2.webp";
import volkswagen3 from "../img/photos/volkswagen3.webp";
import seat from "../img/photos/seat.webp";

// imageName służy jako tekst alternatywny (alt) zdjęcia
const images: imagesProps[] = [
  { imageName: "BMW serii 1 po detailingu", imagePath: bmw1 },
  { imageName: "BMW serii 1 – przód po detailingu", imagePath: bmw2 },
  { imageName: "BMW serii 1 – tył po detailingu", imagePath: bmw3 },
  { imageName: "Volkswagen Golf II po detailingu", imagePath: volkswagen1 },
  { imageName: "Volkswagen Golf II – przód po detailingu", imagePath: volkswagen2 },
  { imageName: "Volkswagen Golf IV po detailingu", imagePath: volkswagen3 },
  { imageName: "Seat Leon po detailingu", imagePath: seat },
];

export const Main = () => {
  return (
    <>
      <div className="w-full overflow-x-hidden">
        <Slider images={images} />

        <TitleBar title="O nas" marginTop="mt-10" />
        <AboutUs />

        <section id="dojazd" className="scroll-mt-24">
          <TitleBar title="Nasza lokalizacja" marginTop="mt-10" />
          <Map />
        </section>
      </div>
    </>
  );
};
