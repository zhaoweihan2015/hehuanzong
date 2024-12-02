import React, { useState, useRef, useEffect } from "react";
import useHero from "../../hooks/hero";
import useGameState from "../../hooks/world";
import events from "../../data/event";
import { handleOptionText, handleText } from "./utils";
import "./index.css"; // 引入样式文件
import "./text.css";
import { EventOption } from "../../data/event/type";
import classNames from "classnames";

const Game: React.FC = () => {
  const { hero, updateHero } = useHero();
  const { gameState, updateGameState } = useGameState();

  const [text, setText] = useState<React.ReactElement[]>([]);
  const [options, setOptions] = useState<any[]>([]);

  const handleOptionClick = (option: EventOption) => {
    if (option && option.enable(hero)) {
      const result = option.happen(hero);
      updateHero(result.hero);

      updateGameState({
        eventId: result.nextEvent,
      });
    }
  };

  useEffect(() => {
    const currentEvent = events[gameState.eventId] ?? {};

    setText([...text, handleText(currentEvent, text.length)]);

    setOptions(
      currentEvent.options?.map((option, index) => (
        <li
          className={classNames({
            enable: option.enable(hero),
          })}
          key={`option${index}`}
          onClick={() => handleOptionClick(option)}
        >
          {handleOptionText(option, index)}
        </li>
      )) ?? []
    );
  }, [gameState.eventId]);

  const textBoxRef = useRef<HTMLDivElement>(null); // 创建引用
  useEffect(() => {
    // 当文本更新时，滚动到最底部
    if (textBoxRef.current) {
      textBoxRef.current.scrollTop = textBoxRef.current.scrollHeight;
    }
  }, [text]);

  return (
    <div className="game-container">
      <div className="text-box" ref={textBoxRef}>
        {text.map((item, index) => (
          <div key={`text${index}`}>{item}</div>
        ))}
      </div>
      <ul className="options">{options}</ul>
    </div>
  );
};

export default Game;
