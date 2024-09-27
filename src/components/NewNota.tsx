import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./NewNota.module.css";
import { Notas } from "./Notas";

export const NewNota = () => {
  const [nota, setNota] = useState("");

  const [listNota, setListNota] = useState<string[]>([]);

  function addNota(event: FormEvent) {
    event.preventDefault();

    setListNota([...listNota, nota]);
    setNota("");
  }

  function novaNotaChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNota(event.target.value);
  }

  function deleteNota(notaToDelet: string) {
    const listaSemaNotaDeletada = listNota.filter((nota) => {
      return nota !== notaToDelet;
    });
    setListNota(listaSemaNotaDeletada);
  }

  return (
    <div className={styles.newNota}>
      <div>
        <form onSubmit={addNota}>
          <input type="text" value={nota} onChange={novaNotaChange} />
          <button>Criar</button>
        </form>
      </div>
      <div className={styles.NotasCampoSpace}>
        <div>
          <p>
            Notas <span>{listNota.length}</span>
          </p>
        </div>
        <div className={styles.NotasCampo}>
          {listNota.map((notas) => (
            <Notas text={notas} key={notas} onDeletNota={deleteNota} />
          ))}
        </div>
      </div>
    </div>
  );
};
