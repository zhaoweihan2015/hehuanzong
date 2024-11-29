# 一个正在制作中的文字冒险类游戏框架

## 项目结构

- src/pages/Game/index.tsx 游戏主页面
- src/layout/index.tsx 游戏布局
- src/components/HeroProfile/index.tsx 英雄信息面板

# 项目结构详细介绍

- **src/hooks/**: 存放自定义 Hook 的目录

  - **world.ts**: 管理游戏状态的 Hook，包含游戏日期、时间和位置等信息。
  - **hero.ts**: 管理英雄信息的 Hook，包含英雄的生命值、攻击力、防御力和魔力等属性。

- **src/pages/**: 存放页面组件的目录

  - **Game/**: 游戏主页面的相关文件
    - **index.tsx**: 游戏主页面的逻辑和布局。
    - **index.css**: 游戏主页面的样式文件。

- **src/layout/**: 存放布局组件的目录

  - **index.tsx**: 游戏的整体布局，包含侧边栏和主内容区域。

- **src/components/**: 存放可复用组件的目录
  - **HeroProfile/**: 英雄信息面板组件，展示当前英雄的状态和属性。
