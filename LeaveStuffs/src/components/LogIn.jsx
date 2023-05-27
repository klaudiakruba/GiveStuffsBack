import React, { useState } from "react";
import { Link } from "react-router-dom";
import decoration from "../assets/decoration.png";

const LogIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [logged, setLogged] = useState("");

	const validateEmail = (email) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		if (email === "" || !validateEmail(email)) {
			setEmailError("Podany email jest nieprawidłowy!");
		}
		if (password === "" || password.length < 6) {
			setPasswordError("Podane hasło jest za krótkie!");
		}
		if (!emailError && !passwordError) {
			setLogged(true);
			console.log("Logged success");
		}
	};
	return (
		<div className="login_section">
			<h2>Zaloguj się</h2>
			<img src={decoration} alt="decoration line" />
			<div className="login_reg_main">
				<form className="login_form">
					<div>
						<label for="email"> Email</label>
						<input
							type="text"
							name="email"
							id="email"
							onChange={(e) => setEmail(e.target.value)}
							className={emailError ? "error" : undefined}
						/>
						{emailError && <span className="error_text_log">{emailError}</span>}
					</div>
					<div>
						<label for="password">Hasło</label>
						<input
							type="password"
							name="password"
							id="password"
							onChange={(e) => setPassword(e.target.value)}
							className={passwordError ? "error" : undefined}
						/>
						{passwordError && (
							<span className="error_text_log">{passwordError}</span>
						)}
					</div>
				</form>
				<div className="login_buttons">
					<Link to="/register" className="reg_btn_log_sec">
						Załóż konto
					</Link>
					<button type="submit" className="login_btn" onClick={handleSubmit}>
						Zaloguj się
					</button>
				</div>
			</div>
		</div>
	);
};

export default LogIn;
