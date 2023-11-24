'use client';
import styles from './metas.module.css';
import { useState } from 'react';

const Metas = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (value) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  const handleNextClick = () => {
    if (selectedOptions.length === 0) {
      alert('Por favor, selecione pelo menos uma opção!');
    } else {
      window.location.href = '/routes/plano';
    }
  };

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h2>O que você gostaria de explorar?</h2>

        <p
          className={`${styles.labelButton} ${
            selectedOptions.includes('curarTraumaInfancia') && styles.selected
          }`}
          onClick={() => handleCheckboxChange('curarTraumaInfancia')}
        >
          Curar Trauma de Infância
        </p>
        <p
          className={`${styles.labelButton} ${
            selectedOptions.includes('deixarMauHabito') && styles.selected
          }`}
          onClick={() => handleCheckboxChange('deixarMauHabito')}
        >
          Deixar um Mau Hábito
        </p>
        <p
          className={`${styles.labelButton} ${
            selectedOptions.includes('autoReflexao') && styles.selected
          }`}
          onClick={() => handleCheckboxChange('autoReflexao')}
        >
          Auto Reflexão
        </p>
        <p
          className={`${styles.labelButton} ${
            selectedOptions.includes('perderPeso') && styles.selected
          }`}
          onClick={() => handleCheckboxChange('perderPeso')}
        >
          Perder Peso
        </p>
        <p
          className={`${styles.labelButton} ${
            selectedOptions.includes('impulsoSexualidade') && styles.selected
          }`}
          onClick={() => handleCheckboxChange('impulsoSexualidade')}
        >
          Impulso na Sexualidade
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

export default Metas;
