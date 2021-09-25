import './App.css';
import SearchBar from './scripts/SearchBar.js'
import FireBoard from './scripts/FireBoard.js'

function App() {

  return (
    <div className="App">
      <SearchBar></SearchBar>
      <FireBoard
        // notFound // uncomment this to pass notFound to the component
        stateCode="AC"
        cityName="Rio Branco"
        countryFires="1717"
        stateFires="43"
        cityFires="12"
      ></FireBoard>
    </div>
  );
}

export default App;
