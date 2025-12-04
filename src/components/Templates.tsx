import Card from "./Cards";
export default function TemplateCard({
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
  return <Card images={images} title="Templates" onClick={handleClick} />;
}
