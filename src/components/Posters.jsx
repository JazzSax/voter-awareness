import Sliders from "./Sliders";
function Posters() {
   const images = Object.values(
        import.meta.glob("../assets/posters/*", { eager: true, as: "url" })
        );
    return <Sliders title='Posters' images={images} id='posters' />;
}

export default Posters;