'use client';
import styles from './conteudo.module.css';
import { useState } from 'react';

const Conteudo = () => {
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
      window.location.href = '/routes/metas';
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
            selectedOptions.includes('cursosMeditacao') && styles.selected
          }`}
          onClick={() => handleCheckboxChange('cursosMeditacao')}
        >
          Cursos de Meditação
        </p>
        <p
          className={`${styles.labelButton} ${
            selectedOptions.includes('sonsRelaxantes') && styles.selected
          }`}
          onClick={() => handleCheckboxChange('sonsRelaxantes')}
        >
          Sons Relaxantes
        </p>
        <p
          className={`${styles.labelButton} ${
            selectedOptions.includes('exerciciosRespiracao') && styles.selected
          }`}
          onClick={() => handleCheckboxChange('exerciciosRespiracao')}
        >
          Exercícios de Respiração
        </p>
        <p
          className={`${styles.labelButton} ${
            selectedOptions.includes('praticasSono') && styles.selected
          }`}
          onClick={() => handleCheckboxChange('praticasSono')}
        >
          Práticas de Sono
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

export default Conteudo;