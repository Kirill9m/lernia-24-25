export interface Task {
  id: number;
  label: string;
  completed: boolean;
}

export interface TaskCountProps {
  items: Task[];
}

export interface TaskListProps {
  items: Task[];
  onTaskComplete: (item:Task) => void;
  onTaskDelete: (item:Task) => void;
}

export interface TaskInputProps {
  onCreateItem: (task: Task) => void;
}