import { useState } from "react";
import styles from "./styles.module.scss";

export const Tasks: React.FC = () => {
  const [taskTitle, settaskTitle] = useState("");
  return (
    <section className={styles.container}>
      <form>
        <div>
          <label htmlFor="task-title">Adicionar Tarefa</label>
          <input
            value={taskTitle}
            onChange={(event) => settaskTitle(event.target.value)}
            type="text"
            id="task-title"
            placeholder="Título da Tarefa"
          />
        </div>
        <button>Adicionar Tarefa</button>
      </form>
    </section>
  );
};
