import Card from "./Cards";

export default function PosterCard({
  openSlider,
  setImages,
}: {
  openSlider?: () => void;
  setImages?: (images: string[]) => void;
}) {
  const modules: Record<string, string> = import.meta.glob(
    "../assets/posters/*",
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
  return <Card images={images} title="Posters" onClick={handleClick} />;
}
