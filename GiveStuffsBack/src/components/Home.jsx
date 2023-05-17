import React from "react";
import HomeHeader from "./HomeHeader";
import ThreeColumns from "./ThreeColumns";
import SimpleSteps from "./SimpleSteps";
import AboutUs from "./AboutUs";
import WhoWeHelp from "./WhoWeHelp";
import ContactUs from "./ContactUs";
const Home = () => {
	return (
		<>
			<HomeHeader></HomeHeader>
			<ThreeColumns></ThreeColumns>
			<SimpleSteps></SimpleSteps>
			<AboutUs></AboutUs>
			<WhoWeHelp></WhoWeHelp>
			<ContactUs></ContactUs>
		</>
	);
};

export default Home;
