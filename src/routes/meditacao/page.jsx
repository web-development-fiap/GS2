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
