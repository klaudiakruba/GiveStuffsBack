import React from "react";
import decoration from "../assets/decoration.png";
const LogIn = () => {
	return (
		<div className="login_section">
			<h2>Zaloguj się</h2>
			<img src={decoration} alt="decoration line"></img>
			<form className="login_form">
				<label for="email"> Email</label>
				<input type="text" name="email" id="email" />
				<label for="password">Hasło</label>
				<input type="password" name="password" id="password" />
			</form>
			<div></div>
		</div>
	);
};
export default LogIn;
