import React, { useState } from "react";
import { Link } from "react-router-dom";
import decoration from "../assets/decoration.png";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [confirmPasswordError, setconfirmPasswordError] = useState("");

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
		if (confirmPassword === "" || confirmPassword !== password) {
			setconfirmPasswordError("Błędne hasło");
		}
		if (!emailError && !passwordError && !confirmPasswordError) {
			setLogged(true);
			console.log("Register successfull");
		}
	};
	return (
		<div className="login_section">
			<h2>Załóż konto</h2>
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

					<div>
						<label for="confirm_password"> Powtórz hasło</label>
						<input
							type="password"
							name="confirm_password"
							id="confirm_password"
							onChange={(e) => setPassword(e.target.value)}
							className={confirmPasswordError ? "error" : undefined}
						/>
						{confirmPasswordError && (
							<span className="error_text_log">{confirmPasswordError}</span>
						)}
					</div>
				</form>
				<div className="login_buttons">
					<Link to="/login" className="reg_btn_log_sec">
						Zaloguj się
					</Link>
					<button type="submit" className="login_btn" onClick={handleSubmit}>
						Załóż konto
					</button>
				</div>
			</div>
		</div>
	);
};
export default Register;
