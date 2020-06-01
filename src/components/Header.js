import React from "react";
import "../scss/Main.scss";

const Header = () => {
	return (
		<div className="header">
			<h1 className="header__title heading-1">Way better than a rental car</h1>
			<p className="header__subtitle heading-3">
				Book unforgettable cars from trusted hosts around the world
			</p>
			<input className="header__input" type="text" placeholder="Search" />
		</div>
	);
};

export default Header;
