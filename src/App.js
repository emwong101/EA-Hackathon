import "./App.scss";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import SingleGameHero from "./components/singleGameHero/SingleGameHero";
import Rightbar from "./components/rightbar/Rightbar";

function App() {
  return (
    <div className="App">
      <div className="left"></div>
      <div className="middle">
        <Header />
        <SingleGameHero />
      </div>
      <div className="right">
        <Rightbar />
      </div>
    </div>
  );
}

export default App;
