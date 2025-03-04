import { Header } from "./components/Header";
import { InputTask } from "./components/InputTask";
import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <InputTask />
      </main>
    </div>
  );
}

export default App;
