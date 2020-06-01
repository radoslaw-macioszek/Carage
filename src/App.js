import React from "react";
import "../src/scss/Main.scss";

import TopBar from "../src/components/TopBar";
import Header from "../src/components/Header";
import FeaturesRow from "../src/components/FeaturesRow";
import CarBar from "../src/components/CarBar";

function App() {
	return (
		<div className="container">
			<TopBar />
			<Header />
			<FeaturesRow />
			<CarBar />
		</div>
	);
}

export default App;
