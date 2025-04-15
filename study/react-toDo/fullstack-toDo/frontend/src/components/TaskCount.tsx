import { TaskCountProps } from "../types";

export default function TaskCount({ items }: TaskCountProps) {
  return (
    <p className="app__status">{items.filter(item => item.completed).length} completed</p>
  );
}