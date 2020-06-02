import React from "react";

const ImageBar = () => {
	return (
		<div className="imagebar">
			<div className="imagebar__wrapper">
				<p className="imagebar-title">Alfa Romeo 4C Spider 2016</p>
				<p className="imagebar-text">
					Auto w większości zbudowano z aluminium i włókna węglowego, dzięki
					czemu jego waga nie przekracza 900 kg, a pierwsza setka pojawia się
					już po 4,2s. Bezkompromisowy, głośny, defibrylator na kołach, obok
					którego nie przejdziesz obojętnie.
				</p>
			</div>
			<button className="imagebar-button btn">Sprawdź szczegóły</button>
		</div>
	);
};

export default ImageBar;
