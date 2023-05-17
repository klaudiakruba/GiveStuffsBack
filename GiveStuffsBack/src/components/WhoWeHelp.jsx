import React from "react";
import { useState } from "react";
import decoration from "../assets/decoration.png";
const organizationsTab = [
	{
		id: 1,
		name: "Fundacjom",
		description:
			"W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
		entities: [
			{
				id: 1,
				name: "Fundacja Dbam o zdrowie",
				description:
					"Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
				keywords: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
			},
			{
				id: 2,
				name: "Fundacja “Dla dzieci",
				description: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
				keywords: "ubrania, meble, zabawki",
			},
			{
				id: 3,
				name: "Fundacja “Bez domu",
				description:
					"Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
				keywords: "ubrania, jedzenie, ciepłe koce",
			},
		],
	},
	{
		id: 2,
		name: "Organizacjom pozarządowym",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		entities: [
			{
				id: 1,
				name: "Organizacja “Lorem Ipsum 1",
				description:
					"Quis varius quam quisque id diam vel quam elementum pulvinar.",
				keywords: "Egestas, sed, tempus",
			},
			{
				id: 2,
				name: "Organizacja “Lorem Ipsum 2",
				description: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
				keywords: "Ut, aliquam, purus, sit, amet",
			},
			{
				id: 3,
				name: "Organizacja “Lorem Ipsum 3",
				description: "Scelerisque in dictum non consectetur a erat nam.",
				keywords: "Mi, quis, hendrerit, dolor",
			},
		],
	},
	{
		id: 3,
		name: "Lokalnym zbiórkom",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		entities: [
			{
				id: 1,
				name: "Zbiórka “Lorem Ipsum 1",
				description:
					"Quis varius quam quisque id diam vel quam elementum pulvinar.",
				keywords: "Egestas, sed, tempus",
			},
			{
				id: 2,
				name: "Zbiórka “Lorem Ipsum 2”",
				description:
					"Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
				keywords: "Ut, aliquam, purus, sit, amet",
			},
			{
				id: 3,
				name: "Zbiórka “Lorem Ipsum 3”",
				description: "Scelerisque in dictum non consectetur a erat nam.",
				keywords: "Mi, quis, hendrerit, dolor",
			},
		],
	},
];

const WhoWeHelp = () => {
	// const [organizationItem, setOrganizationItem] = useState(({}));
	return (
		<section className="who_we_help_section" id="who-we-help">
			<div>
				<h2 className="who_we_help_title">Komu pomagamy?</h2>
				<img src={decoration} alt="decoration line"></img>
			</div>
			<div className="organizations">
				<span className="organization_name">Fundacjom </span>
				<span className="organization_name">
					Organizacjom <br /> pozarządowym
				</span>
				<span className="organization_name">
					Lokalnym <br /> zbiórkom
				</span>
			</div>
			<span className="organization_infor"></span>
		</section>
	);
};

export default WhoWeHelp;
