import React from "react";
import HomeHeader from "./HomeHeader";
import ThreeColumns from "./ThreeColumns";
import SimpleSteps from "./SimpleSteps";
import AboutUs from "./AboutUs";
const Home = () => {
	return (
		<>
			<HomeHeader></HomeHeader>
			<ThreeColumns></ThreeColumns>
			<SimpleSteps></SimpleSteps>
			<AboutUs></AboutUs>
		</>
	);
};

export default Home;
