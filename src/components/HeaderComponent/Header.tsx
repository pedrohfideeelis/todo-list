import { useContext } from "react";
import { StatsCards } from "../StatsCardsComponent/StatsCards";
import { TasksContext } from "../../context/TasksContext";
import styles from "./styles.module.scss";
interface HeaderProps {
  userName: string;
}

export const Header: React.FC<HeaderProps> = ({ userName }) => {
  const { tasks } = useContext(TasksContext);
  const totalTasks = tasks.length;

  const totalPending = tasks.reduce((total, task) => {
    if (!task.done) return total + 1;
    return total;
  }, 0);

  const totalDone = totalTasks - totalPending;

  return (
    <header className={styles.infos}>
      <div className={styles.container}>
        <div>
          <h1>MyTodo</h1>
          <span>Bem vindo, {userName}</span>
        </div>
        <div className="cards">
          <StatsCards title="Total de Tarefas" value={totalTasks} />
          <StatsCards title="Tarefas Pendentes" value={totalPending} />
          <StatsCards title="Tarefas Concluídas" value={totalDone} />
        </div>
      </div>
    </header>
  );
};
