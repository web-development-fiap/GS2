'use client';
import { useRouter } from 'next/navigation';
import styles from './objetivos.module.css';
import { useEffect, useState } from 'react';

const Objetivos = () => {
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem('isAuthenticated')) {
      router.refresh();
    }
  }, [router]);

  const [selectedObjectives, setSelectedObjectives] = useState([]);

  const handleCheckboxChange = (value) => {
    if (selectedObjectives.includes(value)) {
      setSelectedObjectives(selectedObjectives.filter((obj) => obj !== value));
    } else {
      setSelectedObjectives([...selectedObjectives, value]);
    }
  };

  const handleNextClick = () => {
    if (selectedObjectives.length === 0) {
      alert('Por favor, selecione pelo menos um objetivo!');
    } else {
      window.location.href = '/routes/meditacao';
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h2>Quais são os seus objetivos principais?</h2>

        <p
          className={`${styles.labelButton} ${
            selectedObjectives.includes('melhorarSono') && styles.selected
          }`}
          onClick={() => handleCheckboxChange('melhorarSono')}
        >
          Melhorar o sono
        </p>
        <p
          className={`${styles.labelButton} ${
            selectedObjectives.includes('reduzirStress') && styles.selected
          }`}
          onClick={() => handleCheckboxChange('reduzirStress')}
        >
          Reduzir o stress
        </p>
        <p
          className={`${styles.labelButton} ${
            selectedObjectives.includes('lidarAnsiedade') && styles.selected
          }`}
          onClick={() => handleCheckboxChange('lidarAnsiedade')}
        >
          Lidar com a ansiedade
        </p>
        <p
          className={`${styles.labelButton} ${
            selectedObjectives.includes('sentirSeMaisFeliz') && styles.selected
          }`}
          onClick={() => handleCheckboxChange('sentirSeMaisFeliz')}
        >
          Sentir-se mais feliz
        </p>
        <p
          className={`${styles.labelButton} ${
            selectedObjectives.includes('impulsoAutoestima') && styles.selected
          }`}
          onClick={() => handleCheckboxChange('impulsoAutoestima')}
        >
          Impulsionar na autoestima
        </p>
        <p
          className={`${styles.labelButton} ${
            selectedObjectives.includes('superarDepressaoRaiva') &&
            styles.selected
          }`}
          onClick={() => handleCheckboxChange('superarDepressaoRaiva')}
        >
          Superar a depressão e a raiva
        </p>
        <p
          className={`${styles.labelButton} ${
            selectedObjectives.includes('focarMelhor') && styles.selected
          }`}
          onClick={() => handleCheckboxChange('focarMelhor')}
        >
          Focar-se melhor
        </p>
        <p
          className={`${styles.labelButton} ${
            selectedObjectives.includes('expressarCriatividade') &&
            styles.selected
          }`}
          onClick={() => handleCheckboxChange('expressarCriatividade')}
        >
          Expressar a criatividade
        </p>

        <button className={styles.nextButton} onClick={handleNextClick}>
          Próximo
        </button>
      </div>
    </div>
  );
};

export default Objetivos;
