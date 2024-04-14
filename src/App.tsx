import { Header } from './components/header';
import { Post } from './components/Post';

import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post author="Wevison" content="Estou criando um novo post! Você acredita?" />
        </main>
      </div>
    </>
  );
}

export default App;
