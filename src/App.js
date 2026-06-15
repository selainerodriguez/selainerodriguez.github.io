import "./App.css";

import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./scrollToTop.js";
import Home from "./home/home.js";
import Portfolio from "./portfolio/portfolio";
import Teaching from "./teaching/teaching";
import Music from "./music/music.js";

export default function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="teaching" element={<Teaching />} />
        <Route path="music" element={<Music />} />
      </Routes>
    </div>
  );
}
