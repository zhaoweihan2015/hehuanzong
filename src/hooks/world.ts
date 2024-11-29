import { useState } from 'react';

// 定义游戏状态类型
interface GameState {
  date: string; // 当前游戏剧情内的日期
  timeOfDay: '早上' | '下午' | '晚上' | '半夜' | '凌晨'; // 当前时间状态
  eventId: string; // 当前所在位置
}

const useGameState = () => {
  // 初始化游戏状态
  const [gameState, setGameState] = useState<GameState>({
    date: new Date().toLocaleDateString(), // 设置当前日期
    timeOfDay: '早上', // 默认时间状态
    eventId: '0', // 默认位置
  });

  // 更新游戏状态
  const updateGameState = (newData: Partial<GameState>) => {
    setGameState((prevState) => ({
      ...prevState,
      ...newData,
    }));
  };

  // 返回游戏状态和更新方法
  return {
    gameState,
    updateGameState,
  };
};

export default useGameState;
