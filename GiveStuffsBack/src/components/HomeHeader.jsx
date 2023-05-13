import React from "react";
import { Link } from "react-router-dom";
// import { Link, animateScroll as scroll } from "react-scroll";
const HomeHeader = () => {
	return (
		<section className="home_header">
			<div className="log_reg_button">
				<button>Zaloguj</button>
				<Link className="reg_button" to="/register">
					Załóż konto
				</Link>
			</div>
			<div className="home_navigation"></div>
		</section>
	);
};

export default HomeHeader;
