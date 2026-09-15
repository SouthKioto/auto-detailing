import { Slider } from "@/components/Slider";
import type { imagesProps } from "@/interfaces/imagesProps";
import { Header } from "@/static/Header";

const images: imagesProps[] = [
  {
    imageName: "test1",
    imagePath: "/test1",
  },

  {
    imageName: "test2",
    imagePath: "/test2",
  },

  {
    imageName: "test3",
    imagePath: "/test3",
  },
];

export const Main = () => {
  return (
    <>
      <Slider images={images} />
    </>
  );
};
