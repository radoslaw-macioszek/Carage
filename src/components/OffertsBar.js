import React from "react";

const OffertsBar = () => {
	return (
		<div className="offertbar">
			<p className="offertbar__title">Nasza Oferta</p>
			<p className="offertbar__subtitle">
				Jesteśmy pasjonatami motoryzacji i w naszym garażu znajdą się tylko
				szczególne auta, również te limitowane.
			</p>
			<div className="offertbar__card">
				<div className="offertbar__card-1 ">
					<div className="offertbar__card-picture-1">&nbsp;</div>
					<div className="offertbar__card-wrapper">
						<p className="offertbar__card-title">Na co dzień</p>
						<p className="offertbar__card-paragraph">
							Skorzystaj z naszej oferty i pozwól się unieść emocjom o jakie
							ciężko w seryjnych samochodach. Możliwości jest wiele - na
							godziny, doby, tygodnie, miesiące - jesteśmy do Twojej dyspozycji.
						</p>
					</div>
				</div>
				<div className="offertbar__card-2">
					<div className="offertbar__card-picture-2">&nbsp;</div>
					<div className="offertbar__card-wrapper">
						<p className="offertbar__card-title">Kupon prezentowy</p>
						<p className="offertbar__card-paragraph">
							Brak pomysłu na prezent dla bliskiej Ci osoby? Podaruj już dziś
							wiatr we włosach i niezapomniane chwile z naszą ofertą. Kartę
							podarunkową otrzymasz w formacie pff na Twój adres e-mail.
						</p>
					</div>
				</div>
				<div className="offertbar__card-3">
					<div className="offertbar__card-picture-3">&nbsp;</div>
					<div className="offertbar__card-wrapper">
						<p className="offertbar__card-title">Na ślub</p>
						<p className="offertbar__card-paragraph">
							Organizujesz ślub lub wesele? Poszukujesz niebanalnego auta tylko
							dla swojga? Wyróżnijcie się jeszcze bardziej z naszą ofertą
							zawierającą tylko unikalne samochody. Oferta dostępna na terenie
							całego kraju.
						</p>
					</div>
				</div>
				<div className="offertbar__card-4">
					<div className="offertbar__card-picture-4">&nbsp;</div>
					<div className="offertbar__card-wrapper">
						<p className="offertbar__card-title">Event firmowy</p>
						<p className="offertbar__card-paragraph">
							Wszelkiego rodzaju imprezy firmowe zyskują na wartości dzięki
							naszej obecności! Podnieś prestiz imprezy obecnością samochodów,
							które zapadają w pamięci oraz po przejażdżce także i w sercu.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OffertsBar;
