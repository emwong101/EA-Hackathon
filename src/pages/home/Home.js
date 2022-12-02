import React from "react";
import { GameList } from "../../component/gameList/GameList.js";
import { Nav } from "../../component/nav/Nav.js";
import { Link } from "react-router-dom";
import sims from "../../assets/games/sims.svg";
import game1 from "../../assets/games/game1.png";
import game2 from "../../assets/games/game2.png";
import game3 from "../../assets/games/game3.png";
import game4 from "../../assets/games/game4.png";
import game5 from "../../assets/games/game5.png";
import game6 from "../../assets/games/game6.png";
import game7 from "../../assets/games/game7.png";
import game8 from "../../assets/games/game8.png";
import game9 from "../../assets/games/game9.png";
import game10 from "../../assets/games/game10.png";
import game11 from "../../assets/games/game11.png";
import game12 from "../../assets/games/game12.png";
import game13 from "../../assets/games/game13.png";
import game14 from "../../assets/games/game14.png";
import game15 from "../../assets/games/game15.png";
import game16 from "../../assets/games/game16.png";
import game17 from "../../assets/games/game17.png";
import game18 from "../../assets/games/game18.png";
import game19 from "../../assets/games/game19.png";
import game20 from "../../assets/games/game20.png";
import game21 from "../../assets/games/game21.png";
import game22 from "../../assets/games/game22.png";
import game23 from "../../assets/games/game23.png";
import game24 from "../../assets/games/game24.png";
import "./Home.scss";

export const Home = () => {
	return (
		<div className="home-box">
			<Nav />
			<main className="main">
				<div className="game-top">
					<h3 className="game-title">Top Games</h3>
					<span className="game-icon"></span>
					<span className="game-icon"></span>
				</div>
				<div className="game-bottom">
					<GameList
						img={sims}
						title={"The Sims 4"}
						discount={""}
						price={"Free"}
					/>
					<GameList
						header={"Classics"}
						img={game16}
						title={"Need for Speed Unbound"}
						discount={""}
						price={"&89.99"}
					/>
					<GameList
						header={"Action"}
						img={game4}
						title={"Madden NFL 23"}
						discount={"-50%"}
						price={"$39.99"}
					/>
					<GameList
						header={"Sports & racing"}
						img={game5}
						title={"It takes Two"}
						discount={"-60%"}
						price={"$21.99"}
					/>
					{/* <Link to="/FIFA"> */}
					<GameList
						header={"Old but good"}
						img={game6}
						title={"FIFA 23"}
						discount={"-40%"}
						price={"$53.99"}
					/>
					{/* </Link> */}
				</div>
				<div className="game-top">
					<h3 className="game-title">Classics</h3>
					<span className="game-icon"></span>
					<span className="game-icon"></span>
				</div>
				<div className="game-bottom">
					<GameList
						img={game7}
						title={"Titanfall 2"}
						discount={"-80%"}
						price={"$5.39"}
					/>
					<GameList
						img={game9}
						title={"The Sims 4"}
						discount={""}
						price={"Free"}
					/>
					<GameList
						img={game8}
						title={"Need for Speed Hot Pursuit Remastered"}
						discount={"-90%"}
						price={"$3.99"}
					/>
					<GameList
						img={game11}
						title={"MASS EFFECT LEGENDARY DEITION"}
						discount={"-67%"}
						price={"$26.39"}
					/>
					<GameList
						img={game12}
						title={"Dead Space (2008)"}
						discount={"-40%"}
						price={"$53.99"}
					/>
				</div>
				<div className="game-top">
					<h3 className="game-title">Action</h3>
					<span className="game-icon"></span>
					<span className="game-icon"></span>
				</div>
				<div className="game-bottom">
					<GameList
						img={game17}
						title={"STAR WARS Squadrons"}
						discount={""}
						price={"$54.99"}
					/>
					<GameList
						img={game18}
						title={"STAR WARS Battlefront II"}
						discount={"-75%"}
						price={"$6.74"}
					/>
					<GameList
						img={game19}
						title={"STAR WARS Battlefront II"}
						discount={"-85%"}
						price={"$8.24"}
					/>
					<GameList
						img={game20}
						title={"Plants vs Zombies Garden Warfare"}
						discount={"-75%"}
						price={"$4.99"}
					/>
					<GameList
						img={game11}
						title={"Mass Effect Legendary Edition"}
						discount={"-67%"}
						price={"$26.39"}
					/>
				</div>
				<div className="game-top">
					<h3 className="game-title">Sports & racing</h3>
					<span className="game-icon"></span>
					<span className="game-icon"></span>
				</div>
				<div className="game-bottom">
					<GameList
						img={game16}
						title={"Need for Speed Unbound"}
						discount={""}
						price={"$89.99"}
					/>
					<GameList
						img={game13}
						title={"Need for Speed payback"}
						discount={""}
						price={"&89.99"}
					/>
					<GameList
						img={game15}
						title={"Need for Speed most wanted"}
						discount={"-40%"}
						price={"$89.99"}
					/>
					<GameList
						img={game14}
						title={"Need for Speed Hot Pursuit Remastered"}
						discount={"-90%"}
						price={"$3.99"}
					/>
					<GameList
						img={game15}
						title={"Need for Speed Heat"}
						discount={"-40%"}
						price={"$89.99"}
					/>
				</div>
				<div className="game-top">
					<h3 className="game-title">Old but good</h3>
					<span className="game-icon"></span>
					<span className="game-icon"></span>
				</div>
				<div className="game-bottom">
					<GameList
						img={game21}
						title={"The Sims 4"}
						discount={""}
						price={"Free"}
					/>
					<GameList
						header={"Classics"}
						img={game22}
						title={"Need for Speed Unbound"}
						discount={""}
						price={"&89.99"}
					/>
					<GameList
						header={"Action"}
						img={game23}
						title={"Madden NFL 23"}
						discount={"-50%"}
						price={"$39.99"}
					/>
					<GameList
						header={"Sports & racing"}
						img={game24}
						title={"It takes Two"}
						discount={"-60%"}
						price={"$21.99"}
					/>
					<GameList
						header={"Old but good"}
						img={game5}
						title={"FIFA 23"}
						discount={"-40%"}
						price={"$53.99"}
					/>
				</div>
			</main>
		</div>
	);
};
