import styles from '../styles/header.module.css';

const Header = () => (
  <header className={styles.header}>
    <h1>todos</h1>
    <p>items will persist the browser local storage </p>
  </header>
);

export default Header;
