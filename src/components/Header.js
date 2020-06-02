import React from "react";
import "../scss/Main.scss";

const Header = () => {
	return (
		<div className="header">
			<h1 className="header__title heading-1">Way better than a rental car</h1>
			<p className="header__subtitle heading-3">
				Nie wahaj się i wyrusz w niesamowitą podróż samochodem Twoich marzeń.
			</p>
			<input className="header__input" type="text" placeholder="Search" />
		</div>
	);
};

export default Header;
