import "./App.scss";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import SingleGameHero from "./components/singleGameHero/SingleGameHero";
import Rightbar from "./components/rightbar/Rightbar";


function App() {
  return (
    <div className="App">
      <Header />
      <SingleGameHero />
      <Hero />
      <Rightbar />
    </div>
  );
}

export default App;
