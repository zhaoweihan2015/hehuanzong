import { createContext, useContext, useState } from "react";

// 定义游戏状态类型
interface GameState {
  date: string; // 当前游戏剧情内的日期
  timeOfDay: "早上" | "下午" | "晚上" | "半夜" | "凌晨"; // 当前时间状态
  eventId: string; // 当前所在位置
}

interface WorldContextType {
  gameState: GameState;
  updateGameState: (newData: Partial<GameState>) => void;
}

const WorldContext = createContext<WorldContextType>({
  gameState: {
    date: new Date().toLocaleDateString(), // 设置当前日期
    timeOfDay: "早上", // 默认时间状态
    eventId: "0", // 默认位置
  },
  updateGameState: () => {},
});

export const WorldProvide: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const [gameState, setGameState] = useState<GameState>({
    date: new Date().toLocaleDateString(), // 设置当前日期
    timeOfDay: "早上", // 默认时间状态
    eventId: "0", // 默认位置
  });

  // 更新游戏状态
  const updateGameState = (newData: Partial<GameState>) => {
    setGameState((prevState) => ({
      ...prevState,
      ...newData,
    }));
  };

  const contextValue = {
    gameState,
    updateGameState,
  };

  return (
    <WorldContext.Provider value={contextValue}>
      {children}
    </WorldContext.Provider>
  );
};

const useGameState = () => {
  const context = useContext(WorldContext);
  return context;
};

export default useGameState;
