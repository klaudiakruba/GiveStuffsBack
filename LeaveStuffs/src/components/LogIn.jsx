import React from "react";
import { Link } from "react-router-dom";
import decoration from "../assets/decoration.png";

const LogIn = () => {
	return (
		<div className="login_section">
			<h2>Zaloguj się</h2>
			<img src={decoration} alt="decoration line" />
			<div className="login_main">
				<form className="login_form">
					<div>
						<label for="email"> Email</label>
						<input type="text" name="email" id="email" />
					</div>
					<div>
						<label for="password">Hasło</label>
						<input type="password" name="password" id="password" />
					</div>
				</form>
				<div className="login_buttons">
					<Link to="/register" className="reg_btn_log_sec">
						Załóż konto
					</Link>
					<button type="submit" className="login_btn">
						Zaloguj się{" "}
					</button>
				</div>
			</div>
		</div>
	);
};
export default LogIn;
