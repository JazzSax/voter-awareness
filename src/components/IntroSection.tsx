import React from "react";

const IntroSection: React.FC = () => {
  return (
    <div className="relative w-full h-[80vh] grid  grid-cols-12 about-bg">
      <div
        className="lg:col-span-8 col-span-12 text-white flex flex-col justify-center items-start px-6 lg:px-20 h-full z-1"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.9) 0%,  rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.6) 70% , rgba(0,0,0,0.3) 80% , rgba(0,0,0,0) 90%)",
        }}
      >
        <h1 className="text-5xl font-bold mb-4">Creative Assets Library</h1>
        <p className="text-lg opacity-90">
          Browse posters, flyers, templates, and press release designs from the
          archive.
        </p>
      </div>
    </div>
  );
};

export default IntroSection;
