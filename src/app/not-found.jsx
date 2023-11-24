import styles from './notfound.module.css';

export default function NotFound() {
  return (
    <div className={styles.erro}>
      <h1>OOPS! 404!</h1>
      <p>Sorry, the page you are looking for does not exist!</p>
    </div>
  );
}
