import React from "react";
import ImageDialog from "./ImageDialog";
interface CategoryBlockProps {
  title: string;
  copy: string;
  images: string[];
}

const CategoryBlock: React.FC<CategoryBlockProps> = ({
  title,
  copy,
  images,
}) => {
  return (
    <section className="w-full mb-20">
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      <p className="text-base mb-6 max-w-xl text-muted-foreground">{copy}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <div
            key={`${title}-${i}`}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <ImageDialog src={src} alt={`${title} ${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default CategoryBlock;
