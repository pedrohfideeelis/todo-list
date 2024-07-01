import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  return(
    <header>
        <div className={styles.infos}>
            <h1>MyTodo</h1>
            <span>Bem vindo {}</span>
        </div>

        <div className="cards">
            {/*CARDS*/}
        </div>
    </header>
  );
};
