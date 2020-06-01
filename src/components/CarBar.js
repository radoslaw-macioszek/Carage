import React from "react";

import alfa from "../img/alfa-1.jpg";
import car from "../img/car-2.jpg";
import camaroMin from "../img/camaro-min.jpg";
import alfaMin from "../img/alfa-min.jpg";
import taycanMin from "../img/taycan-min.jpg";

const CarBar = () => {
	return (
		<div className="carbar__wrapper">
			<h4 className="carbar__wrapper-title">Browse the car</h4>
			<div className="carbar__wrapper-wrapper">
				<div className="card">
					<div className="card__side card__side--front ">
						<img
							className="card__side-picture picture-2"
							src={alfa}
							alt="alfa"
						/>
						<p className="card__side-text">Alfa Romeo 4C Spider</p>
					</div>
					<div className="card__side card__side--back">
						<img
							className="card__side__small-picture"
							src={alfaMin}
							alt="carmaro-min"
						/>
						<p className="card__side-title">
							Alfa Romeo 4C Spider
							<span className="card__side-title-big-grey"> 2016</span>
						</p>
						<p className="card__side-subtitle">
							<span className="card__side-title-small-grey">Juz od </span>250
							PLN
							<span className="card__side-title-small-grey"> / dzień</span>
						</p>
						<p className="card__side-paragraph">
							Auto w większości zbudowane z aluminium i włókna węglowego, dzięki
							czemu jego waga nie przekracza 900kg a pierwsza setka pojawia się
							juz po 4,2s. Bezkompromisowy, głośny, surowy unikat, obok którego
							nie przejdziesz obojętnie.
						</p>
						<div className="card__side__bottom">
							<p className="card__side__bottom-left">
								<span className="card__side__bottom-left-grey">Wiek:</span>{" "}
								<span>21+</span>
							</p>
							<p className="card__side-bottom-right">
								<span className="card__side__bottom-right-grey">
									Prawo Jazdy
								</span>
								<span className="card__side__bottom-right">2+ lata</span>
							</p>
						</div>
						<button className="card__side__button btn">Zarezerwuj</button>
					</div>
				</div>

				<div className="card">
					<div className="card__side card__side--front ">
						<img className="card__side-picture picture-2" src={car} alt="car" />
						<p className="card__side-text">Chevrolet Camaro 2SS</p>
					</div>
					<div className="card__side card__side--back">
						<img
							className="card__side__small-picture"
							src={camaroMin}
							alt="carmaro-min"
						/>
						<p className="card__side-title">
							Chevrolet Camaro 2SS
							<span className="card__side-title-big-grey"> 2016</span>
						</p>
						<p className="card__side-subtitle">
							<span className="card__side-title-small-grey">Juz od </span>200
							PLN
							<span className="card__side-title-small-grey"> / dzień</span>
						</p>
						<p className="card__side-paragraph">
							Najpotężniejszy muscle car od Chevroleta - pożeracz asfaltu, opon
							oraz serc. Agresywna sylwetka połączona z orkiestrą pod batutą
							maestro "V8" doprowadzi każdego fana motoryzacji do migotania
							przedsionków.
						</p>
						<div className="card__side__bottom">
							<p className="card__side__bottom-left">
								<span className="card__side__bottom-left-grey">Wiek:</span>{" "}
								<span>21+</span>
							</p>
							<p className="card__side-bottom-right">
								<span className="card__side__bottom-right-grey">
									Prawo Jazdy
								</span>
								<span className="card__side__bottom-right">2+ lata</span>
							</p>
						</div>
						<button className="card__side__button btn">Zarezerwuj</button>
					</div>
				</div>

				<div className="card">
					<div className="card__side card__side--front ">
						<img
							className="card__side-picture picture-2"
							src={taycanMin}
							alt="taycan"
						/>
						<p className="card__side-text">Porshe Taycan</p>
					</div>
					<div className="card__side card__side--back">
						<img
							className="card__side__small-picture"
							src={taycanMin}
							alt="carmaro-min"
						/>
						<p className="card__side-title">
							Porshe Taycan
							<span className="card__side-title-big-grey"> 2019</span>
						</p>
						<p className="card__side-subtitle">
							<span className="card__side-title-small-grey">Juz wkrótce </span>
						</p>
						<p className="card__side-paragraph">
							Pierwszy w pełni elektryczny samochód niemieckiego producenta.
							Piękna sylwetka oraz ogromne turbiny zamiast felg sprawiają, ze
							ten niemy agresor na pewno pozostawi po sobie trwały ślad na
							kartach motoryzacyjnej historii.
						</p>
						<div className="card__side__bottom">
							<p className="card__side__bottom-left">
								<span className="card__side__bottom-left-grey">Wiek:</span>{" "}
								<span>21+</span>
							</p>
							<p className="card__side-bottom-right">
								<span className="card__side__bottom-right-grey">
									Prawo Jazdy
								</span>
								<span className="card__side__bottom-right">2+ lata</span>
							</p>
						</div>
						<button className="card__side__button btn btn-not">
							Niedostępny
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CarBar;
