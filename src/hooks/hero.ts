import { useState } from 'react';

// 定义英雄信息类型
interface Hero {
  name: string;
  health: number;
  maxHealth: number; // 添加最大生命值
  attack: number;
  defense: number;
  magic: number; // 添加魔力值
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
  });

  // 更新英雄信息
  const updateHero = (newData: Partial<Hero>) => {
    setHero((prevHero) => ({
      ...prevHero,
      ...newData,
    }));
  };

  // 处理事件，直接加减属性值
  const modifyAttributes = (healthChange: number, attackChange: number, defenseChange: number, magicChange: number) => {
    setHero((prevHero) => ({
      ...prevHero,
      health: Math.max(0, prevHero.health + healthChange), // 确保生命值不低于0
      attack: prevHero.attack + attackChange,
      defense: prevHero.defense + defenseChange,
      magic: Math.max(0, prevHero.magic + magicChange), // 确保魔力值不低于0
    }));
  };

  // 返回英雄信息和操作方法
  return {
    hero,
    updateHero,
    modifyAttributes,
  };
};

export default useHero;
