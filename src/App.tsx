import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import { DATA } from "./content";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage data={DATA} />} />
        <Route path="/about" element={<AboutPage data={DATA} />} />
      </Routes>
    </Router>
  );
}

export default App;
