import logo from './logo.svg';
import './App.css';
import SearchBar from './scripts/searchbar.js'
import Mensagem from './Mensagem.js'

function App() {

  return (
    <div className="App">
      <SearchBar></SearchBar>
      <Mensagem uf="SP" municipio="São José dos Campos" focosCount="3"></Mensagem>
    </div>
  );
}

export default App;
