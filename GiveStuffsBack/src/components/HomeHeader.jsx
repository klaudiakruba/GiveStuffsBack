import React from "react";
import { Link } from "react-router-dom";
const HomeHeader = () => {
	return (
		<div className="header">
			<button>Zaloguj</button>
			<Link to="/register">Załóż konto</Link>
		</div>
	);
};

export default HomeHeader;
