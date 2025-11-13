import "./App.css";
import About from "./components/about/AboutUs";
import Artist from "./components/artistList/Artist";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Artist></Artist>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
