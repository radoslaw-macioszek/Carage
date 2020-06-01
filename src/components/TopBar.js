import React from "react";
import "../scss/Main.scss";
import userIcon from "../img/spa.png";
import logo from "../img/logo.png";

const TopBar = () => {
	return (
		<div className="topbar">
			<img src={logo} alt="logo" class="topbar__logo" />
			<div className="topbar__buttons">
				<button className="nav-btn">List your car</button>
				<button className="nav-btn">Learn more</button>
				<button className="nav-btn">Sign up</button>
				<button className="nav-btn">Log in</button>
				<img src={userIcon} alt="user" class="topbar__user" />
			</div>
		</div>
	);
};

export default TopBar;
