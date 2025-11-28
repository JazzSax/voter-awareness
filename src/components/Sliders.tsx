type SlideProps = {
  title: string;
  images: string[];
  id: string;
};
function Sliders({ title, images, id }: SlideProps) {
  return (
    <div id={id} className="mb-16 w-full">
      <h2 className="heading-2">{title}</h2>
      <div className="flex flex-wrap gap-4 mt-4">
        {images.map((src: string, i: number) => (
          <img
            key={`${id}-${i}-${src}`}
            src={src}
            alt={`${id} ${i + 1}`}
            className="object-cover rounded shadow"
            style={{ width: 240, height: 340 }}
          />
        ))}
      </div>
    </div>
  );
}
export default Sliders;
