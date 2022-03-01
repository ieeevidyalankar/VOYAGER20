import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import CardsContainer from "./components/CardsContainer";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Workshop from "./components/Workshop/Workshop";
import TechTalks from "./components/Tech Talks/TechTalks";
import Competitions from "./components/Competitions/Competitions";
import FunEvents from "./components/Fun Event/FunEvents";
import { useEffect } from "react";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="workshop" element={<Workshop />} />
          <Route path="tech-talks" element={<TechTalks />} />
          <Route path="competitions" element={<Competitions />} />
          <Route path="fun-events" element={<FunEvents />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const Home = () => {
  return (
    <div className="home">
      <Header />
      <About />
      <CardsContainer />
      <Timeline />
      <Footer />
    </div>
  );
};

export default App;
