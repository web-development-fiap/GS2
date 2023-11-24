'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './header.module.css';

export default function Header() {
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem('isAuthenticated');
    router.push('/');
    router.refresh();
  };

  const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';

  return (
    <div className={styles.header}>
      <Link href="/">
        <Image src="/img/watch.svg" width={50} height={50} alt="Logo" />
      </Link>
      <ul>
        {isAuthenticated ? (
          <>
            <li>
              <Link href="/routes/curiosidade">Curiosidades</Link>
            </li>
            <li>
              <Link href="/routes/sobre">Sobre</Link>
            </li>
            <li>
              <Link href="/routes/objetivos">Meu Processo</Link>
            </li>
            <li>
              <Link href="/routes/feedback">Feedback</Link>
            </li>
            <li>
              <button className={styles.logout} onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/routes/curiosidade">Curiosidades</Link>
            </li>
            <li>
              <Link href="/routes/sobre">Sobre</Link>
            </li>
            <li>
              <Link href="/routes/feedback">Feedback</Link>
            </li>
            <li>
              <Link href="/routes/login">Login</Link>
            </li>
            <li className={styles.cadastrar}>
              <Link href="/routes/cadastro">Cadastre-se</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
