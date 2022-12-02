import "./App.scss";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import SingleGameHero from "./components/singleGameHero/SingleGameHero";

function App() {
  return (
    <div className="App">
      <Header />
      <SingleGameHero />
    </div>
  );
}

export default App;
