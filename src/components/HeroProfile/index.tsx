import React from "react";
import ProgressBar from "@components/ProgressBar";
import useHooks from "@hooks/hero";
import { useLocation } from "react-router-dom";

const HeroInfoPanel: React.FC = () => {
  const { hero } = useHooks();
  const location = useLocation();

  return (
    <div className="hero-info-panel">
      {location.pathname === "/" ? (
        <h2>欢迎！</h2>
      ) : (
        <div className="hero-info">
          <p>
            <strong>Name:</strong> {hero.name}
          </p>

          <div>
            <strong>Health:</strong>
            <ProgressBar currentValue={hero.health} maxValue={hero.maxHealth} />
          </div>

          <div>
            <strong>Magic:</strong>
            <ProgressBar currentValue={hero.magic} maxValue={100} highColor="#007bff" />
          </div>

          <div>
            <strong>Attack:</strong> {hero.attack}
          </div>

          <div>
            <strong>Defense:</strong> {hero.defense}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroInfoPanel;
