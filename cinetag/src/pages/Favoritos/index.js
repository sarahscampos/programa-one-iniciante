import React from "react";
import styles from './Favoritos.module.css';
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";

const Favoritos = () => {
  return (
    <>
  
    <Banner imagem="favoritos" />
    <Titulo>
      <h1>Meus Favoritos</h1>
    </Titulo>
    <section className={styles.container}>
      <Card id='1' titulo='teste' capa='https://placehold.co/300x400' />
    </section>

    </>
  );
}

export default Favoritos;