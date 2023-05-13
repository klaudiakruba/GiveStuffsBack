import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/Hero Image.png";
import decoration from "../assets/decoration.png";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const HomeHeader = () => {
	return (
		<section className="home" id="section-home">
			<div className="home_header_left_sidebar">
				<div>
					{/* <div
					style={{
						backgroundImage: `url("${heroImage}")`,
						width: 100,
					}}>	 */}
					<img src={heroImage} alt="box with stuffs to give away" />
				</div>
			</div>
			<div className="home_header_right_sidebar">
				<div className="log_reg_button">
					<Link className="log_btn" to="/login">
						Zaloguj
					</Link>
					<Link className="reg_btn" to="/register">
						Załóż konto
					</Link>
				</div>
				<div className="home_navigation">
					<ul>
						<li className="nav_element">
							<ScrollLink
								to="home"
								spy="true"
								smooth={true}
								offset={-70}
								duration={500}
								className="nav_link">
								Start
							</ScrollLink>
						</li>
						<li className="nav_element">
							<ScrollLink
								to="simple-steps"
								spy="true"
								smooth={true}
								offset={-70}
								duration={500}
								className="nav_link">
								O co chodzi?
							</ScrollLink>
						</li>
						<li className="nav_element">
							<ScrollLink
								to="home"
								spy="true"
								smooth={true}
								offset={-70}
								duration={500}
								className="nav_link">
								O nas
							</ScrollLink>
						</li>
						<li className="nav_element">
							<ScrollLink
								to="home"
								spy="true"
								smooth={true}
								offset={-70}
								duration={500}
								className="nav_link">
								Fundacja i organizacje
							</ScrollLink>
						</li>
						<li className="nav_element">
							<ScrollLink
								to="home"
								spy="true"
								smooth={true}
								offset={-70}
								duration={500}
								className="nav_link">
								Kontakt
							</ScrollLink>
						</li>
					</ul>
				</div>
				<div className="home_title_btns">
					<h1>
						Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce
					</h1>
					<img src={decoration} alt="decoration line"></img>
					<div className="tabs">
						<Link className="btn" to="/login">
							ODDAJ <br /> RZECZY
						</Link>
						<Link className="btn" to="/login">
							ZORGANIZUJ ZBÓRKĘ
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeHeader;
