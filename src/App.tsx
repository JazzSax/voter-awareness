import { useState } from "react";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import { DATA } from "./content";
import Logo from "./assets/logo/logo.png";
import { cn } from "./lib/utils";
function App() {
  const [page, setPage] = useState("home");
  const navigate = (target: string) => {
    const url =
      target === "home" ? "/voter-awareness/" : "/voter-awareness/about";
    window.history.pushState(null, "", url);
    setPage(target);
  };

  const renderPage = () => {
    return page === "about" ? (
      <AboutPage data={DATA} />
    ) : (
      <HomePage data={DATA} />
    );
  };
  return (
    <>
      <nav
        className={cn(
          "p-4 bg-white dark:bg-black shadow-md flex justify-between items-center font-sans",
          page === "home" && "dark"
        )}
      >
        <img src={Logo} alt="Logo" className="h-12" />

        <ul className="flex space-x-6 text-black dark:text-white text-lg font-medium">
          <li>
            <button
              onClick={() => navigate("home")}
              className="hover:text-blue-600 transition-colors duration-300"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("about")}
              className="hover:text-blue-600 transition-colors duration-300"
            >
              About
            </button>
          </li>
        </ul>
      </nav>
      <div>{renderPage()}</div>;
    </>
  );
}

export default App;
