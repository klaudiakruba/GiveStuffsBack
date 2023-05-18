import React from "react";
import ThreeColumns from "./ThreeColumns";
import SimpleSteps from "./SimpleSteps";
import AboutUs from "./AboutUs";
import WhoWeHelp from "./WhoWeHelp";
import ContactUs from "./ContactUs";
import HomeMain from "./HomeMain";
const Home = () => {
	return (
		<>
			<HomeMain></HomeMain>
			<ThreeColumns></ThreeColumns>
			<SimpleSteps></SimpleSteps>
			<AboutUs></AboutUs>
			<WhoWeHelp></WhoWeHelp>
			<ContactUs></ContactUs>
		</>
	);
};

export default Home;
