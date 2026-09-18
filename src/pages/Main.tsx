import { AboutUs } from "@/components/AboutUs";
import { Map } from "@/components/Map";
import { Slider } from "@/components/Slider";
import { TitleBar } from "@/components/TitleBar";
import type { imagesProps } from "@/interfaces/imagesProps";

const images: imagesProps[] = [
  {
    imageName: "test1",
    imagePath:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp9073908.jpg&f=1&nofb=1&ipt=999bd9c688fa536458f3ba164dd8fcda8cddbc90894697ad6b989a08eb211458",
  },

  {
    imageName: "test2",
    imagePath:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp3543139.jpg&f=1&nofb=1&ipt=b5716bbc6451a0e5b3f986c40723a108d0c2d45091d7a5553c81e1027d1ca063",
  },

  {
    imageName: "test3",
    imagePath:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F7a%2F84%2F39%2F7a843904932272b1b51250c5d9f98225.jpg&f=1&nofb=1&ipt=7ba607b6fea2a153a67f93e05858ed2c320c7ccfe5f428b0737a5797234a4a30",
  },

  {
    imageName: "test4",
    imagePath:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F7a%2F84%2F39%2F7a843904932272b1b51250c5d9f98225.jpg&f=1&nofb=1&ipt=7ba607b6fea2a153a67f93e05858ed2c320c7ccfe5f428b0737a5797234a4a30",
  },

  {
    imageName: "test5",
    imagePath:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F7a%2F84%2F39%2F7a843904932272b1b51250c5d9f98225.jpg&f=1&nofb=1&ipt=7ba607b6fea2a153a67f93e05858ed2c320c7ccfe5f428b0737a5797234a4a30",
  },
];

export const Main = () => {
  return (
    <>
      <div className="w-screen">
        <TitleBar title="Galeria" marginTop="mt-30" />
        <Slider images={images} />

        <TitleBar title="O nas" marginTop="mt-10" />
        <AboutUs />

        <TitleBar title="Nasza lokalizacja" marginTop="mt-10" />
        <Map />
      </div>
    </>
  );
};
