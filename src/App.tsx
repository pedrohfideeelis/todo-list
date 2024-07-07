import { Header } from "./components/HeaderComponent/Header";
import { Tasks } from "./components/TasksComponent/Tasks";
import { TasksProvider } from "./context/TasksContext";
import "./styles/global.css";

function App() {
  return (
    <TasksProvider>
      <Header userName="Pedro Henrique" />
      <Tasks />
    </TasksProvider>
  );
}

export default App;
