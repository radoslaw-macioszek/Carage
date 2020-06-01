import React from "react";
import "../scss/Main.scss";

import app from "../img/app-1.svg";
import support from "../img/support-3.svg";
import good from "../img/good-1.svg";
import shield from "../img/shield-1.svg";

const FeaturesRow = () => {
	return (
		<div className="features">
			<p className="features__subtitle heading-3">Skip the rental counter</p>
			<h2 className="features__title">
				Discover the world's largest car sharing marketplace
			</h2>
			<div className="features__wrapper">
				<div className="feature">
					<img className="feature__icon" src={app} alt="test" />
					<h4 className="heading-3 heading-3--dark">Endless options</h4>
					<p className="feature__text">
						Choose from hundreds of models you won’t find anywhere else. Pick it
						up or get it delivered where you want it.
					</p>
				</div>
				<div className="feature">
					<img className="feature__icon" src={good} alt="test" />
					<h4 className="heading-3 heading-3--dark">Free cancellation</h4>
					<p className="feature__text">
						Cancel for free up to 24 hours before your trip starts. Because life
						happens and it helps to be flexible when it does.
					</p>
				</div>
				<div className="feature">
					<img className="feature__icon" src={support} alt="test" />
					<h4 className="heading-3 heading-3--dark">24/7 customer support</h4>
					<p className="feature__text">
						Rest easy knowing that everyone in the Turo community is screened,
						and 24/7 customer support and roadside assistance are just a click
						away.
					</p>
				</div>
				<div className="feature">
					<img className="feature__icon" src={shield} alt="test" />
					<h4 className="heading-3 heading-3--dark">
						Insurance options included
					</h4>
					<p className="feature__text">
						Drive confidently with your choice of protection plans — all plans
						include varying levels of liability insurance from Liberty Mutual
						provided through Turo Insurance Agency and physical damage
						protection.
					</p>
				</div>
			</div>
			<button className="features__btn btn">Book the perfect car</button>
		</div>
	);
};

export default FeaturesRow;
