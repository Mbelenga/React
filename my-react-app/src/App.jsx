import React, { useState } from 'react';
import Header from './components/Header'; //import your Header
import Home from "./components/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark bg-gray-900 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
      />

      {/* Example main content */}
      <div className="pt-20 text-center">
        <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4">Current Page: {currentPage}</p>
      </div>
    </div>
  );
}

export default App;
