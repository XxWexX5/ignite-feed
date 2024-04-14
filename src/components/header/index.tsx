import styles from './style.module.css';

import logoIgniteFeed from '../../assets/logo-ignite-feed.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoIgniteFeed} alt="Logo Ignite Feed" />
    </header>
  );
}
