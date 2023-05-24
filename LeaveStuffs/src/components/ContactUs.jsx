import React, { useState } from "react";
import backgroundImage from "../assets/Background Image.png";
import decoration from "../assets/decoration.png";
import facebookIcon from "../assets/Facebook.png";
import instagramIcon from "../assets/Instagram.png";

const ContactUs = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState(
		`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
	);
	const [nameError, setNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [messageError, setMessageError] = useState("");

	const validateEmail = (email) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const nameTest = /^\S+$/;

		if (name === "" || !nameTest.test(name)) {
			setNameError("Podane imię jest nieprawidłowe!");
		}
		if (email === "" || !validateEmail(email)) {
			setEmailError("Podany email jest nieprawidłowy!");
		}
		if (message.length < 120) {
			setMessageError("Wiadomość musi mieć conajmniej 120 znaków");
		}

		if (!nameError && !emailError && !messageError) {
			console.log("Wiadomość została wysłana! Wkrótce się skontaktujemy.");
		}
	};
	const API = fetch("https://fer-api.coderslab.pl/v1/portfolio/contact");
	API.then((resp) => {});
	return (
		<>
			<section className="contact_us_section" id="contact-us">
				<div className="background_image">
					<img src={backgroundImage} alt="folded clothes" />
				</div>
				<div className="right_sidebar">
					<div className="title_section">
						<h3 className="form_title">Skontaktuj się z nami</h3>
						<img src={decoration} alt="decoration line"></img>
					</div>
					<form className="form_section" onSubmit={handleSubmit}>
						<div className="first_form_sec">
							<div className="name_email">
								<label for="name"> Wpisz swoje imię</label>
								<input
									type="text"
									name="name"
									id="name"
									placeholder="Krzysztof"
									value={name}
									onChange={(e) => setName(e.target.value)}
									className={nameError ? "error" : ""}
								/>
								{nameError && <span className="error_text">{nameError}</span>}
							</div>
							<div className="name_email">
								<label for="email"> Wpisz swój email</label>
								<input
									type="text"
									name="email"
									id="email"
									value={email}
									placeholder="abc@xyz.pl"
									onChange={(e) => setEmail(e.target.value)}
									className={emailError ? "error" : ""}
								/>
								{emailError && <span className="error_text">{emailError}</span>}
							</div>
						</div>

						<div className="second_form_sec">
							<label for="message"> Wpisz swoją wiadomość</label>
							<textarea
								id="message"
								name="message"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								className={messageError ? "error" : undefined}></textarea>
							{messageError && (
								<span className="error_text">{messageError}</span>
							)}
						</div>
						<button type="submit">Wyślij</button>
					</form>
				</div>
			</section>
			<footer className="footer_sec">
				<span className="footer_text">Copyright by Coders Lab</span>
				<div className="footer_icons">
					<img src={facebookIcon} alt="facebook icon" />
					<img src={instagramIcon} alt="instagram icon" />
				</div>
			</footer>
		</>
	);
};
export default ContactUs;
