import { useState } from "react";
import Sliders from "./Sliders";
import Introduction from "./Introduction";
import clsx from "clsx";
import FlyerCard from "./Flyers";
import PosterCard from "./Posters";
import TemplateCard from "./Templates";
import PressReleaseCard from "./PressReleases";
interface PageProps {
  data: {
    title: string;
    copy: string;
    images: string[];
  }[];
}
const HomePage: React.FC<PageProps> = ({ data }) => {
  const flyersImages = data.filter((item) => item.title === "Flyers")[0].images;
  const posterImages = data.filter((item) => item.title === "Posters")[0]
    .images;
  const pressReleaseImages = data.filter(
    (item) => item.title === "Press Releases"
  )[0].images;
  const templateImages = data.filter(
    (item) => item.title === "Social Media Templates"
  )[0].images;
  const [slider, setSlider] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const changeSlider = () => {
    setSlider((prev) => !prev);
  };
  return (
    <main className="lg:h-screen lg:snap-y lg:snap-mandatory lg:overflow-y-scroll relative">
      <Introduction>
        <div className="flex flex-col lg:flex-row justify-between items-center flex-1">
          <FlyerCard
            images={flyersImages}
            openSlider={changeSlider}
            setImages={setImages}
          />
          <PosterCard
            images={posterImages}
            openSlider={changeSlider}
            setImages={setImages}
          />
          <TemplateCard
            images={templateImages}
            openSlider={changeSlider}
            setImages={setImages}
          />
          <PressReleaseCard
            images={pressReleaseImages}
            openSlider={changeSlider}
            setImages={setImages}
          />
        </div>
      </Introduction>

      <div
        className={clsx(
          "absolute inset-0 bg-black/90 transition-opacity duration-300 ease-in-out",
          slider
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={changeSlider}
      />
      <div
        className={clsx(
          "fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-2 lg:h-[80vh] flex items-center justify-center transition-opacity duration-300 ease-in-out w-full max-w-[90vw]",
          slider
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {slider && <Sliders images={images} />}
      </div>
    </main>
  );
};

export default HomePage;
