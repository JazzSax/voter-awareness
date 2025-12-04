import Card from "./Cards";
export default function FlyerCard({
  images,
  openSlider,
  setImages,
}: {
  images: string[];
  openSlider?: () => void;
  setImages?: (images: string[]) => void;
}) {
  const handleClick = () => {
    if (setImages) {
      setImages(images);
    }
    if (openSlider) {
      openSlider();
    }
  };
  return <Card images={images} title="Flyers" onClick={handleClick} />;
}
