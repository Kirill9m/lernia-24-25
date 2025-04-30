import { FC } from 'react';
import { TaskItem } from '../types';

type Props = {
  items: TaskItem[],
  onTaskDelete: (itemToDelete: TaskItem) => void;
  onTaskComplete: (taskToToggle: TaskItem) => void
}

// export default function TaskList({ items, onTaskComplete, onTaskDelete }: Props) : ReactNode {
// const TaskList: FunctionComponent<Props> = ({ items, onTaskComplete, onTaskDelete }) => {

const TaskList: FC<Props> = ({ items, onTaskComplete, onTaskDelete }) => {
  return (
    <ul className="todoList">
      {items.map((item) => {
        let className = "todoItem";
        if (item.completed) {
          className += " todoItem--completed";
        }

        return (
          <li className={className} onClick={() => {
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

export default TaskList;