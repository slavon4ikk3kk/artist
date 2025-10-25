
import './App.css';
import About from './components/about/AboutUs';
import Artist from './components/artistList/Artist';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Header></Header>
      <Hero></Hero>
      <Artist></Artist>
      <About></About>
      </div>
    </div>
  );
}

export default App;
