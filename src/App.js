import "./App.scss";
import Main from "./pages/home/main";
import Rightbar from "./components/rightbar/Rightbar";
import { Nav } from "./components/nav/Nav";
import Game from "./pages/game/Game";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="left">
        <Nav />
      </div>
      <div className="middle">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/FIFA" element={<Game />} />
        </Routes>
      </div>
      <div className="right">
        <Rightbar />
      </div>
    </div>
  );
}

export default App;
