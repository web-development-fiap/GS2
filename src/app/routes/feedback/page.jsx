'use client';
import React, { useState } from 'react';
import styles from './feedback.module.css';

const FeedbackPage = () => {
  const [basicInfo, setBasicInfo] = useState({
    name: '',
    symptoms: '',
    duration: '',
    medication: '',
  });

  const [emotionalMessage, setEmotionalMessage] = useState('');
  const [feedbackStatus, setFeedbackStatus] = useState('');

  const handleBasicInfoSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'http://localhost:8080/Api_Maven_Global2/feedback',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(basicInfo),
        },
      );

      if (response.ok) {
        const data = await response.json();
        if (data.status) {
          setFeedbackStatus('Informações básicas enviadas com sucesso!');
        } else {
          setFeedbackStatus('Erro ao enviar informações básicas.');
        }
      }
    } catch (error) {
      console.log(error);
      setFeedbackStatus('Erro ao enviar informações básicas.');
    }

    // Limpar o estado após o envio
    setBasicInfo({
      name: '',
      symptoms: '',
      duration: '',
      medication: '',
    });
  };

  const handleEmotionalMessageSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'http://localhost:3000/api/feedback-emotional',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ emotionalMessage }),
        },
      );

      if (response.ok) {
        const data = await response.json();
        if (data.status) {
          setFeedbackStatus('Mensagem emocional enviada com sucesso!');
        } else {
          setFeedbackStatus('Erro ao enviar mensagem emocional.');
        }
      }
    } catch (error) {
      console.log(error);
      setFeedbackStatus('Erro ao enviar mensagem emocional.');
    }

    // Limpar o estado após o envio
    setEmotionalMessage('');
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h1>Formulário de Feedback</h1>

        <p className={styles.text}>
          Envie suas informações abaixo para receber um tratamento mais
          detalhado por email. Se desejar, adicione também uma mensagem
          emocional opcional.
        </p>

        <form className={styles.form} onSubmit={handleBasicInfoSubmit}>
          <label>
            <p>Nome Completo:</p>
            <input
              type="text"
              value={basicInfo.name}
              onChange={(e) =>
                setBasicInfo({ ...basicInfo, name: e.target.value })
              }
              placeholder="Digite seu nome completo"
            />
          </label>
          <br />
          <label>
            <p>Sintomas:</p>
            <textarea
              value={basicInfo.symptoms}
              onChange={(e) =>
                setBasicInfo({ ...basicInfo, symptoms: e.target.value })
              }
              placeholder="Descreva os sintomas que você está enfrentando"
            />
          </label>
          <br />
          <label>
            <p>Duração dos Sintomas:</p>
            <input
              type="text"
              value={basicInfo.duration}
              onChange={(e) =>
                setBasicInfo({ ...basicInfo, duration: e.target.value })
              }
              placeholder="Por quanto tempo você tem experimentado esses sintomas?"
            />
          </label>
          <br />
          <label>
            <p>Usa algum medicamento:</p>
            <input
              type="text"
              value={basicInfo.medication}
              onChange={(e) =>
                setBasicInfo({ ...basicInfo, medication: e.target.value })
              }
              placeholder="Se sim, por favor, liste os medicamentos que você está usando"
            />
          </label>
          <br />
          <button type="submit">Enviar Informações Básicas</button>
        </form>

        <hr className={styles.separator} />

        <form className={styles.form} onSubmit={handleEmotionalMessageSubmit}>
          <label>
            <p>Frase Emocional:</p>
            <input
              type="text"
              value={emotionalMessage}
              onChange={(e) => setEmotionalMessage(e.target.value)}
              placeholder="Compartilhe uma frase ou mensagem emocional que você gostaria de expressar"
            />
          </label>
          <br />
          <button type="submit">Enviar Mensagem Emocional</button>
        </form>

        {feedbackStatus && (
          <p className={styles.feedbackStatus}>{feedbackStatus}</p>
        )}
      </div>
    </div>
  );
};

export default FeedbackPage;
