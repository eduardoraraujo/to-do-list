import { Header } from "./components/Header";
import { v4 as uuidv4 } from "uuid";
import "./global.css";
import { InputTask } from "./components/InputTask";
import { Task } from "./components/Task";

interface TaskProps {
  id: string;
  isCompleted: boolean;
  title: string;
}

const tasks: TaskProps[] = [
  {
    id: uuidv4(),
    isCompleted: true,
    title:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  },
  {
    id: uuidv4(),
    isCompleted: false,
    title:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  },
];

const tasksCreated = tasks.length;
const tasksCompleted = tasks.filter((task) => task.isCompleted).length;

function App() {
  return (
    <div>
      <Header />
      <InputTask />
      <main>
        <Task tasksCreated={tasksCreated} tasksCompleted={tasksCompleted} />
      </main>
    </div>
  );
}

export default App;
