import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom"
import Home from './home.js';
import Portfolio from './portfolio';
import Teaching from './teaching';

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
