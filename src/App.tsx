import { useState } from "react";
import Sliders from "./components/Sliders";
import Introduction from "./components/Introduction";
import clsx from "clsx";
import FlyerCard from "./components/Flyers";
import PosterCard from "./components/Posters";
import TemplateCard from "./components/Templates";
import PressReleaseCard from "./components/PressReleases";

function App() {
  const [slider, setSlider] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const changeSlider = () => {
    setSlider((prev) => !prev);
  };
  return (
    <main className="lg:h-screen lg:snap-y lg:snap-mandatory lg:overflow-y-scroll relative">
      <Introduction>
        <div className="flex flex-col lg:flex-row justify-between items-center flex-1">
          <FlyerCard openSlider={changeSlider} setImages={setImages} />
          <PosterCard openSlider={changeSlider} setImages={setImages} />
          <TemplateCard openSlider={changeSlider} setImages={setImages} />
          <PressReleaseCard openSlider={changeSlider} setImages={setImages} />
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
}

export default App;
