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

const App = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/login" element={LogIn}></Route>
			</Routes>
		</HashRouter>
	);
};

export default App;
