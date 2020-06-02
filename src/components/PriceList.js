import React from "react";

const PriceList = () => {
	return (
		<div className="pricelist">
			<p className="pricelist__title">Cennik</p>
			<div className="pricelist__container">
				<div className="pricelist__container-0">
					<div className="pricelist__container-0 pricelist__container-picture-0">
						&nbsp;
					</div>
					<div className="pricelist__container-0 pricelist__container-main">
						Okres najmu
					</div>
					<ul className="pricelist__container-0 pricelist__container-list">
						<li>Jazda z instruktorem</li>
						<li>1 dzień</li>
						<li>2-3 dni</li>
						<li>2-6 dni</li>
						<li>7-13 dni</li>
						<li>14-29 dni</li>
						<li>30+ dni</li>
					</ul>
				</div>
				<div className="pricelist__container-1">
					<div className="pricelist__container-picture-1">&nbsp;</div>
					<div className=" pricelist__container-main">Alfa Romeo 4c Spider</div>
					<ul className="pricelist__container-list">
						<li>300 PLN / godzina</li>
						<li>800 PLN</li>
						<li>700 PLN / doba</li>
						<li>650 PLN / doba</li>
						<li>550 PLN / doba</li>
						<li>450 PLN / doba</li>
						<li>250 PLN / doba</li>
					</ul>
					<button className="pricelist__container-button btn">
						Zarezerwuj
					</button>
				</div>
				<div className="pricelist__container-2">
					<div className="pricelist__container-picture-2">&nbsp;</div>
					<div className="pricelist__container-main">Chevrolet Camaro</div>
					<ul className=" pricelist__container-list">
						<li>300 PLN / godzina</li>
						<li>650 PLN</li>
						<li>600 PLN / doba</li>
						<li>450 PLN / doba</li>
						<li>400 PLN / doba</li>
						<li>350 PLN / doba</li>
						<li>200 PLN / doba</li>
					</ul>
					<button className="pricelist__container-button btn">
						Zarezerwuj
					</button>
				</div>
				<div className="pricelist__container-3">
					<div className="pricelist__container-picture-3">&nbsp;</div>
					<div className="pricelist__container-main">Porshe Taycan</div>
					<ul className="pricelist__container-list">
						<li>X</li>
						<li>X</li>
						<li>X</li>
						<li>X</li>
						<li>X</li>
						<li>X</li>
						<li>X</li>
					</ul>
					<button className="pricelist__container-button btn">
						Niedostępny
					</button>
				</div>
			</div>
		</div>
	);
};

export default PriceList;
