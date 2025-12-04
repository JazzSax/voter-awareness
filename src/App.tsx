import { useEffect, useState } from "react";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import { DATA } from "./content";
function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    const getPageFromPath = () => {
      const path = window.location.pathname.replace("/voter-awareness", "");
      setPage(path === "/about" ? "about" : "home");
    };

    getPageFromPath();

    const onPopState = () => getPageFromPath();
    window.addEventListener("popstate", onPopState);

    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const renderPage = () => {
    return page === "about" ? (
      <AboutPage data={DATA} />
    ) : (
      <HomePage data={DATA} />
    );
  };
  return <div>{renderPage()}</div>;
}

export default App;
