import React from "react";
import "./index.css"
import { useNavigate } from 'react-router-dom';

const Start: React.FC = () => {
    const navigate = useNavigate();

    const handleStartGame = () => {
      navigate('/game');
    };

    const exit = () => {
        window.close();
    };

  return (
    <div className="menu-container">
      <h1 className="menu-title">Game Menu</h1>
      <ul className="menu-list">
        <li>
          <button className="menu-item" onClick={handleStartGame}>Start Game</button>
        </li>
        <li>
          <button className="menu-item">Load Game</button>
        </li>
        <li>        
          <button className="menu-item" onClick={exit}>Exit</button>
        </li>
      </ul>
    </div>
  );
};

export default Start;
