import React from "react";
import HomeHeader from "./HomeHeader";
import decoration from "../assets/decoration.png";
import { Link } from "react-router-dom";
const HomeMain = () => {
	return (
		<>
			<section className="home_main" id="section-home">
				<HomeHeader></HomeHeader>
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
			</section>
		</>
	);
};
export default HomeMain;
