// import { useState } from "react";
// import { Sun, Moon } from "lucide-react";
// import Navigation from "./components/Navigation";
import Introduction from "./components/Introduction";
// import Posters from "./components/Posters";
// import Flyers from "./components/Flyers";
// import Templates from "./components/Templates";
// import PressRelase from "./components/PressReleases";
function App() {
  // const [theme, setTheme] = useState("light");
  // const toggleTheme = () => {
  //   const newTheme = theme === "dark" ? "light" : "dark";
  //   setTheme(newTheme);
  //   document.documentElement.classList.toggle("dark", newTheme === "dark");
  // };
  return (
    <main className="lg:h-screen lg:snap-y lg:snap-mandatory lg:overflow-y-scroll">
      <Introduction />

      <section className="h-screen snap-start bg-blue-400 flex items-center justify-center">
        <h1 className="text-5xl text-white">Section 2</h1>
      </section>

      <section className="h-screen snap-start bg-green-400 flex items-center justify-center">
        <h1 className="text-5xl text-white">Section 3</h1>
      </section>
    </main>
  );
}

export default App;
