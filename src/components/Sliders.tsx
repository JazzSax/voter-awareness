import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MiddleSlider = ({ images }: { images: string[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 3,
      spacing: 30,
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="relative w-full ">
        <div ref={sliderRef} className="keen-slider">
          {images.map((n) => (
            <div key={n} className="keen-slider__slide flex justify-center">
              <img
                src={n}
                alt="Slider Image"
                className=" h-full object-contain"
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => slider.current?.prev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full text-3xl "
        >
          <ChevronLeft />
        </button>

        <button
          onClick={() => slider.current?.next()}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full text-3xl"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="flex gap-2 mt-4">
        {Array.from({ length: images.length }).map((_, i) => (
          <button
            key={i}
            onClick={() => slider.current?.moveToIdx(i)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === i ? "bg-green-700" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MiddleSlider;
