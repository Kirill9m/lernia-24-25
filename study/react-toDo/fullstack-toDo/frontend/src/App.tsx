import { useEffect, useState } from "react";
import TaskCount from "./components/TaskCount";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { Task } from "./types";

function App() {
  const [items, setItems] = useState<Task[]>([]);

  useEffect(() => {
    async function loadTasks() {
      const response = await fetch('api/tasks');
      const payload = await response.json();
      setItems(payload.data);
    }

    loadTasks();
  }, [])

  return (
    <main className="app">
      <h1 className="app__header">My ToDo</h1>
      <TaskCount items={items} />
      <TaskInput onCreateItem={async (newItem) => {
        const response = await fetch('api/tasks', {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newItem)
        });

        if(response.status === 201) {
          const payload = await response.json();
          const createdTask = payload.data;
          setItems([...items, createdTask]);
        }else{
          console.log('ERROR')
        }
          setItems([...items, { ...newItem, completed: false, }]);
      }} />
      <TaskList items={items} onTaskComplete={(item) => {
        setItems(
          items.map((oldItem) => ({
            ...oldItem, completed: oldItem == item ? !item.completed : oldItem.completed,
          })));
      }}
      onTaskDelete={(item) => {
        setItems(items.filter((oldItem) => oldItem != item));
      }} />
    </main>
  );
}

export default App;
