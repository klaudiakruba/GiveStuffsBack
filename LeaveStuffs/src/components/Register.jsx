import React from "react";
import { Link } from "react-router-dom";
import decoration from "../assets/decoration.png";

const Register = () => {
	return (
		<div className="login_section">
			<h2>Załóż konto</h2>
			<img src={decoration} alt="decoration line" />
			<div className="login_reg_main">
				<form className="login_form">
					<div>
						<label for="email"> Email</label>
						<input type="text" name="email" id="email" />
					</div>
					<div>
						<label for="password">Hasło</label>
						<input type="password" name="password" id="password" />
					</div>
					<div>
						<label for="confirm_password"> Powtórz hasło</label>
						<input
							type="password"
							name="confirm_password"
							id="confirm_password"
						/>
					</div>
				</form>
				<div className="login_buttons">
					<Link to="/login" className="reg_btn_log_sec">
						Zaloguj się
					</Link>
					<button type="submit" className="login_btn">
						Załóż konto
					</button>
				</div>
			</div>
		</div>
	);
};
export default Register;
