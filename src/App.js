import "./App.scss";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Rightbar from "./components/rightbar/Rightbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Rightbar />
    </div>
  );
}

export default App;
