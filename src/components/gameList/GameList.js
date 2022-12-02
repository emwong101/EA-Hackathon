import React, { useState } from "react";
import "./GameList.scss";

export const GameList = ({ img, title, price, discount }) => {
	const [isFavorite, setIsFavorite] = useState(false);

	const handleFavoriteClick = () => {
		setIsFavorite((prev) => !prev);
	};

	return (
		<section className="game-list">
			<img
				src={img}
				alt="game"
				className="game-list_img"
			/>
			<div
				className={`like ${isFavorite ? "on" : ""}`}
				onClick={handleFavoriteClick}
			></div>
			<span className="game-list_title">{title}</span>
			<div>
				{discount && <span className="game-list_discount">{discount}</span>}
				<span className="game-list_price">{price}</span>
			</div>
		</section>
	);
};
