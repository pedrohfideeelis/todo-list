import { Header } from "./components/HeaderComponent/Header";
import { Tasks } from "./components/TasksComponent/Tasks";
import "./styles/global.css";

function App() {
  return (
    <>
      <Header userName="Pedro Henrique" />
      <Tasks />
    </>
  );
}

export default App;
