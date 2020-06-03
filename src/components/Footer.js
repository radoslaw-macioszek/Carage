import React from "react";
import facebookLogo from "../img/facebook-white-2.svg";
import instagramLogo from "../img/instagram-white.svg";
import wesele from "../img/wesele.png";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__top">
				<div className="footer__top-contact">
					<p className="footer__top-social-title">Kontakt</p>
					<div className="footer__item">
						<p className="footer__item-topName">+46 662 628 821</p>
					</div>
					<div className="footer__item">
						<p className="footer__item-topName">e-mail: biuro@carage.pl</p>
					</div>
				</div>
				<div className="footer__top-social">
					<p className="footer__top-social-title">Social</p>
					<div className="footer__item">
						<img
							className="footer__item-logo"
							src={facebookLogo}
							alt="facebook logo"
						/>
						<p className="footer__item-bottomName">Facebook</p>
					</div>
					<div className="footer__item">
						<img
							className="footer__item-logo"
							src={instagramLogo}
							alt="instagram logo"
						/>
						<p className="footer__item-bottomName">Instagram</p>
					</div>
					<div className="footer__item">
						<img
							className="footer__item-logo"
							src={wesele}
							alt="instagram logo"
						/>
						<p className="footer__item-bottomName">Wesele z klasą</p>
					</div>
				</div>
				<div className="footer__top-contact">
					<p className="footer__top-social-title">O nas</p>
					<div className="footer__item">
						<p className="footer__item-middleName">Carage.pl S.C</p>
					</div>
					<div className="footer__item">
						<p className="footer__item-middleName">Gminna 11a, 61-313 Poznań</p>
					</div>
					<div className="footer__item">
						<p className="footer__item-middleName">NIP 7822839525</p>
					</div>
				</div>
			</div>
			<div className="footer__bottom">
				<div className="footer__bottom-logo">&nbsp;</div>
				<p class="copyright">
					&copy; Copyright 2020 Carage.pl. All rights reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
