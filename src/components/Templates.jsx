import Sliders from "./Sliders";

function Templates() {
    const images = Object.values(
        import.meta.glob("../assets/templates/*", { eager: true, as: "url" })
        );
    return (
        <Sliders title='Templates' images={images} id='templates' />
    )
}
export default Templates;