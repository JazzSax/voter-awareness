export default function Card({
  images,
  title,
  onClick,
}: {
  images: string[];
  title?: string;
  onClick?: () => void;
}) {
  const [image1, image2, image3] = images;
  return (
    <div
      className="relative w-80 h-80 mb-40 lg:mb-4 pointer-events-auto cursor-pointer"
      onClick={onClick}
    >
      <img
        src={image1}
        alt="Card Image 1"
        className="w-60 h-60 absolute top-1/2 -translate-y-1/2  left-0"
      />
      <img
        src={image2}
        alt="Card Image 1"
        className="w-60 h-60 absolute bottom-0 left-1/2 -translate-x-1/2"
      />
      <img
        src={image3}
        alt="Card Image 1"
        className="w-60 h-60 absolute top-0 right-0"
      />
      <p className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-25 px-4 py-2 font-semibold shadow-lg text-3xl text-center line-clamp-2">
        <span className="absolute inset-0 -z-10 bg-green-700 opacity-80 blur-xl rounded-lg"></span>
        {title}
      </p>
    </div>
  );
}
