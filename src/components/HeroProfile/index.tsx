import React from "react";
import ProgressBar from "@components/ProgressBar";
import { useLocation } from "react-router-dom";
import useHero from "../../hooks/hero";

const HeroInfoPanel: React.FC = () => {
  const { hero } = useHero();
  const location = useLocation();

  return (
    <div className="hero-info-panel">
      {location.pathname === "/" ? (
        <h2>欢迎！</h2>
      ) : (
        <div className="hero-info">
          <p>
            <strong>姓名:</strong> {hero.name}
          </p>

          <div>
            <strong>生命值:</strong>
            <ProgressBar currentValue={hero.health} maxValue={hero.maxHealth} />
          </div>

          <div>
            <strong>魔力:</strong>
            <ProgressBar currentValue={hero.magic} maxValue={100} highColor="#007bff" />
          </div>

          <div>
            <strong>攻击力:</strong> {hero.attack}
          </div>

          <div>
            <strong>防御力:</strong> {hero.defense}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroInfoPanel;
