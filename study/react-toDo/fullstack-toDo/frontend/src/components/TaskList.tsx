import { TaskListProps } from "../types";

export default function TaskList({ items, onTaskComplete, onTaskDelete }: TaskListProps) {
  return (
  <ul className="todoList">
        {items.map((item, index) => {
          let className = "todoItem";
          if (item.completed) {
            className += " todoItem--completed";
          }

          return (
            <li key={index} className={className} onClick={() => {
              onTaskComplete(item);
            }}>
              <span className="todoItem__label">{item.label}</span>
              <button className="todoItem__deleteButton" onClick={(ev) => {
                onTaskDelete(item);
                ev.stopPropagation();
              }}>
                del
              </button>
            </li>
          );
        })}
      </ul>
  )
}