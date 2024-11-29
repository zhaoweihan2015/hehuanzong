import { useState } from 'react';

// 定义英雄信息类型
export interface Hero {
  name: string;
  health: number;
  maxHealth: number; // 添加最大生命值
  attack: number;
  defense: number;
  magic: number; // 添加魔力值
  money: number; // 添加金钱属性
}

const useHero = () => {
  // 初始化英雄信息
  const [hero, setHero] = useState<Hero>({
    name: '',
    health: 100,
    maxHealth: 100, // 设置默认最大生命值
    attack: 0,
    defense: 0,
    magic: 50, // 设置默认魔力值
    money: 0, // 设置默认金钱为0
  });

  // 更新英雄信息
  const updateHero = (newData: Partial<Hero>) => {
    setHero((prevHero) => ({
      ...prevHero,
      ...newData,
    }));
  };

  // 返回英雄信息和操作方法
  return {
    hero,
    updateHero,
  };
};

export default useHero;
