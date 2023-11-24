import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>Bem-vindo</h1>
      <p>
        Seja bem-vindo ao nosso espaço dedicado à saúde mental. Estamos aqui
        para guiá-lo em uma jornada de autoconhecimento, apoio e cura. Sinta-se
        em casa!
      </p>
    </div>
  );
}
