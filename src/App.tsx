import { Header } from "./components/Header";
import { v4 as uuidv4 } from "uuid";
import "./global.css";
import { InputTask } from "./components/InputTask";
import TaskSummary from "./components/TaskSummary";
import { Tasks } from "./components/Tasks";
import { NothingToShow } from "./components/NothingToShow";
import { useState } from "react";

export interface TaskType {
  id: string;
  isCompleted: boolean;
  title: string;
}

export interface TaskProps {
  task: TaskType;
}

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  function handleCreateTask(title: string) {
    const newTask = {
      id: uuidv4(),
      isCompleted: false,
      title,
    };

    setTasks([...tasks, newTask]);
  }

  const tasksCreated = tasks.length;
  const tasksCompleted = tasks.filter((task) => task.isCompleted).length;
  return (
    <div>
      <Header />
      <InputTask onAddTask={handleCreateTask} />
      <main>
        <TaskSummary
          tasksCreated={tasksCreated}
          tasksCompleted={tasksCompleted}
        />
        {tasks.length > 0 ? (
          tasks.map((task) => <Tasks key={task.id} task={task} />)
        ) : (
          <NothingToShow />
        )}
      </main>
    </div>
  );
}

export default App;
