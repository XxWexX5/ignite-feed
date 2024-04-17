import styles from './style.module.css';

interface PostProps {
  author?: string;
  content?: string;
}

export function Post({ author, content }: PostProps) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/37388037?v=4" />

          <div className={styles.authorInfo}>
            <strong>Wevison Ramalho</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="14 de Abril de 2024 às 18:30h." datatype="2024-04-14 18:32:00">
          Publicado há 1h
        </time>
      </header>

      <main className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O
          nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉 &nbsp;<a href="#">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#">#novoprojeto</a>
          <a href="#"> #nlw </a>
          <a href="#">#rocketseat</a>
        </p>
      </main>
    </article>
  );
}
