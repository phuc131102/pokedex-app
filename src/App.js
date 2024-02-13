import React, { useEffect } from "react";

import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./routes/Routes";
import TopBar from "./components/TopBar/TopBar";
import ScrollToTop from "./components/toTop/toTop";

function App() {
  useEffect(() => {
    document.title = "Pokedex App";
  }, []);

  return (
    <div className="app-wrapper">
      <Router>
        <ScrollToTop />
        <TopBar />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
