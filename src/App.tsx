import { Header } from './components/header';
import { Post } from './components/Post';

function App() {
  return (
    <>
      <Header />

      <Post author="Wevison" content="Estou criando um novo post! Você acredita?" />
    </>
  );
}

export default App;
