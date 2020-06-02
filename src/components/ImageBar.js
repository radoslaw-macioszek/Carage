import React from "react";

const ImageBar = ({ type }) => {
	console.log(type);
	return type === "camaro" ? (
		<div className="imagebar imagebar__camaro">
			<div className="imagebar__wrapper imagebar__wrapper-camaro">
				<p className="imagebar-title">Chevrolet Camaro 2SS 2016</p>
				<p className="imagebar-text">
					Najpotężniejszy muscle car od Chevroleta - pożeracz asfaltu, opon oraz
					serc. Agresywna sylwetka połączona z orkiestrą pod batutą maestro "V8"
					doprowadzi każdego fana motoryzacji do migotania przedsionków.
				</p>
			</div>
			<button className="imagebar-button imagebar-button-camaro btn">
				Sprawdź szczegóły
			</button>
		</div>
	) : (
		<div className="imagebar imagebar__alfa">
			<div className="imagebar__wrapper imagebar__wrapper-alfa">
				<p className="imagebar-title">Alfa Romeo 4C Spider 2016</p>
				<p className="imagebar-text">
					Auto w większości zbudowano z aluminium i włókna węglowego, dzięki
					czemu jego waga nie przekracza 900 kg, a pierwsza setka pojawia się
					już po 4,2s. Bezkompromisowy, głośny, defibrylator na kołach, obok
					którego nie przejdziesz obojętnie.
				</p>
			</div>
			<button className="imagebar-button imagebar-button-alfa btn ">
				Sprawdź szczegóły
			</button>
		</div>
	);
};

export default ImageBar;
