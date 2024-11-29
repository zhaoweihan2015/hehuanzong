import { EventInfo, EventOption } from "../../data/event/type";

export const handleText = (events: EventInfo, index: number) => {
  return (
    <div key={`text2${index}`}>
      <div className="title">{events.title}</div>
      <div>{events.text}</div>
    </div>
  );
};

export const handleOptionText = (option: EventOption, index: number) => {
  return (
    <div className="option" key={`text${index}`}>
      {option.text}
      <span className="description" key={`description${index}`}>{option.description}</span>
    </div>
  );
};
