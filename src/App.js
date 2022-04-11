import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import PlatformPage from "./pages/platform";
import RoadmapPage from "./pages/roadmap";
// import CharityPage from "./pages/charity";
import GalleryPage from "./pages/gallery";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stellarspace" element={<PlatformPage />} />
        <Route path="/visionboard" element={<RoadmapPage />} />
        {/* <Route path="/charity" element={<CharityPage />} /> */}
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
