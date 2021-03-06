import React from "react";
import "../src/scss/Main.scss";

import TopBar from "../src/components/TopBar";
import Header from "../src/components/Header";
import FeaturesRow from "../src/components/FeaturesRow";
import CarBar from "../src/components/CarBar";
import OffertsBar from "../src/components/OffertsBar";
import ImageBar from "../src/components/ImageBar";
import PriceList from "../src/components/PriceList";
import Footer from "../src/components/Footer";

function App() {
	return (
		<>
			<div className="container">
				<TopBar />
				<Header />
				<FeaturesRow />
				<CarBar />
				<OffertsBar />
				<ImageBar type="alfa" />
				<ImageBar type="camaro" />
				<PriceList />
			</div>
			<Footer />
		</>
	);
}

export default App;
