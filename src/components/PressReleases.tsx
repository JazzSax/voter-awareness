import Sliders from "./Sliders";

function PressRelease() {
  const modules: Record<string, string> = import.meta.glob(
    "../assets/press-releases/*",
    { eager: true, as: "url" }
  );

  const images: string[] = Object.values(modules);
  const title: string = "Press Releases";
  const id: string = "press-releases";
  return <Sliders title={title} images={images} id={id} />;
}
export default PressRelease;
