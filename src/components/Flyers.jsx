import Sliders from "./Sliders";
function Flyers() {
    const images =  Object.values(
        import.meta.glob("../assets/flyers/*", { eager: true, as: "url" })
        );

    return <Sliders title='Flyers' images={images} id='flyers' />;
}

export default Flyers;