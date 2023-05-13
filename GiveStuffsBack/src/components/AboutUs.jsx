import React from "react";
import people from "../assets/People.png";
import decoration from "../assets/decoration.png";
import signature from "../assets/Signature.png";
const AboutUs = () => {
	return (
		<section className="about_us_section" id="about-us">
			<div className="left_sidebar">
				<h3>O nas</h3>
				<img className="decoration" src={decoration} alt="decoration line" />
				<span>
					Nori grape silver beet broccoli kombu beet <br />
					greens fava bean potato quandong celery.
					<br /> Bunya nuts black-eyed pea prairie turnip leek
					<br /> lentil turnip greens parsnip.
				</span>
				<img className="signature" src={signature} alt="signature" />
			</div>
			<div className="right_sidebar">
				<img
					src={people}
					alt="people're laughing, huging and looking at one point"
				/>
			</div>
		</section>
	);
};

export default AboutUs;
