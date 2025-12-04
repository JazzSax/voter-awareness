import React from "react";
import IntroSection from "./IntroSection";
import CategoryBlock from "./CategoryBlock";

interface PageProps {
  data: {
    title: string;
    copy: string;
    images: string[];
  }[];
}

const AboutPage: React.FC<PageProps> = ({ data }) => {
  return (
    <main className="w-full flex flex-col">
      <IntroSection />

      <div className="px-6 lg:px-20 py-16">
        {data.map((block, idx) => (
          <CategoryBlock
            key={idx}
            title={block.title}
            copy={block.copy}
            images={block.images}
          />
        ))}
      </div>
    </main>
  );
};
export default AboutPage;
