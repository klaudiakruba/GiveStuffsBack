import React from "react";
import backgroundImage from "../assets/3 Columns Background.png";
const ThreeColumns = () => {
	return (
		<section className="three_columns_section">
			<div className="three_columns_items">
				<div className="item">
					<h2>10</h2>
					<span className="subtitle">ODDANYCH WORKÓW</span>
					<span className="text_item">
						Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
						enim a elit viverra elementuma. Aliquam erat volutpat.
					</span>
				</div>
				<div className="item">
					<h2>5</h2>
					<span className="subtitle">WSPARTYCH ORGANIZACJI</span>
					<span className="text_item">
						Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
						enim a elit viverra elementuma. Aliquam erat volutpat.
					</span>
				</div>
				<div className="item">
					<h2>7</h2>
					<span className="subtitle">ZORGANIZOWANYCH ZBIÓREK</span>
					<span className="text_item">
						Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
						enim a elit viverra elementuma. Aliquam erat volutpat.
					</span>
				</div>
			</div>
			<img src={backgroundImage} alt="yellow background"></img>
		</section>
	);
};

export default ThreeColumns;
