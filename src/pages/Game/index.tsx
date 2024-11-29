import React, { useState, useRef, useEffect } from "react";
import "./index.css"; // 引入样式文件

const Game: React.FC = () => {
  const [text, setText] = useState<string>(
    "欢迎来到文字冒险游戏！<br/>请选择一个选项："
  );
  const [options] = useState<string[]>(["选项1", "选项2", "选项3"]);
  const textBoxRef = useRef<HTMLDivElement>(null); // 创建引用

  const handleOptionClick = (option: string, clearScreen: boolean = false) => {
    setText((prevText) =>
      clearScreen
        ? `你选择了：${option}<br/>继续冒险...`
        : `${prevText}<br/><br/>你选择了：${option}<br/>继续冒险...`
    );
  };

  useEffect(() => {
    // 当文本更新时，滚动到最底部
    if (textBoxRef.current) {
      textBoxRef.current.scrollTop = textBoxRef.current.scrollHeight;
    }
  }, [text]);

  return (
    <div className="game-container">
      <div
        className="text-box"
        ref={textBoxRef}
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <ul className="options">
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOptionClick(option)}
            style={{ cursor: "pointer" }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Game;
