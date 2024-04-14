import { PencilLine } from '@phosphor-icons/react';

import styles from './style.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <header className={styles.cover}>
        <img src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </header>

      <main className={styles.profile}>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/37388037?v=4" />

        <strong>Wevison Ramalho</strong>
        <span>Web Developer</span>
      </main>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
