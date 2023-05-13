import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/Hero Image.png";
import decoration from "../assets/decoration.png";
// import { Link, animateScroll as scroll } from "react-scroll";
const HomeHeader = () => {
	return (
		<section className="home">
			<div className="home_header_left_sidebar">
				<div>
					<img src={heroImage} alt="box with stuffs to give away"></img>
				</div>
			</div>
			<div className="home_header_right_sidebar">
				<div className="log_reg_button">
					<button>Zaloguj</button>
					<Link className="reg_button" to="/register">
						Załóż konto
					</Link>
				</div>
				<div className="home_navigation">
					<ul>
						<li className="nav_element">Start</li>
						<li className="nav_element">O co chodzi?</li>
						<li className="nav_element">O nas</li>
						<li className="nav_element">Fundacja i organizacje</li>
						<li className="nav_element">Kontakt</li>
					</ul>
				</div>
				<div className="home_title_btns">
					<h1>
						Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce
					</h1>
					<img src={decoration} alt="decoration line"></img>
					<div className="buttons">
						<button className="btn">
							ODDAJ <br /> RZECZY
						</button>
						<button className="btn">ZORGANIZUJ ZBÓRKĘ</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeHeader;
