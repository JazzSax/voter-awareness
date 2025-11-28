import Sliders from "./Sliders";

function PressRelease() {
    const images = Object.values(
        import.meta.glob("../assets/press-release/*", { eager: true, as: "url" })
    );
    return <Sliders title='Press Releases' images={images} id='press-releases' />;
}
export default PressRelease;