import React from "react";
import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";

const Card = ({id, capa, titulo}) => {
  return (
    <div className={styles.container}>
      <img src={capa} alt={titulo} className={styles.capa}/>
      <h2>{titulo}</h2>
      <img src={iconeFavoritar} alt="Favoritar filme" className={styles.favoritar}/>
    </div>
  );
}

export default Card;