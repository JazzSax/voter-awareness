import Card from "./Cards";
export default function FlyerCard({
  openSlider,
  setImages,
}: {
  openSlider?: () => void;
  setImages?: (images: string[]) => void;
}) {
  const modules: Record<string, string> = import.meta.glob(
    "../assets/flyers/*",
    { eager: true, as: "url" }
  );
  const images: string[] = Object.values(modules);
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
