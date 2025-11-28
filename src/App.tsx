import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import Navigation from "./components/Navigation";
import Introduction from "./components/Introduction";
import Posters from "./components/Posters";
import Flyers from "./components/Flyers";
import Templates from "./components/Templates";
import PressRelase from "./components/PressReleases";
function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };
  return (
    <main className="w-full p-8 min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="grid grid-cols-12 relative ">
        <aside className="fixed left-5 top-50 translate-y-1/2">
          <button
            onClick={toggleTheme}
            className="p-3 bg-gray-200 dark:bg-gray-700 rounded"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
          <Navigation />
        </aside>
        <div className="col-span-8 col-start-3 flex flex-col justify-center items-center">
          <Introduction />
          <Posters />
          <Flyers />
          <Templates />
          <PressRelase />
        </div>
      </div>
    </main>
  );
}

export default App;
