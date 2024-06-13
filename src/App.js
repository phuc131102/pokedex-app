import React, { useEffect, useState } from "react";

import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppRoutes from "./routes/Routes";
import TopBar from "./components/TopBar/TopBar";
import ToTop from "./components/toTop/toTop";

function App() {
  useEffect(() => {
    document.title = "Pokedex App";
  }, []);
  const [showJapaneseName, setShowJapaneseName] = useState(() => {
    const saved = localStorage.getItem("showJapaneseName");
    return saved !== null ? JSON.parse(saved) : false;
  });
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  const handleNameSwitchChange = (checked) => {
    setShowJapaneseName(checked);
    localStorage.setItem("showJapaneseName", JSON.stringify(checked));
  };

  return (
    <div className="app-wrapper">
      <Router>
        <ToTop />
        <TopBar onNameSwitchChange={handleNameSwitchChange} isMd={isMd} />
        <AppRoutes showJapaneseName={showJapaneseName} isMd={isMd} />
        <ScrollToTop smooth />
      </Router>
    </div>
  );
}

export default App;
