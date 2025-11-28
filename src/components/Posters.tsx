import Sliders from "./Sliders";

function Posters() {
  const modules: Record<string, string> = import.meta.glob(
    "../assets/posters/*",
    { eager: true, as: "url" }
  );
  const title: string = "Posters";
  const id: string = "posters";

  const images: string[] = Object.values(modules);
  return <Sliders title={title} images={images} id={id} />;
}

export default Posters;
