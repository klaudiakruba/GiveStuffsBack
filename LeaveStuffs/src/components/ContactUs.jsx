import React from "react";
import backgroundImage from "../assets/Background Image.png";
import decoration from "../assets/decoration.png";
import facebookIcon from "../assets/Facebook.png";
import instagramIcon from "../assets/Instagram.png";

const ContactUs = () => {
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
					<form className="form_section">
						<div className="first_form_sec">
							<div className="name_email">
								<label for="name"> Wpisz swoje imię</label>
								<input
									type="text"
									name="name"
									id="name"
									placeholder="Krzysztof"
								/>
							</div>
							<div className="name_email">
								<label for="email"> Wpisz swój email</label>
								<input
									type="text"
									name="email"
									id="email"
									placeholder="abc@xyz.pl"
								/>
							</div>
						</div>

						<div className="second_form_sec">
							<label for="message"> Wpisz swoją wiadomość</label>
							<textarea id="message" name="message">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</textarea>
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
