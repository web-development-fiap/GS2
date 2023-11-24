'use client';
import React from 'react';
import styles from './plano.module.css';

const Plano = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h1>Meu Plano</h1>

        <div className={styles.taskBox}>
          <p className={styles.taskTitle}>Reduzir Ansiedade</p>
          <p className={styles.taskTime}>Manhã</p>
          <div className={styles.taskDescription}>
            <p>Praticar técnicas de redução de ansiedade, como:</p>
            <ul className={styles.taskList}>
              <li className={styles.taskListItem}>
                Respiração profunda: Inspire lentamente pelo nariz, segure por
                alguns segundos e expire pelo nariz.
              </li>
              <li className={styles.taskListItem}>
                Meditação mindfulness: Dedique alguns minutos para se concentrar
                no momento presente, focando na respiração.
              </li>
              <li className={styles.taskListItem}>
                Exercícios de relaxamento muscular progressivo: Contrair e
                relaxar os músculos para liberar a tensão.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.taskBox}>
          <p className={styles.taskTitle}>Gerenciar Stress</p>
          <p className={styles.taskTime}>Tarde</p>
          <div className={styles.taskDescription}>
            <p>Adotar métodos para lidar com o estresse, como:</p>
            <ul className={styles.taskList}>
              <li className={styles.taskListItem}>
                Pausas curtas: Tire pequenas pausas durante o dia para relaxar e
                recarregar.
              </li>
              <li className={styles.taskListItem}>
                Exercícios de respiração: Pratique respiração profunda para
                acalmar o sistema nervoso.
              </li>
              <li className={styles.taskListItem}>
                Lista de tarefas: Organize suas tarefas e priorize, evitando
                sobrecarregar-se.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.taskBox}>
          <p className={styles.taskTitle}>Meditação e Caminhada</p>
          <p className={styles.taskTime}>Tarde</p>
          <div className={styles.taskDescription}>
            <p>
              <strong>Meditação:</strong> Encontre um local tranquilo, sente-se
              confortavelmente, concentre-se na respiração e deixe os
              pensamentos fluírem sem julgamentos.
            </p>
            <p>
              <strong>Caminhada:</strong> Faça uma caminhada leve por 20
              minutos, aproveite o ambiente, respire profundamente e reflita
              sobre seus pensamentos e metas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plano;
