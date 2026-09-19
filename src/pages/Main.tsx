import { AboutUs } from "@/components/AboutUs";
import { Map } from "@/components/Map";
import { Slider } from "@/components/Slider";
import { SocialsBar } from "@/components/SocialsBar";
import { TitleBar } from "@/components/TitleBar";
import type { imagesProps } from "@/interfaces/imagesProps";

import bmw1 from "../img/photos/bmw1.jpg";
import bmw2 from "../img/photos/bmw2.jpg";
import bmw3 from "../img/photos/bmw3.jpg";
import volkswagen1 from "../img/photos/volkswagen1.jpg";
import volkswagen2 from "../img/photos/volkswagen2.jpg";
import volkswagen3 from "../img/photos/volkswagen3.jpg";
import seat from "../img/photos/seat.jpg";

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

export const Main = () => {
  return (
    <>
      <div className="w-screen">
        <SocialsBar />

        <Slider images={images} />

        <TitleBar title="O nas" marginTop="mt-10" />
        <AboutUs />

        <TitleBar title="Nasza lokalizacja" marginTop="mt-10" />
        <Map />
      </div>
    </>
  );
};
