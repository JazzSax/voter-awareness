import { Check } from "lucide-react";
import Card from "./Card";
function Introduction() {
  const modules: Record<string, string> = import.meta.glob(
    "../assets/posters/*",
    { eager: true, as: "url" }
  );
  const images: string[] = Object.values(modules);
  return (
    <section className="main-section main-bg">
      <div className="flex flex-col gap-12 h-full">
        <div className="flex flex-col gap-4 flex-1">
          <h1 className="lg:text-7xl text-4xl text-white font-sans mb-4">
            Voter's Awareness Materials
            {/* <Typewriter
            words={[
              "This is for Voter's Awareness",
              "Explore and Learn",
              "Awareness is Power",
            ]}
            cursor
            cursorStyle="|"
            cursorBlinking={true}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            loop={false}
          /> */}
          </h1>
          <p className="lg:text-lg text-md text-white max-w-2xl leading-relaxed">
            This website provides clear, accessible, and visually engaging
            materials designed to help Filipinos understand the current
            political landscape. Explore posters, templates, infographics, and
            awareness visuals that break down key issues, highlight important
            civic responsibilities, and promote informed decision-making.
          </p>
          <ul className="flex flex-col gap-2 mt-4">
            <li className="text-white flex items-center gap-2 lg:text-md text-lg ">
              <Check className="bg-green-600" /> Help you recognize
              misinformation
            </li>
            <li className="text-white flex items-center gap-2 lg:text-md text-lg ">
              <Check className="bg-green-600" /> Understand political updates
              and public issues
            </li>
            <li className="text-white flex items-center gap-2 lg:text-md text-lg">
              <Check className="bg-green-600" /> Encourage responsible, educated
              voting
            </li>
            <li className="text-white flex items-center gap-2 lg:text-md text-lg">
              <Check className="bg-green-600" /> Spark conversations that lead
              to positive change
            </li>
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row justify-between flex-1 ">
          <Card images={images} title="Flyers" />
          <Card images={images} title="Posters" />
          <Card images={images} title="Templates" />
          <Card images={images} title="Press Releases" />
        </div>
      </div>
    </section>
  );
}
export default Introduction;
