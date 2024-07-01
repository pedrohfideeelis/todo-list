import { StatsCards } from "../StatsCardsComponent/StatsCards";
import styles from "./styles.module.scss";

interface HeaderProps {
  userName: string;
}

export const Header: React.FC<HeaderProps> = ({userName}) => {
  return (
    <header className={styles.infos}>
      <div className={styles.container}>
        <div>
          <h1>MyTodo</h1>
          <span>Bem vindo {userName}</span>
        </div>
        <div className="cards">
          <StatsCards title="Total de Tarefas" value={5}/>
          <StatsCards title="Tarefas Pendentes" value={4}/>
          <StatsCards title="Tarefas Concluídas" value={3}/>
        </div>
      </div>
    </header>
  );
};
