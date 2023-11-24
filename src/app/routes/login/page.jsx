'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './login.module.css';
import Link from 'next/link';

export default function Login() {
  const router = useRouter();

  const [usuario, setUsuario] = useState({
    info: 'login',
    email: '',
    senha: '',
  });

  const [msgStatus, setMsgStatus] = useState('');

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'http://localhost:8080/Api_Maven_Global2/login',
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
          setMsgStatus('Login realizado com Sucesso!');
          sessionStorage.setItem('isAuthenticated', 'true');
          setTimeout(() => {
            router.push('/routes/objetivos');
          }, 2500);
        } else {
          setMsgStatus('Nome de usuário ou senha inválidos!');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className={styles.login}>
        <h1>Entrar</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="idEmail"></label>
              <input
                type="email"
                name="email"
                id="idEmail"
                placeholder="Digite seu Email."
                value={usuario.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idSenha"></label>
              <input
                type="password"
                name="senha"
                id="idSenha"
                placeholder="Digite sua Senha."
                value={usuario.senha}
                onChange={handleChange}
              />
            </div>
            <div>
              <button className={styles.log}>Log in</button>
            </div>
          </form>
        </div>
        <Link href="/routes/cadastro">
          <p>Cadastrar-se</p>
        </Link>
      </div>
      <h2 className={styles.msg}>{msgStatus}</h2>
    </div>
  );
}
