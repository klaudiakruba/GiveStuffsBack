import React from "react";
import Home from "./components/Home";
import "./App.css";
import {
	HashRouter,
	Route,
	Routes,
	Link,
	NavLink,
	Outlet,
} from "react-router-dom";

const App = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
			</Routes>
		</HashRouter>
	);
};

export default App;
