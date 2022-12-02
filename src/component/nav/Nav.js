import React from "react";
import "./Nav.scss";

export const Nav = () => {
	return (
		<nav className="nav-box">
			<div className="nav-top">
				<p>
					<span className="nav-text">Home</span>
				</p>
				<p>
					<span className="nav-text">Browser</span>
				</p>
				<p>
					<span className="nav-text">Collection</span>
				</p>
			</div>
			<div className="nav-bottom">
				<p>
					<span className="nav-text">Download manager</span>
				</p>
			</div>
		</nav>
	);
};


