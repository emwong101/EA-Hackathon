import "./App.scss";
import Header from "./components/header/Header";
import SingleGameHero from "./components/singleGameHero/SingleGameHero";
import Main from "./pages/home/main";
import Rightbar from "./components/rightbar/Rightbar";
import { Nav } from "./components/nav/Nav";
import { WishListHeader } from "./components/wishlistHeader/WishListHeader";
import WishListCard from "./components/wishlistCard/WishListCard";

function App() {
  return (
    <div className="App">
      {/* <div className="left">
				<Nav />
			</div>
			<div className="middle">
				<Main />
			</div>
			<div className="right">
				<Rightbar />
			</div> */}
      <WishListHeader />
      <WishListCard />
    </div>
  );
}

export default App;
