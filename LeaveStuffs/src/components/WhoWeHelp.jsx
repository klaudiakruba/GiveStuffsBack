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
				name: "Fundacja “Dbam o zdrowie”",
				description:
					"Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
				keywords: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
			},
			{
				id: 2,
				name: "Fundacja “Dla dzieci”",
				description: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
				keywords: "ubrania, meble, zabawki",
			},
			{
				id: 3,
				name: "Fundacja “Bez domu”",
				description:
					"Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
				keywords: "ubrania, jedzenie, ciepłe koce",
			},
			{
				id: 4,
				name: "Fundacja “Fundaction 4”",
				description:
					"Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
				keywords: "ubrania, jedzenie, ciepłe koce",
			},
			{
				id: 5,
				name: "Fundacja “Fundaction 5”",
				description:
					"Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
				keywords: "ubrania, jedzenie, ciepłe koce",
			},
			{
				id: 6,
				name: "Fundacja “Fundaction 6”",
				description:
					"Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
				keywords: "ubrania, jedzenie, ciepłe koce",
			},
			{
				id: 7,
				name: "Fundacja “Fundaction 7”",
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
				name: "Organizacja “Lorem Ipsum 1”",
				description:
					"Quis varius quam quisque id diam vel quam elementum pulvinar.",
				keywords: "Egestas, sed, tempus",
			},
			{
				id: 2,
				name: "Organizacja “Lorem Ipsum 2”",
				description:
					"Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
				keywords: "Ut, aliquam, purus, sit, amet",
			},
			{
				id: 3,
				name: "Organizacja “Lorem Ipsum 3”",
				description: "Scelerisque in dictum non consectetur a erat nam.",
				keywords: "Mi, quis, hendrerit, dolor",
			},
			{
				id: 4,
				name: "Organizacja “Lorem Ipsum 4”",
				description: "Scelerisque in dictum non consectetur a erat nam.",
				keywords: "Mi, quis, hendrerit, dolor",
			},
			{
				id: 5,
				name: "Organizacja “Lorem Ipsum 5”",
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
				name: "Zbiórka “Lorem Ipsum 1”",
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

const WhoWeHelp = ({}) => {
	const [activeTab, setActiveTab] = useState(organizationsTab[1]);
	const [currentPage, setCurrentPage] = useState(1);
	const organizationPerPage = 3;
	const totalPages = Math.ceil(activeTab.entities.length / organizationPerPage);
	const pages = Array.from({ length: totalPages }).map((_, id) => id + 1);

	const handleClickedTab = (tab) => {
		setActiveTab(tab);
	};

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};
	const startIndex = (currentPage - 1) * organizationPerPage;
	const endIndex = startIndex + organizationPerPage;
	const organizationsToShow = activeTab.entities.slice(startIndex, endIndex);
	console.log(organizationsToShow);
	return (
		<section className="who_we_help_section" id="who-we-help">
			<div>
				<h2 className="who_we_help_title">Komu pomagamy?</h2>
				<img src={decoration} alt="decoration line"></img>
			</div>
			<div className="organizations">
				{organizationsTab.map((tab) => (
					<button
						key={tab.id}
						className={`organization_name ${tab === activeTab ? "active" : ""}`}
						onClick={() => handleClickedTab(tab)}>
						{tab.name}
					</button>
				))}
			</div>
			<span className="organization_info">{activeTab.description}</span>
			<ul>
				{organizationsToShow.map((entity) => (
					<li key={entity.id} className="item_info">
						<h3>{entity.name}</h3>
						<p className="item_description">{entity.description}</p>
						<p className="item_keywords">{entity.keywords}</p>
					</li>
				))}
			</ul>
			<ul className="pages">
				{pages.map((value, id) => (
					<li
						key={id}
						className={value === currentPage ? "active" : undefined}
						onClick={() => handlePageChange(value)}>
						{value}
					</li>
				))}
			</ul>
		</section>
	);
};

export default WhoWeHelp;
