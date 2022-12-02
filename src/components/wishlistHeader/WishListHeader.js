import React from "react";
import ChevRight from "../../assets/icons/smrightchevron.png";
import ChevLeft from "../../assets/icons/smleftchevron.png";
import "./WishListHeader.scss";
import searchIcon from "../../assets/magnifying-glass-solid.svg";

export const WishListHeader = () => {
	return (
		<div className="box">
			<div className="box-top">
				<div className="icons">
					<div className="icons-left">
						<img
							src={ChevLeft}
							alt="chev"
						/>
						<img
							className="chev"
							src={ChevRight}
							alt="chev"
						/>
						<div className="input-box">
							<input
								className="input"
								type="text"
								placeholder="Search games and add-one"
							/>
							<img
								className="search"
								src={searchIcon}
								alt="search"
							/>
						</div>
					</div>
					<span className="button join">JOIN EA PLAY</span>
				</div>
				<h2 className="header">My Wishlist</h2>
			</div>
			<div className="box-bottom">
				<div className="bottom-top">
					<div className="sorts">
						<p className="sorts-text">Sort by:</p>
						<p className="sorts-text">Name</p>
						<p className="sorts-text border">Ranking</p>
						<p className="sorts-text ">Release Date</p>
						<p className="sorts-text">Date Added</p>
						<p className="sorts-text">Availability</p>
						<p className="sorts-text">Price</p>
					</div>
					<span className="button share">SHARE YOUR WISHLIST</span>
				</div>
				<div className="bottom-bottom">
					<span className="save">Save</span>
					Drag and drop then save your ranking
				</div>
			</div>
		</div>
	);
};
