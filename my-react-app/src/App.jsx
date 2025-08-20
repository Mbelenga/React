import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About darkMode={darkMode} setCurrentPage={setCurrentPage} />;
      case "projects":
        return <Projects darkMode={darkMode} setCurrentPage={setCurrentPage} />;
      case "skills":
        return <Skills darkMode={darkMode} setCurrentPage={setCurrentPage} />;
      case "contact":
        return <Contact darkMode={darkMode} setCurrentPage={setCurrentPage} />;
      default:
        return <Home darkMode={darkMode} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setCurrentPage={setCurrentPage}
      />
      {renderPage()}
    </div>
  );
}

export default App;