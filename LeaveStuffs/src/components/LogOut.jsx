import React from "react";
import { Link } from "react-router-dom";
import decoration from "../assets/decoration.png";

const LogOut = () => {
	return (
		<div className="logout_section">
			<h2>
				Wylogowanie nastąpiło <br /> pomyślnie!
			</h2>
			<img src={decoration} alt="decoration line" />

			<div className="login_buttons">
				<Link to="/" className="home_button">
					Strona główna
				</Link>
			</div>
		</div>
	);
};
export default LogOut;
