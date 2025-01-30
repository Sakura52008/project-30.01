// src/App.js
import React, { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import './index.css';
import catImage from './assets/чупик.png';  

const App = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <header>
        <img 
          src={catImage} 
          alt="Cat" 
          onClick={toggleTheme} 
          style={{ width: '50px', cursor: 'pointer' }} 
        />
      </header>

      <main>
        <h1> Тема HG</h1>
        <p>
          Колузонов Роман и Роман выполнил задания  
        </p>
      </main>
    </div>
  );
};

export default App;
