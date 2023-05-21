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
import Register from "./components/Register";
import LogOut from "./components/LogOut";
const App = () => {
	return (
		<HashRouter>
			<HomeHeader />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<LogIn />} />
				<Route path="/register" element={<Register />} />
				<Route path="/logout" element={<LogOut />} />
			</Routes>
		</HashRouter>
	);
};

export default App;
