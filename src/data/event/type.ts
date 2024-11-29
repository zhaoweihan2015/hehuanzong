import { Hero } from "@hooks/hero";
import React from "react";

export type EventType = "normal" | "fight";

export interface EventOption {
  text: string;
  description?: string;
  enable: (hero: Hero) => boolean;
  happen: (hero: Hero) => {
    hero: Hero;
    nextEvent: string;
  };
}

export interface EventInfo {
  title: string;
  map: string;
  entryConditions: (hero: Hero) => boolean | string; // 进入条件
  type: EventType;
  text: React.ReactElement; // 事件描述
  options?: EventOption[]; // 可选选项
}

export type Events = Record<string, EventInfo>;
