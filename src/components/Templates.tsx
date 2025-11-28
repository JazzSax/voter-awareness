import Sliders from "./Sliders";

function Templates() {
  const modules: Record<string, string> = import.meta.glob(
    "../assets/templates/*",
    { eager: true, as: "url" }
  );

  const images: string[] = Object.values(modules);
  const title: string = "Templates";
  const id: string = "templates";
  return <Sliders title={title} images={images} id={id} />;
}
export default Templates;
