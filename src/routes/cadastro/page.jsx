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

  return (
    <div>
      <div className={styles.cadastro}>
        <h1>Cadastre-se</h1>
        <div>
          <form onSubmit={handleCadastro}>
            <div>
              <label htmlFor="idNome"></label>
              <input
                type="text"
                name="nome"
                id="idNome"
                placeholder="Digite seu nome"
                value={usuario.nome}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="idEmail"></label>
              <input
                type="email"
                name="email"
                id="idEmail"
                placeholder="Digite seu email"
                value={usuario.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="idSenha"></label>
              <input
                type="password"
                name="senha"
                id="idSenha"
                placeholder="Digite sua senha"
                value={usuario.senha}
                onChange={handleChange}
                required
              />
            </div>
            <button className={styles.cad} type="submit">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
      <h2 className={styles.msg}>{msgStatus}</h2>
    </div>
  );
};

export default Cadastro;
