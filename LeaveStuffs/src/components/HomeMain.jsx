import React from "react";
import decoration from "../assets/decoration.png";
import { Link } from "react-router-dom";
import heroImage from "../assets/Hero Image.png";
const HomeMain = () => {
	return (
		<>
			<section className="home_main" id="section-home">
				<div className="home_main_left_sidebar">
					{/* <div
					style={{
						backgroundImage: `url("${heroImage}")`,
						width: 100,
					}}>	 */}
					<img src={heroImage} alt="box with stuffs to leave" />
				</div>
				<div className="home_main_right_sidebar">
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
		</>
	);
};
export default HomeMain;
