import Sliders from "./Sliders";
function Flyers() {
  const modules: Record<string, string> = import.meta.glob(
    "../assets/flyers/*",
    { eager: true, as: "url" }
  );
  const title: string = "Flyers";
  const id: string = "flyers";

  const images: string[] = Object.values(modules);

  return <Sliders title={title} images={images} id={id} />;
}

export default Flyers;
