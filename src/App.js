import React, { useEffect } from "react";

import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

import AppRoutes from "./routes/Routes";
import TopBar from "./components/TopBar/TopBar";
import ToTop from "./components/toTop/toTop";

function App() {
  useEffect(() => {
    document.title = "Pokedex App";
  }, []);

  return (
    <div className="app-wrapper">
      <Router>
        <ToTop />
        <TopBar />
        <AppRoutes />
        <ScrollToTop smooth />
      </Router>
    </div>
  );
}

export default App;
