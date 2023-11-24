'use client';
import styles from './meditacao.module.css';
import { useState } from 'react';

const Meditacao = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleCheckboxChange = (value) => {
    setSelectedOption(value);
  };

  const handleNextClick = () => {
    if (!selectedOption) {
      alert('Por favor, selecione uma opção!');
    } else {
      window.location.href = '/routes/conteudo';
    }
  };

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h2>Você já experimentou meditar?</h2>

        <p
          className={`${styles.labelButton} ${
            selectedOption === 'jaExperimentei' && styles.selected
          }`}
          onClick={() => handleCheckboxChange('jaExperimentei')}
        >
          Sim, já experimentei
        </p>
        <p
          className={`${styles.labelButton} ${
            selectedOption === 'queroSaberMais' && styles.selected
          }`}
          onClick={() => handleCheckboxChange('queroSaberMais')}
        >
          Sim, mas gostaria de saber mais
        </p>
        <p
          className={`${styles.labelButton} ${
            selectedOption === 'muitoTempoAtras' && styles.selected
          }`}
          onClick={() => handleCheckboxChange('muitoTempoAtras')}
        >
          Sim, há muito tempo atrás
        </p>
        <p
          className={`${styles.labelButton} ${
            selectedOption === 'nuncaExperimentei' && styles.selected
          }`}
          onClick={() => handleCheckboxChange('nuncaExperimentei')}
        >
          Não, nunca experimentei meditar
        </p>

        <div className={styles.buttonContainer}>
          <button className={styles.backButton} onClick={handleBackClick}>
            Voltar
          </button>
          <button className={styles.nextButton} onClick={handleNextClick}>
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meditacao;
