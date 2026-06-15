import "./App.css";

import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import PageShell from "./pageShell.js";
import Home from "./home/home.js";
import Portfolio from "./portfolio/portfolio";
import Teaching from "./teaching/teaching";
import Music from "./music/music.js";

function Layout() {
  const location = useLocation();

  const pageMap = {
    "/": "home",
    "/portfolio": "portfolio",
    "/teaching": "teaching",
    "/music": "music",
  };

  return (
    <PageShell page={pageMap[location.pathname]}>
      <Outlet />
    </PageShell>
  );
}

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/music" element={<Music />} />
        </Route>
      </Routes>
    </div>
  );
}
