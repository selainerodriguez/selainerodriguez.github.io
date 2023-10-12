import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom"
import Home from './home/home.js';
import Portfolio from './portfolio/portfolio';
import Teaching from './teaching/teaching';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="portfolio" element={ <Portfolio/> } />
        <Route path="teaching" element={ <Teaching/> } />
      </Routes>
    </div>
  )
}
