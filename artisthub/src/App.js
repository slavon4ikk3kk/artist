
import './App.css';
import Artist from './components/artistList/Artist';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Header></Header>
      <Artist></Artist>
      </div>
    </div>
  );
}

export default App;
