import React from "react";
import Home from "./components/Home";
import {
	HashRouter,
	Route,
	Routes,
	Link,
	NavLink,
	Outlet,
} from "react-router-dom";
import LogIn from "./components/LogIn";
import HomeHeader from "./components/HomeHeader";

const App = () => {
	return (
		<HashRouter>
			<HomeHeader />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<LogIn />} />
			</Routes>
		</HashRouter>
	);
};

export default App;
