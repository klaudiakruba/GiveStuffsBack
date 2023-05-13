import React from "react";
import decoration from "../assets/decoration.png";
import icon1 from "../assets/Icon.png";
import icon2 from "../assets/Icon2.png";
import icon3 from "../assets/Icon3.png";
import icon4 from "../assets/Icon4.png";

import { Link } from "react-router-dom";

const SimpleSteps = () => {
	return (
		<section className="simple_steps_section" id="simple-steps">
			<div className="title_part">
				<h2 className="simple_steps_title">Wystarczą 4 proste kroki</h2>
				<img src={decoration} alt="decoration line"></img>
			</div>

			<div className="img_part">
				<div className="simple_steps_item">
					<img src={icon1} alt=""></img>
					<h4>Wybierz rzeczy</h4>
					<span>
						ubrania, zabawki,
						<br /> sprzęt i inne
					</span>
				</div>
				<div className="simple_steps_item">
					<img src={icon2} alt=""></img>
					<h4>Spakuj je</h4>
					<span>
						uskorzystaj z <br /> worków na śmieci
					</span>
				</div>
				<div className="simple_steps_item">
					<img src={icon3} alt=""></img>
					<h4>
						Zdecyduj komu <br /> chcesz pomóc
					</h4>
					<span>
						wybierz zaufane <br /> miejsce
					</span>
				</div>
				<div className="simple_steps_item">
					<img src={icon4} alt=""></img>
					<h4>Zamów kuriera</h4>
					<span>
						kurier przyjedzie <br /> w dogodnym terminie
					</span>
				</div>
			</div>
			<div className="button_part">
				<Link className="btn" to="/login">
					ODDAJ <br /> RZECZY
				</Link>
			</div>
		</section>
	);
};
export default SimpleSteps;
