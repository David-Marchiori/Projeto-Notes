import { TbTrash } from "react-icons/tb";
import styles from "./Notas.module.css";
import { ChangeEvent, useState } from "react";

export interface Notas {
  key: string;
  text: string;
  onDeletNota: (textNota: string) => void;
}

export const Notas = ({ text, onDeletNota }: Notas) => {
  const [notaConcluida, setNotaConcluida] = useState(false);

  function handleDeletNota() {
    onDeletNota(text);
  }

  function atribuiCheck(event: ChangeEvent<HTMLInputElement>) {
    const verificaConclusao = event.target.checked;
    setNotaConcluida(verificaConclusao);
  }

  return (
    <div className={styles.Nota}>
      <div
        className={notaConcluida === true ? styles.Checked : styles.Unchecked}
      >
        <input type="checkbox" onChange={atribuiCheck} />
        <p>{text}</p>
        <button onClick={handleDeletNota}>
          <TbTrash />
        </button>
      </div>
    </div>
  );
};
