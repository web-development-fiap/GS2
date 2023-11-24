'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './cadastro.module.css';

const Cadastro = () => {
  const navigate = useRouter();

  const [usuario, setUsuario] = useState({
    info: 'cadastro',
    nome: '',
    email: '',
    senha: '',
  });

  const [msgStatus, setMsgStatus] = useState('');
  const [classeMsg, setClasseMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleCadastro = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'http://localhost:8080/Api_Maven_Global2/cadastro',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(usuario),
        },
      );

      if (response.ok) {
        const data = await response.json();
        if (data.status) {
          setMsgStatus('Cadastro realizado com SUCESSO!');
          sessionStorage.setItem('isAuthenticated', 'true');
          setTimeout(() => {
            navigate.push('/routes/objetivos');
          }, 2500);
        } else {
          setMsgStatus('Erro ao cadastrar usuário!');

          setTimeout(() => {
            setMsgStatus('');
            setUsuario({
              nome: '',
              email: '',
              senha: '',
            });
          }, 2500);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };