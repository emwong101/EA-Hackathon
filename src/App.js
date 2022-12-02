import "./App.scss";
import Header from "./components/header/Header";
import SingleGameHero from "./components/singleGameHero/SingleGameHero";
import Rightbar from "./components/rightbar/Rightbar";

import { Nav } from "./components/nav/Nav";
import { Hero } from "./pages/home/Home";

function App() {
	return (
		<div className="App">
			<div className="left">
				<Nav />
			</div>
			<div className="middle">
				<Header />
				<SingleGameHero />
				<Hero />
			</div>
			<div className="right">
				<Rightbar />
			</div>
		</div>
	);
}

export default App;
