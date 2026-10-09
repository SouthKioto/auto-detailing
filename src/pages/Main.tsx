import { AboutUs } from "@/components/AboutUs";
import { Map } from "@/components/Map";
import { Slider } from "@/components/Slider";
import { SocialsBar } from "@/components/SocialsBar";
import { TitleBar } from "@/components/TitleBar";
import { Gallery } from "@/components/Gallery";
import type { imagesProps } from "@/interfaces/imagesProps";

import bmw1 from "../img/photos/bmw1.jpg";
import bmw2 from "../img/photos/bmw2.jpg";
import bmw3 from "../img/photos/bmw3.jpg";
import volkswagen1 from "../img/photos/volkswagen1.jpg";
import volkswagen2 from "../img/photos/volkswagen2.jpg";
import volkswagen3 from "../img/photos/volkswagen3.jpg";
import seat from "../img/photos/seat.jpg";

import przed_po1 from "../img/przed_po/przed_po1.png";
import przed_po2 from "../img/przed_po/przed_po2.png";
import przed_po3 from "../img/przed_po/przed_po3.png";
import przed_po4 from "../img/przed_po/przed_po4.png";
import przed_po5 from "../img/przed_po/przed_po5.png";

const images: imagesProps[] = [
  {
    imageName: "test1",
    imagePath: bmw1,
  },

  {
    imageName: "test2",
    imagePath: bmw2,
  },

  {
    imageName: "test3",
    imagePath: bmw3,
  },

  {
    imageName: "test4",
    imagePath: volkswagen1,
  },

  {
    imageName: "test5",
    imagePath: volkswagen2,
  },
  {
    imageName: "test1",
    imagePath: volkswagen3,
  },

  {
    imageName: "test1",
    imagePath: seat,
  },
];

const galleryImages: imagesProps[] = [
  {
    imageName: "test1",
    imagePath: przed_po1,
  },
  {
    imageName: "test2",
    imagePath: przed_po2,
  },
  {
    imageName: "test3",
    imagePath: przed_po3,
  },

  {
    imageName: "test3",
    imagePath: przed_po4,
  },
  {
    imageName: "test3",
    imagePath: przed_po5,
  },
];

export const Main = () => {
  return (
    <>
      <div className="w-screen overflow-x-hidden">
        <SocialsBar />
        <Slider images={images} />

        <TitleBar title="O nas" marginTop="mt-10" />
        <AboutUs />

        <TitleBar title="Nasza praca" marginTop="mt-10" />
        <Gallery images={galleryImages} elemHeight={60} />

        <TitleBar title="Nasza lokalizacja" marginTop="mt-10" />
        <Map />
      </div>
    </>
  );
};
