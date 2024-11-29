import { Events } from "../type";

const map = {
  "0": "???",
};

export const start: Events = {
  "0": {
    title: "一切的开始",
    map: map[0],
    entryConditions: () => true,
    type: "normal",
    text: <div>???</div>,
    options: [
      {
        text: "???",
        enable: () => true,
        happen: (hero) => {
          return {
            hero: {
                ...hero,
              maxHealth: hero.maxHealth + 100,
              attack: hero.attack + 10,
              defense: hero.defense + 10,
              magic: hero.magic + 10,
            },
            nextEvent: "0-1",
          };
        },
      },
      {
        text: "???",
        description: "扯淡",
        enable: () => true,
        happen: (hero) => {
          return {
            hero: hero,
            nextEvent: "0-2",
          };
        },
      },
    ],
  },
  "0-1": {
    title: "???1",
    map: map[0],
    entryConditions: () => true,
    type: "normal",
    text: <div>11</div>,
  },
  "0-2": {
    title: "???2",
    map: map[0],
    entryConditions: () => true,
    type: "normal",
    text: <div>22</div>,
  },
};
